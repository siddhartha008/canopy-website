import React from 'react';
import { motion } from 'framer-motion';
import hero from '../../assets/hero.png';

const Hero: React.FC = () => {

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* add the hero image from assets */}
      <div className="absolute inset-0 mt-14">
        <img src={hero} alt="Hero" className="w-full h-full object-contain" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-orange">Reshaping</span> Education
          </motion.h1>
        </motion.div>

        {/* Statistics */}
        {/* <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <stat.icon className="w-8 h-8 text-primary-orange mb-4 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

  
    </section>
  );
};

export default Hero;