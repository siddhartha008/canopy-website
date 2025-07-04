import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/hero.png';
import landingherophone from '../../assets/landingherophone.png';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 mt-28 mb-12"
    >
      {/* Responsive hero image background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Mobile hero image */}
        <img
          src={landingherophone}
          alt="Hero Mobile"
          className="w-full h-full object-cover md:hidden"
        />
        {/* Desktop hero image */}
        <img
          src={hero}
          alt="Hero Desktop"
          className="w-full h-full object-cover hidden md:block"
        />
      </div>

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 md:mb-12"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-orange">Reshaping</span> Education
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;