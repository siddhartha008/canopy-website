import React from 'react';
import { motion } from 'framer-motion';
import mv0 from '../../assets/mv0.png';
import mv1 from '../../assets/mv1.png';
import mv2 from '../../assets/mv2.png';

const CanopyAboutUs: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-800 mt-28">
      {/* Hero Section with statistic */}
      <div className="relative w-full overflow-hidden">
        <div className="relative">
          <img
            src={mv0}
            alt="Smiling student in classroom"
            className="w-full h-80 lg:h-96 object-cover"
          />
          {/* Overlay with text */}
        </div>

        {/* Text below image */}
        <div className="text-center px-6 max-w-5xl mx-auto mt-8">
          <p className="text-3xl md:text-3xl leading-relaxed font-extrabold text-primary-blue">
            With more than 73% of students not completing upper secondary education,
            we're reshaping the education system to ensure all students complete education.
          </p>
        </div>
      </div>

      {/* Why Education Section */}
      <div className="relative w-full overflow-hidden">
        {/* Floating elements for this section */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-30"
          ></motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-32 left-10 w-2 h-2 bg-green-400 rounded-full opacity-35"
          ></motion.div>
        </div>

        {/* Full Width Image */}
        <div className="w-full mt-8">

          <img
            src={mv1}
            alt="Student studying"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content Below Image */}
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-red">Why Education?</h2>
          <p className="text-2xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
            In Nepal, only 27% of students complete the upper secondary level, and the rest 73%
            drop out before their final year because of affordability and poor-quality schooling
            (UNICEF, 2022). The students impacted are disproportionately low-income, perpetuating
            the cycle of poverty by hindering their opportunities to become financially and
            socially independent (Devkota & Bagale, 2015).
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="relative w-full py-8 overflow-hidden">
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-24 left-1/4 w-2.5 h-2.5 bg-red-400 rounded-full opacity-25"
          ></motion.div>
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-32 right-1/3 w-3 h-3 bg-cyan-400 rounded-full opacity-30"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-red">Our Mission</h2>
          <p className="text-2xl leading-relaxed text-gray-700 mb-8">
            Canopy Nepal empowers underserved students to stay in school and thrive by combining
            scholarships with story-based learning that nurtures confidence, critical thinking, and
            lifelong skills. Through inclusive education and strategic government partnerships, we
            reduce dropout rates, break cycles of generational poverty, and build a future shaped
            by empowered thinkers and doers.
          </p>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="relative w-full overflow-hidden">
        {/* Content Above Image */}
        <div className="max-w-4xl mx-auto px-6 pb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-red">Our Vision</h2>
          <p className="text-2xl leading-relaxed text-gray-700">
            We envision a Nepal where every child, regardless of background, has access to quality
            education, the freedom to express themselves, and the tools to shape their own future.
          </p>
        </div>

        {/* Image with Overlay Text */}
        <div className="relative w-full">
          <img
            src={mv2}
            alt="Group of happy students"
            className="w-full h-96 lg:h-[500px] object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-full">
              <div className="max-w-5xl mx-auto px-6 text-center">
                <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
                  <p className="text-xl md:text-2xl font-semibold leading-relaxed text-white">
                    By 2030, we aim to reach over half a million students and integrate
                    story-based learning into classrooms across Nepal, making storytelling
                    a foundational part of how children learn, grow, and connect.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CanopyAboutUs;