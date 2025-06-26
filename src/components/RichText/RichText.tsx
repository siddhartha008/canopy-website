import React from 'react';
import { motion } from 'framer-motion';

const RichText: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 relative mb-24">
      {/* Animated storytelling elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40"
      ></motion.div>
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-16 w-2 h-2 bg-green-400 rounded-full opacity-50"
      ></motion.div>
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute top-32 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-45"
      ></motion.div>
      <motion.div
        animate={{ y: [12, -12, 12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-20 left-1/3 w-2.5 h-2.5 bg-red-400 rounded-full opacity-35"
      ></motion.div>
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute bottom-32 right-32 w-3 h-3 bg-yellow-400 rounded-full opacity-40"
      ></motion.div>
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute top-40 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30"
      ></motion.div>
      <motion.div
        animate={{ y: [-14, 14, -14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-45"
      ></motion.div>
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        {/* Problem statement */}
        <div className="space-y-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            
            <p className="text-2xl text-gray-700">

             In Nepal, 
            <span className="text-4xl md:text-4xl font-black text-red-500"> 73% </span>
              of students drop out before completing secondary school  due to cost and poor-quality education.
              <span className="text-3xl md:text-3xl font-black text-red-500">  Canopy Nepal is changing that. </span> 
              <br></br>
              <br></br>
              Canopy Nepal empowers students to stay in school and thrive by combining scholarships with creative, story-based learning that builds confidence, critical thinking, and lifelong skills.
              <br></br>
              <br></br>
              With Canopy, students don’t just stay in school.  <span className="text-4xl md:text-4xl font-black text-red-500">100% </span> remain motivated, supported, and on track to graduate, and with local governments adapting our curriculum, our impact is sustainable and systemic.
            </p>
            
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RichText;