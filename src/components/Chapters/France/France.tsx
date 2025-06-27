import React from 'react';

import heroImage from '../../../assets/hero.png'; // The top image with two boys
import whatWeDoImage from '../../../assets/kbImpact.png'; // The image with the girls in uniform
import getInvolvedImage from '../../../assets/kbImpact.png'; // The image of the man in front of a building
import markSuzmanImage from '../../../assets/ow2.png';
import carolynAlcenaImage from '../../../assets/ow2.png';
import laurenBrightImage from '../../../assets/ow2.png';

const CanopyFranceSection = () => {
  return (
    <div className="bg-white font-sans mt-28">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={heroImage}
          alt="Children in Nepal"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-6xl font-bold">
            Canopy France
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Text */}
        <div className="py-8 text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            Established in 2022, Canopy France is our first international chapter, founded by
            a passionate group of young changemakers from France and Nepal. Registered as
            a legal nonprofit under French law, the chapter supports Canopy Nepal by raising
            awareness, building partnerships, and mobilizing resources across Europe.
          </p>
        </div>

        {/* What We Do Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen py-4">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={whatWeDoImage}
                alt="Students in a classroom"
                className="w-full h-full object-cover object-left"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Do?</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-6 text-2xl">
                <li className="text-xl">Organize creative fundraising campaigns, cultural events, and storytelling nights across France</li>
                <li className="text-xl">Strengthen connections between the Nepali diaspora and allies in France</li>
                <li className="text-xl">Raise awareness around education equity through exhibitions, university partnerships, and youth networks</li>
                <li className="text-xl">Directly support core programs like CANSHIP and Katha Bunaun with financial and advocacy support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Want to Get Involved Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen pt-4 pb-8">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={getInvolvedImage}
                alt="Volunteer for Canopy France"
                className="w-full h-full object-cover object-right"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-16 bg-white">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Want to Get Involved?</h2>
              <p className="text-gray-700 text-xl mb-4">If you're based in France and want to help us:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-6 text-xl">
                <li className="text-xl">Host a fundraiser or awareness event</li>
                <li className="text-xl">Partner with us for an academic or youth engagement initiative</li>
                <li className="text-xl">Volunteer your time or skills</li>
              </ul>
              <div className="mt-8">
                <span className="font-bold text-2xl text-gray-800">Reach out to us at:</span><br />
                <a href="mailto:info@canopyfrance.org" className="text-primary-blue hover:underline break-all text-xl">info@canopyfrance.org</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="w-full flex justify-center pb-4">
          <div className="text-center text-xl">
            <span className="text-gray-700">And don't forget to </span>
            <a href="#" className="text-primary-blue hover:underline font-semibold">[Subscribe to the Canopy France Newsletter]</a>
            <span className="text-gray-700"> to stay updated on our events, stories, and impact from the ground.</span>
          </div>
        </div>
      </div>

      <hr/>

      {/* Meet the Team Section */}
      <div className="py-8">
        <p className="text-center text-gray-700 text-2xl font-semibold mb-4">
          The chapter is led by a lean team, and together, they bring cross-cultural <br></br>energy and grassroots commitment to the mission.
        </p>
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">
          Meet the Team
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
          {/* Team Member 1 */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4 flex-1 max-w-xs mx-auto">
            <img
              src={markSuzmanImage}
              alt="Mark Suzman"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-800">Mark Suzman</h3>
            <p className="text-xs text-gray-600">CEO, Board Member</p>
          </div>
          {/* Team Member 2 */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4 flex-1 max-w-xs mx-auto">
            <img
              src={carolynAlcenaImage}
              alt="Carolyn Alcena"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-800">Carolyn Alcena</h3>
            <p className="text-xs text-gray-600">Chief Financial Officer</p>
          </div>
          {/* Team Member 3 */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4 flex-1 max-w-xs mx-auto">
            <img
              src={laurenBrightImage}
              alt="Lauren W. Bright"
              className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
            />
            <h3 className="text-lg font-bold text-gray-800">Lauren W. Bright</h3>
            <p className="text-xs text-gray-600">Chief Legal Officer, Corporate Secretary</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CanopyFranceSection;