import React from 'react';
import l3 from '../../assets/l3.png';

const ThankfulPartnersSection = () => {
  return (
    <section className="bg-primary-gray/5 py-4 lg:py-8">
      {/* Header - Keep centered with max width */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl text-primary-red font-bold">
            We Are Thankful To
          </h2>
        </div>
      </div>
      
      <div className="w-full overflow-hidden px-16 -mt-24 -mb-24">
        <img 
          src={l3} 
          alt="Canopy Nepal Partners - including Nepal Government, Harvard Kennedy School, hundredED, NCEP, Alaya, International Literacy Learning, Friends of Nepal Adelaide, Milken Penn GSE, International Literacy Association, US Embassy Youth Council, UN Women Asia Pacific, Global Citizen, World Literacy Foundation, Little Big Fund, and YO"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default ThankfulPartnersSection;
