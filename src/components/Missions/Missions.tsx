import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import mv1 from '../../assets/mv1.png';
import mv2 from '../../assets/mv2.png';
import toC from '../../assets/toc.svg';
import icon1 from '../../assets/val1.svg';
import icon2 from '../../assets/val2.svg';
import icon3 from '../../assets/val3.svg';
import icon4 from '../../assets/val4.svg';
import icon5 from '../../assets/val5.svg';

const CanopyAboutUs: React.FC = () => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const [anyHovered, setAnyHovered] = useState(false);
  return (
    <div className="text-gray-800 mt-24">
     
      {/* Why Education Section */}
      <div className="relative w-full overflow-hidden">
        {/* Full Width Image */}
        <div className="w-full mt-8">
          <img
            src={mv1}
            alt="Student studying"
            className="w-full h-96 object-cover"
          />
        </div>

        {/* Content Below Image with Floating Elements */}
        <div className="relative max-w-6xl mx-auto px-6 py-8 text-center">
          {/* Floating elements for this section */}
          <div className="absolute mt-6 inset-0 pointer-events-none z-10">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 right-20 w-4 h-4 bg-orange-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-40 left-16 w-3 h-3 bg-blue-400 rounded-full opacity-40"
            ></motion.div>
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-60 left-10 w-3 h-3 bg-green-400 rounded-full opacity-35"
            ></motion.div>
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-80 right-32 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [12, -12, 12] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute top-100 right-8 w-2 h-2 bg-pink-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-30 left-1/3 w-3.5 h-3.5 bg-yellow-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="absolute top-70 left-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-35"
            ></motion.div>
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-90 right-1/4 w-2.5 h-2.5 bg-teal-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [9, -9, 9] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute top-50 left-1/5 w-2 h-2 bg-violet-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 2.3 }}
              className="absolute top-110 right-1/5 w-3 h-3 bg-lime-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
              className="absolute top-85 right-1/3 w-2.5 h-2.5 bg-fuchsia-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [-9, 9, -9] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute top-65 left-1/6 w-2 h-2 bg-cyan-400 rounded-full opacity-35"
            ></motion.div>
          </div>

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
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Floating elements */}
          <div className="absolute inset-0 m pointer-events-none">
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
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-16 right-16 w-2 h-2 bg-emerald-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute bottom-20 left-1/2 w-3.5 h-3.5 bg-amber-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-40 right-1/3 w-2.5 h-2.5 bg-rose-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [7, -7, 7] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              className="absolute bottom-48 left-1/3 w-2 h-2 bg-sky-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4.7, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="absolute bottom-10 left-1/4 w-2.5 h-2.5 bg-orange-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [11, -11, 11] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute bottom-25 right-1/5 w-2 h-2 bg-green-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
              className="absolute bottom-40 right-1/6 w-3 h-3 bg-purple-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4.0, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
              className="absolute bottom-15 left-1/3 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-35 right-1/4 w-2 h-2 bg-indigo-400 rounded-full opacity-25"
            ></motion.div>
          </div>

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
        <div className="relative max-w-4xl mx-auto px-6 pb-8 text-center">
          {/* Floating elements for this section */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-16 right-24 w-3 h-3 bg-orange-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 5.1, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-32 left-20 w-2.5 h-2.5 bg-blue-400 rounded-full opacity-35"
            ></motion.div>
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
              className="absolute top-48 right-16 w-2 h-2 bg-green-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [-9, 9, -9] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-24 left-1/3 w-3.5 h-3.5 bg-purple-400 rounded-full opacity-20"
            ></motion.div>
            <motion.div
              animate={{ y: [7, -7, 7] }}
              transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              className="absolute top-40 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-30"
            ></motion.div>
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
              className="absolute top-56 left-1/4 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-25"
            ></motion.div>
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-28 right-1/3 w-2 h-2 bg-yellow-400 rounded-full opacity-35"
            ></motion.div>
            <motion.div
              animate={{ y: [-7, 7, -7] }}
              transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
              className="absolute top-44 left-1/5 w-3 h-3 bg-emerald-400 rounded-full opacity-30"
            ></motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-red">Our Vision</h2>
          <p className="text-2xl leading-relaxed text-gray-700">
            We envision a Nepal where every child, regardless of background, has access to quality
            education, the freedom to express themselves, and the tools to shape their own future.
          </p>
        </div>

        {/* Our Theory of Change Section */}
        <div className="relative w-full py-4 overflow-hidden">
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-red">Our Theory Of Change</h2>
          </div>
          <div className="relative w-full px-6 md:px-0">
            {/* Subtle floating bubbles for Theory of Change section */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-10 left-1/4 w-4 h-4 bg-blue-200 rounded-full opacity-10"
              ></motion.div>
            </div>
            <div className="mx-auto">
              <img
                src={toC}
                alt="Theory of Change Diagram"
                className="w-full max-w-full h-auto lg:h-[650px] object-contain mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="relative w-full pb-0 scroll -mt-4 overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-6">
            {/* Floating elements for this section */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-24 w-3 h-3 bg-orange-400 rounded-full opacity-10"
              ></motion.div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-red text-center">Our Values</h2>
            <div className="flex flex-col items-center">
              <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-12 lg:gap-20 mb-8">
                {/* Value Items */}
                {[
                  {
                    icon: icon1,
                    label: 'Deep Purpose',
                    desc: 'We believe education is the most powerful path to equity. Every program we create is rooted in a long-term vision to transform lives and communities.'
                  },
                  {
                    icon: icon2,
                    label: 'Child-Centered',
                    desc: 'Children are at the core of our mission. We create spaces where they feel seen, heard, and supported to learn, express themselves, and lead with confidence.'
                  },
                  {
                    icon: icon3,
                    label: 'Space for Growth',
                    nowrap: true,
                    desc: 'We nurture a culture where learning is lifelong. Whether student, team member, or partner, everyone is encouraged to take risks, reflect, and keep growing.'
                  },
                  {
                    icon: icon4,
                    label: 'Collaboration',
                    desc: 'Our work is built through strong relationships. We partner with students, families, and communities to design programs together, grounded in trust and mutual ownership.'
                  },
                  {
                    icon: icon5,
                    label: 'Transparency',
                    desc: 'We believe trust is earned through clarity and openness. We share our successes, learn from our failures, and keep our stakeholders informed and engaged every step of the way.'
                  }
                ].map((val, idx) => (
                  <div
                    key={val.label}
                    className="group flex flex-col items-center cursor-pointer relative w-40 md:w-48 lg:w-56"
                    onMouseEnter={() => { setHoveredValue(idx); setAnyHovered(true); }}
                    onMouseLeave={() => { setHoveredValue(null); setAnyHovered(false); }}
                    onFocus={() => { setHoveredValue(idx); setAnyHovered(true); }}
                    onBlur={() => { setHoveredValue(null); setAnyHovered(false); }}
                    tabIndex={0}
                  >
                    <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center mb-3">
                      <img src={val.icon} alt={val.label} className="w-full h-full object-contain z-10 rounded-xl" />
                    </div>
                    <motion.div 
                      className={`text-xl md:text-xl font-extrabold text-center text-yellow-500 mb-2 select-none${val.label === 'Space for Growth' ? ' whitespace-nowrap' : ''}`}
                      animate={hoveredValue === idx ? { scale: 1.05, color: "#fbbf24" } : { scale: 1, color: "#fbbf24" }}
                      transition={{ duration: 0.3 }}
                    >
                      {val.label}
                    </motion.div>
                    <AnimatePresence>
                      {hoveredValue === idx && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.4, ease: 'easeInOut' }}
                          className=" text-base md:text-lg text-center mt-2 min-h-[2.5rem] w-full flex justify-center"
                          style={{ minHeight: '2.5rem' }}
                        >
                          <span className="block w-full max-w-xl mx-auto text-center">{val.desc}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Image with Overlay Text */}
          <motion.div 
            className="relative w-full"
            animate={{ y: anyHovered ? 30 : 0 }}
            transition={{ type: 'spring', stiffness: 30, damping: 30, }}
          >
            <img
              src={mv2}
              alt="Group of happy students"
              className="w-full h-96 lg:h-[500px] object-cover "
            />
            {/* Simple black overlay like testimonials */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Overlay Text */}
            <div className="absolute inset-0 flex items-center">
              <div className="w-full">
                <div className="max-w-5xl mx-auto px-6 text-center">
                  <p className="text-2xl md:text-4xl font-semibold leading-relaxed text-white">
                    By 2030, we aim to reach over half a million students and integrate
                    story-based learning into classrooms across Nepal, making storytelling
                    a foundational part of how children learn, grow, and connect.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CanopyAboutUs;