import React from 'react';

import heroImage from '../../../assets/canusaheader.jpeg'; // The top image with two boys
import whatWeDoImage from '../../../assets/canusabody.jpg'; // The image with the girls in uniform
import getInvolvedImage from '../../../assets/canusa2.jpg'; // The image of the man in front of a building
import Angirash from '../../../assets/team/all/Angirash.png';
import Mohit from '../../../assets/team/all/Mohit.png';
import Monal from '../../../assets/team/all/Monal.png';


const teamMembers = [
  {
    id: 1,
    name: 'Mohit Rauniyar',
    title: 'Founder',
    category: 'CORE TEAM',
    image: Mohit,
    description: 'Established Canopy Nepal and leads its global vision, actively overseeing international chapters in the USA and France while driving strategic fundraising to expand impact and ensure long-term sustainability.',
    linkedin: 'https://www.linkedin.com/in/mohitrauniyar/'
  },
  {
    id: 2,
    name: 'Monal Bhattarai',
    title: 'Managing Director',
    category: 'CORE TEAM',
    image: Monal,
    description: 'Leads Canopy\'s vision, partnerships, and fundraising strategy—steering growth, building global relationships, and amplifying the organization\'s voice through thought leadership, board support, and international representation.',
    linkedin: 'http://www.linkedin.com/in/monal-bhattarai-bb3261194'
  },
  {
    id: 3,
    name: 'Angirash Karki',
    title: 'Executive Director',
    category: 'CORE TEAM',
    image: Angirash,
    description: 'Ensures Canopy operates smoothly by overseeing compliance, HR, finance, and risk management while building strong government partnerships and driving internal systems for staff performance and operational excellence.',
    linkedin: 'https://www.linkedin.com/in/angirash-karki/'
  },
];
const CanopyUSASection = () => {
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
            Canopy USA
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Text */}
        <div className="py-8 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
          Established in 2024, Canopy USA is a registered 501(c)(3) nonprofit committed to supporting the mission of Canopy Nepal from across the world. Based in the United States, the chapter focuses on building partnerships, fundraising, and spreading awareness about education equity in Nepal.
          </p>
        </div>

        {/* What We Do Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen py-4">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={whatWeDoImage}
                alt="Students in a classroom"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-cyan mb-4">What We Do?</h2>
              <ul className="list-disc text-gray-700 space-y-6 text-2xl">
                <li className="text-xl">Lead fundraising campaigns to support Canopy's flagship programs like CANSHIP and Katha Bunaun</li>
                <li className="text-xl">Build connections with schools, universities, and donors across the U.S.</li>
                <li className="text-xl">Represent Canopy Nepal at global forums, education events, and diaspora gatherings</li>
                <li className="text-xl">Share stories and impact through digital campaigns and in-person events</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-xl my-8 ">
            <span className="text-black font-semibold">Canopy USA is a legally registered 501(c)(3) nonprofit. All donations are tax-deductible to the extent allowed by law.</span>
          </div>


        {/* Want to Get Involved Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen pb-8">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={getInvolvedImage}
                alt="Volunteer for Canopy USA"
                className="w-full h-[500px] object-cover object-bottom"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-16 bg-white">
              <p className=" text-2xl mb-4 font-semibold">If you're based in USA and want to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-6 text-2xl">
                <li className="text-xl">Host a fundraiser or awareness event</li>
                <li className="text-xl">Collaborate with us on educational outreach or events
                </li>
                <li className="text-xl">Support through donations or in-kind resources
                </li>
              </ul>
              <div className="mt-8">
                <span className="font-bold text-2xl text-gray-800">Reach out to us at:</span><br />
                <a href="mailto:info@canopyfrance.org" className="text-primary-cyan hover:underline break-all text-xl">canopyusa@canopynepal.org</a>
              </div>
              <p className='mt-8 text-gray-700 text-xl'>
              Let’s make quality education possible—across borders, together.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        
      </div>

      <hr/>

      {/* Meet the Team Section */}
      <div className="py-8 ">
        <p className="text-center text-black text-xl mb-8 w-3/4 mx-auto">
          Canopy USA is run by a lean team of dedicated volunteers and advisors, under the direct leadership of our founder, Mohit, working closely with Canopy Nepal's leadership to ensure transparency, sustainability, and aligned impact.
        </p>
        <h2 className="text-center text-3xl font-bold text-primary-cyan mb-8">
          Meet the Canopy USA Team
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
                    <p className="text-m uppercase text-gray-600 tracking-wide">
                      {member.title}
                    </p>
                    
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

export default CanopyUSASection;