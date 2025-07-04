import React from 'react';

import heroImage from '../../../assets/canfranhead.png'; // The top image with two boys
import whatWeDoImage from '../../../assets/canfran.png'; // The image with the girls in uniform
import getInvolvedImage from '../../../assets/canopyfrance.jpeg'; // The image of the man in front of a building
import Mohit_France from '../../../assets/team/all/Mohit_France.png';
import Olivia_France from '../../../assets/team/all/Olivia_France.png';
import Ainhoa_France from '../../../assets/team/all/Ainhoa_France.png';


const teamMembers = [
  {
    id: 1,
    name: 'Mohit Rauniyar',
    category: 'CORE TEAM',
    image: Mohit_France,
    description: 'Established Canopy Nepal and leads its global vision, actively overseeing international chapters in the USA and France while driving strategic fundraising to expand impact and ensure long-term sustainability.',
    linkedin: 'https://www.linkedin.com/in/mohitrauniyar/'
  },
  {
    id: 3,
    name: 'Ainhoa Beneitez',
    category: 'CORE TEAM',
    image: Ainhoa_France,
    description: 'Committed team member working to strengthen connections between the Nepali diaspora and allies in France while supporting Canopy\'s educational initiatives.',
    linkedin: 'https://www.linkedin.com/in/ainhoa-beneitez-343b87170/'
  },
  {
    id: 2,
    name: 'Olivia Palermo',
    category: 'CORE TEAM',
    image: Olivia_France,
    description: 'Passionate team member dedicated to Canopy France\'s mission of supporting education equity in Nepal through fundraising, cultural events, and community engagement across France.',
    linkedin: ''
  }
  
];
const CanopyFranceSection = () => {
  return (
    <div className="bg-white font-sans mt-28">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden mb-2">
        <img
          src={heroImage}
          alt="Children in Nepal"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-6xl font-bold">
            Canopy France
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Text */}
        <div className="py-8 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            Established in 2022, <span className='text-primary-red font-bold'>Canopy France is our first international chapter</span>, founded by
            a passionate group of young changemakers from France and Nepal. Registered as
            a legal nonprofit under French law, the chapter supports Canopy Nepal by raising
            awareness, building partnerships, and mobilizing resources across Europe.
          </p>
        </div>

        {/* What We Do Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={whatWeDoImage}
                alt="Students in a classroom"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">What We Do?</h2>
              <ul className="list-disc text-gray-700 space-y-6 text-2xl">
                <li className="text-xl">Organize creative fundraising campaigns, cultural events, and storytelling nights across France</li>
                <li className="text-xl">Strengthen connections between the Nepali diaspora and allies in France</li>
                <li className="text-xl">Raise awareness around education equity through exhibitions, university partnerships, and youth networks</li>
                <li className="text-xl">Directly support core programs like CANSHIP and Katha Bunaun with financial and advocacy support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Want to Get Involved Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen pb-8">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={getInvolvedImage}
                alt="Volunteer for Canopy France"
                className="w-full h-[500px] object-cover object-bottom"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">Want to Get Involved?</h2>
              <p className="text-gray-700 text-xl mb-4">If you're based in France and want to help us:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-6 text-2xl">
                <li className="text-xl">Host a fundraiser or awareness event</li>
                <li className="text-xl">Partner with us for an academic or youth engagement initiative</li>
                <li className="text-xl">Volunteer your time or skills</li>
              </ul>
              <div className="mt-8">
                <span className="font-bold text-2xl text-gray-800">Reach out to us at:</span><br />
                <a href="mailto:contact@canopyfrance.fr" className="text-primary-red hover:underline break-all text-xl">contact@canopyfrance.fr</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="w-full flex justify-center pb-4">
          <div className="text-center text-xl">
            <span className="text-gray-700">And don't forget to </span>
            <a href="#" className="text-primary-red hover:underline font-semibold">[Subscribe to the Canopy France Newsletter]</a>
            <span className="text-gray-700"> to stay updated on our events, stories, and impact from the ground.</span>
          </div>
        </div>
      </div>

      <hr/>

      {/* Meet the Team Section */}
      <div className="py-8">
        <p className="text-center text-black text-xl mb-8">
          The chapter is led by a lean team, and together, they bring cross-cultural <br></br>energy and grassroots commitment to the mission.
        </p>
        <h2 className="text-center text-3xl font-bold text-primary-red mb-8">
          Meet the Canopy France Team
        </h2>
        <div className="max-w-7xl mx-auto px-6 pb-4">
          {/* Responsive flex layout with centered last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                  {/* Square Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="bg-gray-50 p-6">
                    <div className="flex items-center mb-1">
                      <h3 className="text-2xl font-bold text-primary-orange mr-2">
                        {member.name}
                      </h3>
                      {/* LinkedIn Link - Next to name */}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-blue hover:text-primary-gray"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="mt-4 text-gray-700 text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CanopyFranceSection;