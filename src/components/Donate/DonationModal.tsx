import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import PayPalDonation from './PayPalDonation';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillAmount?: number;
  hideCustomAmount?: boolean;
}

const DonationModal: React.FC<DonationModalProps> = ({ isOpen, onClose, prefillAmount, hideCustomAmount }) => {
  const [selectedAmount, setSelectedAmount] = useState<number>(prefillAmount ?? 25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  React.useEffect(() => {
    if (isOpen && prefillAmount !== undefined) {
      setSelectedAmount(prefillAmount);
      setCustomAmount('');
    }
  }, [isOpen, prefillAmount]);

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
    setErrorMessage(''); // Clear any previous errors
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setErrorMessage(''); // Clear any previous errors
    if (value && !isNaN(Number(value))) {
      setSelectedAmount(Number(value));
    }
  };

  const handleSuccess = (details: any) => {
    console.log('Donation success handler called!', details);
    setShowSuccess(true);
    setErrorMessage(''); // Clear any previous errors
    // You can add additional success handling here
    // For example, sending data to your backend
    //show a thank you for donating pop up
    
  };

  const handleError = (error: any) => {
    console.error('Donation error:', error);
    
    // Provide user-friendly error messages
    let userMessage = 'An error occurred during payment. Please try again.';
    
    if (error.message) {
      if (error.message.includes('cancelled')) {
        userMessage = 'Payment was cancelled. You can try again anytime.';
      } else if (error.message.includes('popup blocked')) {
        userMessage = 'Payment popup was blocked. Please allow popups for this site and try again.';
      } else if (error.message.includes('Window closed') || 
                 error.message.includes('window closed') ||
                 error.message.includes('Target window is closed') ||
                 error.message.includes('postrobot_method')) {
        userMessage = 'Payment window closed unexpectedly. Please try again.';
      } else if (error.message.includes('network')) {
        userMessage = 'Network error. Please check your connection and try again.';
      } else if (error.message.includes('timeout')) {
        userMessage = 'Payment timed out. Please try again.';
      } else if (error.message.includes('insufficient funds')) {
        userMessage = 'Insufficient funds. Please check your payment method and try again.';
      } else if (error.message.includes('card declined')) {
        userMessage = 'Card was declined. Please try a different payment method.';
      }
    }
    
    setErrorMessage(userMessage);
    
    // Log additional debugging information
    console.log('Error details:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      amount: selectedAmount,
      isMonthly: isMonthly
    });
  };

  const handleClose = () => {
    setShowSuccess(false);
    setSelectedAmount(25);
    setCustomAmount('');
    setIsMonthly(false);
    setErrorMessage(''); // Clear error message when closing
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">
            {showSuccess ? 'Thank You!' : 'Make a Donation'}
          </h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {showSuccess ? (
          /* Success State */
          <div className="p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Donation Successful!
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for your generous donation to Canopy Nepal. Your support helps students stay in school and dream without limits.
            </p>
            <button
              onClick={handleClose}
              className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-primary-cyan/80 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          /* Donation Form */
          <div className="p-6">
            {/* Donation Type Toggle */}
            <div className="flex bg-gray-100 rounded-lg p-1 mb-6">
              <button
                onClick={() => setIsMonthly(false)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  !isMonthly
                    ? 'bg-white text-primary-blue shadow-sm text-lg font-semibold'
                    : 'text-gray-600 hover:text-gray-800 text-lg'
                }`}
              >
                One-time
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  isMonthly
                    ? 'bg-white text-primary-blue shadow-sm font-semibold text-lg'
                    : 'text-gray-600 hover:text-gray-800 text-lg'
                }`}
              >
                Monthly
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Select Amount
              </label>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg border-2 text-lg  transition-colors ${
                      selectedAmount === amount && !customAmount
                        ? 'border-primary-blue bg-primary-blue/10 text-primary-blue font-semibold'
                        : 'border-gray-200 text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              {/* Custom Amount */}
              {!hideCustomAmount && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter a custom amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                      $
                    </span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      min="5"
                      step="1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Selected Amount Display */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600 font-bold">
                  {isMonthly ? 'Monthly donation:' : 'One-time donation:'}
                </span>
                <span className="text-2xl font-bold text-primary-blue">
                  ${selectedAmount}
                </span>
              </div>
            </div>

            {/* PayPal Button */}
            <PayPalDonation
              amount={selectedAmount}
              isMonthly={isMonthly}
              onSuccess={handleSuccess}
              onError={handleError}
            />

            {/* Error Message */}
            {errorMessage && (
              <div className="mt-4 p-3 bg-primary-red/30 border border-red-200 rounded-lg">
                <p className="text-primary-red text-sm">{errorMessage}</p>
              </div>
            )}

            {/* Security Notice */}
            <p className="text-xs text-gray-500 text-center mt-4">
              Your donation is secure and tax-deductible. Canopy USA is a registered 501(c)(3) nonprofit.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonationModal; 