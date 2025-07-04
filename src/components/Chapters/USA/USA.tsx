import React from 'react';

import heroImage from '../../../assets/canusaheader.png'; // The top image with two boys
import whatWeDoImage from '../../../assets/canusabody.jpg'; // The image with the girls in uniform
import getInvolvedImage from '../../../assets/canusa2.jpg'; // The image of the man in front of a building
import Mohit_USA from '../../../assets/team/all/Mohit_USA.png';
import Siddhartha_USA from '../../../assets/team/all/Siddhartha_USA.png';
import Diki_USA from '../../../assets/team/all/Diki_USA.png';
import Eshan_USA from '../../../assets/team/all/Eshan_USA.png';


const teamMembers = [
  {
    id: 1,
    name: 'Mohit Rauniyar',
    category: 'CORE TEAM',
    image: Mohit_USA,
    description: 'Established Canopy Nepal and leads its global vision, actively overseeing international chapters in the USA and France while driving strategic fundraising to expand impact and ensure long-term sustainability.',
    linkedin: 'https://www.linkedin.com/in/mohitrauniyar/'
  },
  {
    id: 2,
    name: 'Siddhartha Mishra',
    category: 'CORE TEAM',
    image: Siddhartha_USA,
    description: 'Dedicated team member contributing to Canopy USA\'s mission of supporting education equity in Nepal through fundraising, awareness campaigns, and community engagement.',
    linkedin: 'https://www.linkedin.com/in/siddhartha-mishra2020/'
  },
  {
    id: 3,
    name: 'Diki Yangzom',
    category: 'CORE TEAM',
    image: Diki_USA,
    description: 'Passionate team member working to strengthen Canopy USA\'s impact through strategic partnerships, community outreach, and educational initiatives.',
    linkedin: ''
  },
  {
    id: 4,
    name: 'Eshan Shrestha',
    category: 'CORE TEAM',
    image: Eshan_USA,
    description: 'Committed team member focused on expanding Canopy USA\'s reach through innovative fundraising strategies and building strong community connections.',
    linkedin: ''
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
              <h2 className="text-3xl font-bold text-primary-red mb-4">What We Do?</h2>
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
                <a href="mailto:info@canopyfrance.org" className="text-primary-red hover:underline break-all text-xl">canopyusa@canopynepal.org</a>
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
        <h2 className="text-center text-3xl font-bold text-primary-red mb-8">
          Meet the Canopy USA Team
        </h2>
        <div className="max-w-7xl mx-auto px-6 pb-4">
          {/* Responsive flex layout with centered last row */}
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-xs md:w-[calc(25%-12px)] lg:w-[calc(25%-12px)]"
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

export default CanopyUSASection;