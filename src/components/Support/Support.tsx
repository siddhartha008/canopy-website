import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import DonationModal from '../Donate/DonationModal';

const SupportUsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-#eeeeee py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Statistic */}
        <div className="mb-12">
          <h3 className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-primary-red">73%</span> of students are out of school and stuck in cycles of <span className="text-primary-orange">generational poverty</span>
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-neutral-900 text-xl md:text-2xl font-medium mb-12 leading-relaxed">
          Our work to reduce the drop out rate needs your support. You can help by providing support to child's education, school sessions, or operational cost.
        </p>
        
        {/* CTA Button */}
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-8 mb-4">
        <button 
          className="inline-flex items-center bg-primary-orange text-white px-4 py-2 text-lg rounded-lg font-bold hover:bg-primary-cyan transition-all duration-300 hover:shadow-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Donate Now
          <svg 
            className="w-5 h-5 ml-2" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5l7 7-7 7" 
            />
          </svg>
        </button>
      </div>
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </section>
  );
};

export default SupportUsSection;