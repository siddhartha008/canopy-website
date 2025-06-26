import { useState } from 'react';
import hero from '../../../assets/hero.png';

const CanopyUSASection = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={hero}
          alt="Canopy USA team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            M
          </div>
        </div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Canopy USA<br />
              <span className="text-4xl md:text-5xl">READ Nepal</span>
            </h1>
            <div className="text-white text-sm">
              <span>Home</span>
              <span className="mx-2"></span>
              <span className="underline">READ Country Affiliates</span>
              <span className="mx-2"></span>
              <span>READ Nepal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            Established in 2022, Canopy USA is our first international chapter, founded by 
            a passionate group of young changemakers from USA and Nepal. Registered as 
            a legal nonprofit under French law, the chapter supports Canopy Nepal by raising 
            awareness, building partnerships, and mobilizing resources across Europe.
          </p>
        </div>

        {/* What We Do Section */}
        <div className="relative mb-16">
          <div className="flex flex-col md:flex-row items-start gap-12">
            {/* Left Content */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">What We Do?</h2>
              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start">
                  <span className="mr-3 text-xl">•</span>
                  <span>Organize creative fundraising campaigns, cultural events, and storytelling nights across USA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">•</span>
                  <span>Strengthen connections between the Nepali diaspora and allies in USA</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">•</span>
                  <span>Raise awareness around education equity through exhibitions, university partnerships, and youth networks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl">•</span>
                  <span>Directly support core programs like CANSHIP and Katha Bunaun with financial and advocacy support</span>
                </li>
              </ul>
            </div>

            {/* Right Decorative Elements */}
            <div className="md:w-1/2 relative">
              {/* Floating Logo */}
              <div className="absolute top-0 right-20">
                <div className="relative">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                    M
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    •
                  </div>
                </div>
              </div>
              
              {/* Decorative Shapes */}
              <div className="mt-32">
                <svg viewBox="0 0 400 200" className="w-full">
                  <path
                    d="M0,150 Q100,100 200,120 T400,100 L400,200 L0,200 Z"
                    fill="#C6E48B"
                  />
                  <path
                    d="M0,180 Q150,140 300,160 T400,140 L400,200 L0,200 Z"
                    fill="#7CB342"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Team Leadership */}
        <div className="text-center mb-16">
          <p className="text-lg font-semibold text-gray-800">
            The chapter is led by a lean team, and together, they bring cross-cultural energy and grassroots commitment to the mission.
          </p>
        </div>

        {/* Get Involved Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6">Want to Get Involved?</h3>
          <p className="text-gray-700 mb-4">If you're based in USA and want to help us:</p>
          <ul className="space-y-3 text-gray-700 ml-8">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Host a fundraiser or awareness event</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Partner with us for an academic or youth engagement initiative</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Volunteer your time or skills</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mb-12">
          <p className="text-gray-700">
            <span className="font-semibold">Reach out to us at:</span>{' '}
            <a href="mailto:info@canopyUSA.org" className="text-blue-600 underline hover:text-blue-800">
              info@canopyUSA.org
            </a>
          </p>
        </div>


        {/* Newsletter CTA */}
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-700">
            And don't forget to <span className="font-bold">[Subscribe to the Canopy USA Newsletter]</span> to stay 
            updated on our events, stories, and impact from the ground.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CanopyUSASection;