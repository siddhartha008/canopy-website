import React, { useState } from 'react';


// NOTE: Replace these with the actual paths to your images.
import donateHeroImage from '../../assets/donatehero.png'; // Placeholder for the top image of the smiling girl
import whyGiveImage from '../../assets/donatebody.jpg';   // Placeholder for the image of the young boy
import DonationModal from './DonationModal';
import BookOpen from '../../assets/dicon1.png';
import Utensils from '../../assets/dicon2.png';
import GraduationCap from '../../assets/dicon3.png';
import Users from '../../assets/dicon4.png';
import Heart from '../../assets/dicon5.png';

// Data for the donation tiers
const donationTiers = [
  {
    amount: '$25',
    description: 'provides school supplies for one student',
    icon: BookOpen,
  },
  {
    amount: '$50',
    description: 'covers one month of nutritious school meals and transport',
    icon: Utensils,
  },
  {
    amount: '$100',
    description: 'supports a CANSHIP scholar for one month',
    icon: GraduationCap,
  },
  {
    amount: '$250',
    description: 'funds a storytelling workshop for an entire classroom',
    icon: Users,
  },
  {
    amount: '$1,000',
    description: 'covers a full year of support for a student, including scholarship, school mentorship, and workshops',
    icon: Heart,
  },
];

// Data for the 'Why Give' section
const whyGivePoints = [
  'We work directly with students, families, communities, and local governments',
  'Our programs are designed to be long-term, inclusive, and measurable',
  'Donations support education-focused programs in Nepal, with more than 80% directly going to the students',
  'We keep you updated with real stories and real impact',
  'We treat your donation like tea in a Nepali household: shared generously and used wisely',
];

const Donate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPrefillAmount, setModalPrefillAmount] = useState<number | undefined>(undefined);
  const [hideCustomAmount, setHideCustomAmount] = useState(false);

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
          src={donateHeroImage}
          alt="Smiling student in Nepal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction Text */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-primary-blue mb-8">
            Your gift helps students stay in school, grow with confidence, and dream without limits.
          </h2>
          <p className="text-xl leading-relaxed">
            Every donation to Canopy Nepal directly supports students through scholarships, story-based learning, and long-term mentorship. Whether it's a one-time gift or a monthly commitment, your support helps break barriers and build futures.
          </p>
        </div>

        {/* What Your Donation Supports Section */}
        <div className="py-8">
          <h3 className="text-center text-3xl font-bold text-primary-blue mb-8">
            What Your Donation Supports
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
              className="bg-primary-blue text-white text-xl font-bold py-2 px-4 rounded-lg hover:bg-primary-cyan transition-colors"
            >
              Donate Now
            </button>
        </div>
        <p className="text-center text-lg text-gray-500 mb-8">
          Secure and tax-deductible (in the U.S. through Canopy USA, a registered 501(c)(3) nonprofit)
        </p>
        

        {/* Why Give to Canopy Section */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-blue mb-4">Why Give to Canopy?</h2>
              <ul className="list-disc  text-gray-700 space-y-4 text-xl">
                {whyGivePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img 
                src={whyGiveImage} 
                alt="A young boy smiling" 
                className="w-full h-full object-cover object-center mb-4"
              />
            </div>
          </div>
        </div>


        {/* Bank Transfer Section */}
        <div className="mt-8 mb-0 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-primary-blue mb-4">Prefer Bank Transfer or In-Kind Donation?</h2>
            <div className="text-left inline-block max-w-md mx-auto">
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-lg">
                    <span className="font-semibold text-gray-800">Account Number:</span>
                    <span className="text-gray-600">00116539370</span>
                    
                    <span className="font-semibold text-gray-800">Account Name:</span>
                    <span className="text-gray-600">CANOPY NEPAL</span>

                    <span className="font-semibold text-gray-800">Bank Name:</span>
                    <span className="text-gray-600">SIDDHARTHA BANK LTD.</span>

                    <span className="font-semibold text-gray-800">SWIFT Code:</span>
                    <span className="text-gray-600">SIDDNPKA</span>

                    <span className="font-semibold text-gray-800">Branch Name:</span>
                    <span className="text-gray-600">HATTISAR</span>

                    <span className="font-semibold text-gray-800">City:</span>
                    <span className="text-gray-600">KATHMANDU</span>

                    <span className="font-semibold text-gray-800">Country:</span>
                    <span className="text-gray-600">NEPAL</span>
                </div>
            </div>
        </div>

      </div>
      
      {/* Footer Message */}
      <div className="bg-white mb-8">
        <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-xl text-gray-700 mb-2">Thank you for believing in students who just need a chance to thrive.</p>
            <p className="text-xl font-semibold text-gray-800">Together, we're not just funding education—we're changing lives, one story at a time.</p>
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