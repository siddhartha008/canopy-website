import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../../assets/ourwork.png';

const OurWork: React.FC = () => {
  const navigate = useNavigate();
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
      <div className="w-full max-w-5xl mx-auto text-center px-4 mt-8">
        <h1 className="text-2xl md:text-2xl lg:text-2xl font-bold text-primary-blue leading-snug mb-8">
          We directly solve the two major issues for the alarming dropout rate in Nepal—
          <br></br>
          <span className="text-primary-blue underline underline-offset-2">cost</span> and
          <span className="text-primary-blue underline underline-offset-2"> poor-quality education.</span>
        </h1>
        <p className="text-base md:text-lg text-gray-700 mb-8">
          Every year, millions of students in Nepal face a tough choice—drop out of school or keep showing up to classrooms that fail to engage or support them. 
          <span className="text-primary-red font-bold"> At Canopy Nepal, we're doing something about both.</span>
        </p>
        <p className="text-base md:text-lg text-black mb-8">
          Through CANSHIP and Katha Bunaun, our two flagship programs, we remove financial barriers and reimagine how education feels in the classroom.
        </p>
      </div>

      {/* Our Programs */}
      <div className="w-full text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2386B6] mb-8">Our Programs</h2>
        <div className="flex justify-center gap-12">
          <button
            className="bg-[#FFF3D1] text-[#F6B800] font-bold text-xl px-8 py-2 rounded-xl shadow-sm transition-transform hover:scale-105"
            onClick={() => navigate('/canship')}
          >
            CANSHIP
          </button>
          <button
            className="bg-[#FFF3D1] text-[#F6B800] font-bold text-xl px-8 py-2 rounded-xl shadow-sm transition-transform hover:scale-105"
            onClick={() => navigate('/katha-bunaun')}
          >
            Katha Bunaun
          </button>
        </div>
      </div>

      {/* Our Ecosystem */}
      <div className="w-full text-center mt-4 mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2386B6] mb-4">Our Ecosystem</h2>
      </div>

      {/* Image below Our Ecosystem */}
      
    </div>
  );
};

export default OurWork; 