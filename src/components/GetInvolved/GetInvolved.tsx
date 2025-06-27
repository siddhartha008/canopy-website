import React from 'react';

import heroImage from '../../assets/getinvolvedhero.png';
import donateImage from '../../assets/gi1.jpeg';
import fundraiseImage from '../../assets/gi2.jpg';
import partnerImage from '../../assets/canship.jpeg';
import volunteerImage from '../../assets/gi4.jpg';
import chaptersImage from '../../assets/gi6.png';
import helpImage from '../../assets/gi6.png';


const GetInvolvedSection = () => {
  return (
    <div className="bg-white font-sans mt-28">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src={heroImage}
          alt="Happy students"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-6xl md:text-6xl font-bold mb-4">Get Involved</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Text */}
        <div className="py-8 text-center">
          <p className="text-2xl leading-relaxed">
            At Canopy Nepal, we believe everyone has something to give - whether it's time, skills, resources, or simply a belief in the power of education. <br/><br/>Here's how you can be part of our mission to help every child stay in school, find their voice, and thrive.
          </p>
        </div>

        {/* 1. Donate Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={donateImage}
                alt="Donate"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">1. Donate</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Your support fuels scholarships, storytelling sessions, and teacher training. Big or small - every contribution helps us reach more students!
              </p>
              <a href="#" className="w-max inline-block bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-red transition-colors duration-300">
                Donate Now
              </a>
            </div>
          </div>
        </div>

        {/* 2. Fundraise With Us Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={fundraiseImage}
                alt="Fundraise With Us"
                className="w-full h-full object-cover object-center transform -scale-x-100"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">2. Fundraise With Us</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Run a marathon, host a dinner, celebrate your birthday - turn any moment into impact. We'll support you every step of the way.
              </p>
              <a href="#" className="w-max inline-block bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-red transition-colors duration-300">
                Host A Fundraiser
              </a>
            </div>
          </div>
        </div>

        {/* 3. Partner With Us Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={partnerImage}
                alt="Partner With Us"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">3. Partner With Us</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                We love teaming up with schools, businesses, universities, and community groups. Let's create something meaningful together.
              </p>
              <a href="mailto:info@canopynepal.org" className="w-max inline-block bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-red transition-colors duration-300">
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* 4. Jobs/ Volunteer/ Intern Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={volunteerImage}
                alt="Jobs/ Volunteer/ Intern"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">4. Jobs/ Volunteer/ Intern</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Got skills? Passion? Curiosity? Join us in Nepal or remotely and help shape the future of education.
              </p>
              <a href="#" className="w-max inline-block bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-red transition-colors duration-300">
                Join the Team
              </a>
            </div>
          </div>
        </div>

        {/* 5. Join Our Chapters Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={chaptersImage}
                alt="Join Our Chapters"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">5. Join Our Chapters</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                If you're based in the U.S. or France, connect with our global community and help take Canopy further.
              </p>
              <a href="#" className="w-max inline-block bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-red transition-colors duration-300">
                Reach Out
              </a>
            </div>
          </div>
        </div>

        {/* Still wondering how to help? Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img
                src={helpImage}
                alt="Child with backpack"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-8 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">Still wondering how to help?</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Reach out to us at <a href="mailto:info@canopynepal.org" className="text-primary-blue hover:underline font-semibold">info@canopynepal.org</a>. We'd love to hear from you.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                Because when you support Canopy, you're not just helping a child stay in school—you're helping them rewrite their future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
