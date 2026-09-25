import React, { useState, useEffect } from 'react';


// NOTE: Replace these with the actual paths to your images.
import DonationModal from './DonationModal';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const Donate = () => {
  const page = useSite().donate;
  const donationTiers = page.tiers.map((tier) => ({ ...tier, icon: mediaUrl(tier.icon) }));
  const whyGivePoints = page.whyPoints;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefillAmount, setModalPrefillAmount] = useState<number | undefined>(undefined);
  const [hideCustomAmount, setHideCustomAmount] = useState(false);

  // Auto-scroll to donation supports section on page load
  useEffect(() => {
    const donationSupportsSection = document.getElementById('heading-section');
    if (donationSupportsSection) {
      const elementTop = donationSupportsSection.offsetTop;
      const navbarHeight = 80; // Adjust this value based on your navbar height
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleDonateClick = () => {
    setModalPrefillAmount(undefined);
    setHideCustomAmount(false);
    setIsModalOpen(true);
  };

  const handleTierClick = (amount: string) => {
    const numAmount = Number(amount.replace(/[^0-9.]/g, ''));
    setModalPrefillAmount(numAmount);
    setHideCustomAmount(true);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white font-sans mt-28">
      {/* Hero Section */}
      <div className="relative h-[450px] overflow-hidden">
        <img
          src={mediaUrl(page.heroImage)}
          alt="Smiling student in Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>
      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8" id="heading-section">
        
        {/* Introduction Text */}
        <div className="text-center max-w-4xl mx-auto" >
          <h2 className="text-2xl font-bold text-primary-blue mb-8">
            {page.headline}
          </h2>
          <p className="text-xl leading-relaxed">
            {page.intro}
          </p>
        </div>

        {/* What Your Donation Supports Section */}
        <div id="donation-supports" className="py-8">
          <h3 className="text-center text-3xl font-bold text-primary-blue mb-8">
            {page.supportsTitle}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="border-2 border-primary-orange rounded-lg p-6 text-center flex flex-col items-center cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl hover:border-primary-orange focus:outline-none focus:ring-4 focus:ring-primary-orange/30"
                onClick={() => handleTierClick(tier.amount)}
                tabIndex={0}
                role="button"
                aria-pressed="false"
              >
                <img
                  src={tier.icon}
                  alt={tier.description}
                  className="w-24 h-24 object-contain mb-4"
                />
                <span className="text-4xl font-bold text-black mb-4">{tier.amount}</span>
                <p className="text-gray-700 flex-grow">{tier.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Actions */}
        <div className="text-center space-x-4 mb-8">
            <button 
              onClick={handleDonateClick}
              className="bg-primary-blue text-white text-xl font-bold py-2 px-4 rounded-lg hover:bg-primary-cyan/80 transition-colors"
            >
              {page.button}
            </button>
        </div>
        <p className="text-center text-lg text-gray-500 mb-8">
          {page.taxNote}
        </p>
        

        {/* Why Give to Canopy Section */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-blue mb-4">{page.whyTitle}</h2>
              <ul className="list-disc  text-gray-700 space-y-4 text-xl">
                {whyGivePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img 
                src={mediaUrl(page.whyImage)} 
                alt="A young boy smiling" 
                className="w-full h-full object-cover object-center mb-4"
              />
            </div>
          </div>
        </div>


        {/* Bank Transfer Section */}
        <div className="mt-8 mb-0 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-primary-blue mb-4">{page.bankTitle}</h2>
            <div className="text-left inline-block max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg">
                    {page.bank.map((row) => (
                      <React.Fragment key={row.id}>
                        <span className="font-semibold text-gray-800">{row.label}:</span>
                        <span className="text-gray-600">{row.value}</span>
                      </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

      </div>
      
      {/* Footer Message */}
      <div className="bg-white mb-8">
        <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-xl text-gray-700 mb-2">{page.thanks}</p>
            <p className="text-xl font-semibold text-gray-800">{page.thanksEmphasis}</p>
        </div>
      </div>

      {/* Donation Modal */}
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        prefillAmount={modalPrefillAmount}
        hideCustomAmount={hideCustomAmount}
      />
    </div>
  );
};

export default Donate;