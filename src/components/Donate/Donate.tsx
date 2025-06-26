import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, CreditCard, Shield, CheckCircle, Users, BookOpen, Stethoscope, Briefcase } from 'lucide-react';

const Donate: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [selectedAmount, setSelectedAmount] = useState<number | null>(25);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [currentStep, setCurrentStep] = useState<number>(1);

  const presetAmounts = [10, 25, 50, 100, 250, 500];
  
  const causes = [
    {
      id: 'education',
      title: 'Education Programs',
      icon: BookOpen,
      description: 'Support literacy and learning initiatives',
      color: 'primary-blue',
      impact: '$25 can provide books for 5 students for a month',
    },
    {
      id: 'healthcare',
      title: 'Healthcare Access',
      icon: Stethoscope,
      description: 'Fund medical clinics and health services',
      color: 'primary-red',
      impact: '$50 can provide basic healthcare for a family',
    },
    {
      id: 'skills',
      title: 'Skills Training',
      icon: Briefcase,
      description: 'Vocational training for sustainable livelihoods',
      color: 'primary-orange',
      impact: '$100 can train one person in a marketable skill',
    },
    {
      id: 'general',
      title: 'Where Needed Most',
      icon: Heart,
      description: 'Support our most urgent initiatives',
      color: 'primary-cyan',
      impact: 'Your donation makes the biggest impact where it\'s needed most',
    },
  ];

  const [selectedCause, setSelectedCause] = useState<string>('general');

  const calculateImpact = (amount: number) => {
    if (amount >= 500) return 'Fund an entire month of programs for a community';
    if (amount >= 250) return 'Provide healthcare for 5 families for a month';
    if (amount >= 100) return 'Train 1 person in vocational skills';
    if (amount >= 50) return 'Support 10 students with educational materials';
    if (amount >= 25) return 'Provide books for 5 students';
    return 'Every dollar makes a difference';
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(null);
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-gray mb-6">
            Make a <span className="text-primary-red">Difference</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your donation directly supports communities in Nepal, creating lasting change 
            through education, healthcare, and sustainable development programs.
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center mb-12">
          {[1, 2, 3].map((step) => (
            <React.Fragment key={step}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors duration-300 ${
                currentStep >= step 
                  ? 'bg-primary-cyan text-white' 
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {currentStep > step ? <CheckCircle className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div className={`w-16 h-0.5 transition-colors duration-300 ${
                  currentStep > step ? 'bg-primary-cyan' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <AnimatePresence mode="wait">
            {/* Step 1: Choose Cause & Amount */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold text-primary-gray mb-8 text-center">
                  Choose Your Impact
                </h3>

                {/* Cause Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {causes.map((cause) => (
                    <motion.div
                      key={cause.id}
                      onClick={() => setSelectedCause(cause.id)}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        selectedCause === cause.id
                          ? `border-${cause.color} bg-${cause.color}/5`
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${cause.color}/10 rounded-full flex items-center justify-center`}>
                          <cause.icon className={`w-6 h-6 text-${cause.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-primary-gray mb-2">{cause.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{cause.description}</p>
                          <p className="text-xs text-gray-500">{cause.impact}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Donation Type */}
                <div className="flex justify-center mb-8">
                  <div className="bg-gray-100 rounded-full p-1 flex">
                    <button
                      onClick={() => setDonationType('one-time')}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        donationType === 'one-time'
                          ? 'bg-white text-primary-gray shadow-md'
                          : 'text-gray-600'
                      }`}
                    >
                      One-time
                    </button>
                    <button
                      onClick={() => setDonationType('monthly')}
                      className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                        donationType === 'monthly'
                          ? 'bg-white text-primary-gray shadow-md'
                          : 'text-gray-600'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                {/* Amount Selection */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
                  {presetAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      onClick={() => handleAmountSelect(amount)}
                      className={`p-4 rounded-xl font-semibold transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-primary-cyan text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      ${amount}
                    </motion.button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Or enter custom amount:
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                {/* Impact Preview */}
                {getCurrentAmount() > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-primary-cyan/10 rounded-xl p-6 mb-8"
                  >
                    <h4 className="font-bold text-primary-gray mb-2">Your Impact:</h4>
                    <p className="text-gray-700">{calculateImpact(getCurrentAmount())}</p>
                  </motion.div>
                )}

                <motion.button
                  onClick={nextStep}
                  disabled={getCurrentAmount() <= 0}
                  className="w-full bg-primary-cyan text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-cyan/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: getCurrentAmount() > 0 ? 1.02 : 1 }}
                  whileTap={{ scale: getCurrentAmount() > 0 ? 0.98 : 1 }}
                >
                  Continue to Details
                </motion.button>
              </motion.div>
            )}

            {/* Step 2: Personal Details */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold text-primary-gray mb-8 text-center">
                  Your Information
                </h3>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                    />
                  </div>

                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id="newsletter"
                      className="w-5 h-5 text-primary-cyan border-gray-300 rounded focus:ring-primary-cyan"
                    />
                    <label htmlFor="newsletter" className="text-gray-700">
                      Subscribe to our newsletter for impact updates
                    </label>
                  </div>
                </form>

                <div className="flex space-x-4 mt-8">
                  <motion.button
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    onClick={nextStep}
                    className="flex-1 bg-primary-cyan text-white py-3 rounded-xl font-semibold hover:bg-primary-cyan/90 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Continue to Payment
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment */}
            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-8 md:p-12"
              >
                <h3 className="text-2xl font-bold text-primary-gray mb-8 text-center">
                  Secure Payment
                </h3>

                {/* Donation Summary */}
                <div className="bg-gray-50 rounded-xl p-6 mb-8">
                  <h4 className="font-bold text-primary-gray mb-4">Donation Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Amount:</span>
                      <span className="font-semibold">${getCurrentAmount()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-semibold capitalize">{donationType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cause:</span>
                      <span className="font-semibold">
                        {causes.find(c => c.id === selectedCause)?.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Card Number *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                      />
                      <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cardholder Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-cyan focus:border-transparent outline-none transition-colors duration-300"
                    />
                  </div>
                </form>

                {/* Security Notice */}
                <div className="flex items-center space-x-3 mt-6 p-4 bg-green-50 rounded-xl">
                  <Shield className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-800">
                    Your payment is secured with 256-bit SSL encryption
                  </span>
                </div>

                <div className="flex space-x-4 mt-8">
                  <motion.button
                    onClick={prevStep}
                    className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Back
                  </motion.button>
                  <motion.button
                    className="flex-1 bg-primary-red text-white py-3 rounded-xl font-semibold hover:bg-primary-red/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Heart className="w-5 h-5" />
                    <span>Donate ${getCurrentAmount()}</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Alternative Donation Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-primary-gray mb-6">
            Other Ways to Help
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-primary-blue mx-auto mb-4" />
              <h4 className="font-bold text-primary-gray mb-2">Volunteer</h4>
              <p className="text-gray-600 mb-4">Join our team in Nepal or support remotely</p>
              <button className="text-primary-blue font-semibold hover:underline">
                Learn More
              </button>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <Heart className="w-8 h-8 text-primary-red mx-auto mb-4" />
              <h4 className="font-bold text-primary-gray mb-2">Corporate Partnership</h4>
              <p className="text-gray-600 mb-4">Partner with us for CSR initiatives</p>
              <button className="text-primary-red font-semibold hover:underline">
                Get in Touch
              </button>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <BookOpen className="w-8 h-8 text-primary-orange mx-auto mb-4" />
              <h4 className="font-bold text-primary-gray mb-2">Fundraise</h4>
              <p className="text-gray-600 mb-4">Start your own fundraising campaign</p>
              <button className="text-primary-orange font-semibold hover:underline">
                Start Campaign
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Donate;