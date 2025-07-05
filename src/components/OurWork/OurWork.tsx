import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactSVG } from 'react-svg';
import heroImg from '../../assets/ourwork.png';
import canshipImg from '../../assets/ourworkcanopy.jpg';
import kbImg from '../../assets/ourworkkb.jpg';
import ecosystem from '../../assets/ecosystem.svg';

const OurWork: React.FC = () => {
  const navigate = useNavigate();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const programData = [
    {
      name: 'CANSHIP',
      imageSrc: canshipImg,
      route: '/canship'
    },
    {
      name: 'Katha Bunaun',
      imageSrc: kbImg,
      route: '/katha-bunaun'
    }
  ];


  return (
    <div className="bg-white min-h-screen w-full flex flex-col items-center mt-28 font-sans">
      {/* Full-width top image */}
      <img
        src={heroImg}
        alt="Our Work Hero"
        className="w-full h-auto object-cover object-center mb-4"
        style={{ maxHeight: '500px' }}
      />

      {/* Top hills/clouds */}
      <div className="w-full"></div>

      {/* Main Heading */}
      <div className="w-full max-w-5xl mx-auto text-center px-4 mt-4">
        <h2 className="text-2xl md:text-2xl lg:text-2x leading-snug mb-8">
          We directly solve the two major issues for the alarming dropout rate in Nepal
          <span className="font-bold text-primary-blue"> cost</span> and
          <span className="font-bold text-primary-blue"> poor-quality education. </span>
           Every year, millions of students in Nepal face a tough choice—drop out of school or keep showing up to classrooms that fail to engage or support them. 
          <span className="text-primary-red font-bold"> At Canopy Nepal, we're doing something about both. </span>
           Through CANSHIP and Katha Bunaun, our two flagship programs, we remove financial barriers and reimagine how education feels in the classroom.
        </h2>
      </div>

      {/* Our Programs */}
      <div className="w-full text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2386B6] mb-8">Our Programs</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 px-4 max-w-6xl mx-auto">
          {programData.map((program) => (
            <div
              key={program.name}
              className="bg-[#FFFBF2] rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:scale-105 max-w-md w-full"
              onClick={() => navigate(program.route)}
            >
              <img 
                src={program.imageSrc} 
                alt={program.name} 
                className="w-full h-64 object-cover rounded-lg mb-4" 
              />
              <h3 className="text-3xl font-bold text-primary-orange mb-4">{program.name}</h3>
              <button 
                className="inline-flex items-center bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-cyan transition-colors duration-300"
              >
                Read More
                <svg 
                  className="w-5 h-5 ml-2 align-middle relative top-[1px]" 
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
          ))}
        </div>
      </div>

      {/* Our Ecosystem */}
      <div className="w-full text-center mt-4 mb-8 hidden md:block">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2386B6] mb-4">Our Ecosystem</h2>
      </div>

      {/* Interactive Ecosystem SVG */}
      <div className="w-full hidden md:block">
        <div className="w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={ecosystem}
            alt="Our Ecosystem"
            className="w-full h-auto"
          />
        </div>
      </div>
      
    </div>
  );
};

export default OurWork; 