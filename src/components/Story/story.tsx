import React from 'react';
import { motion } from 'framer-motion';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const CanopyOurStory: React.FC = () => {
  const story = useSite().story;
  return (
    <div className="bg-gray-50 text-gray-800 mt-28">
      {/* Top Image - Show on all screen sizes */}
      <div className="mb-0">
        <img
         src={mediaUrl(story.topImage)}
          alt="Group of students with balloons"
          className="w-full h-auto object-contain block"
        />
      </div>
      
      {/* Our Story Content - Full width for animations */}
      <div className="relative w-full mx-auto px-6 pt-8 pb-8 text-center bg-gray-50 lg:mt-0 overflow-hidden">
        
        {/* Framer Motion Floating Elements - Full Content Section Width */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Subtle background circles */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-16 w-40 h-40 bg-orange-600/8 rounded-full blur-3xl"></div>
          <div className="absolute top-40 left-10 w-20 h-20 bg-red-400/12 rounded-full blur-xl"></div>
          <div className="absolute bottom-16 right-20 w-24 h-24 bg-red-500/10 rounded-full blur-2xl"></div>
          <div className="absolute top-60 right-1/3 w-28 h-28 bg-cyan-400/8 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 left-1/4 w-36 h-36 bg-cyan-300/6 rounded-full blur-3xl"></div>
          
          {/* Animated storytelling elements - Full section width */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-32 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-96 left-16 w-2 h-2 bg-green-400 rounded-full opacity-50"
          ></motion.div>
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-48 left-10 w-2 h-2 bg-blue-400 rounded-full opacity-45"
          ></motion.div>
          <motion.div
            animate={{ y: [12, -12, 12] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-24 left-1/3 w-2.5 h-2.5 bg-red-400 rounded-full opacity-35"
          ></motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-80 right-32 w-3 h-3 bg-yellow-400 rounded-full opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-64 right-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-30"
          ></motion.div>
          <motion.div
            animate={{ y: [-14, 14, -14] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
            className="absolute bottom-40 left-1/4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-45"
          ></motion.div>
          
          {/* Additional floating elements - Spread across content width */}
          <motion.div
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute top-16 right-1/2 w-2 h-2 bg-orange-500 rounded-full opacity-35"
          ></motion.div>
          <motion.div
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="absolute bottom-28 right-16 w-2.5 h-2.5 bg-cyan-400 rounded-full opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: [-7, 7, -7] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-72 right-12 w-2 h-2 bg-indigo-400 rounded-full opacity-35"
          ></motion.div>
          <motion.div
            animate={{ y: [9, -9, 9] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute bottom-16 left-8 w-2 h-2 bg-emerald-400 rounded-full opacity-45"
          ></motion.div>
          <motion.div
            animate={{ y: [-11, 11, -11] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute top-40 right-2/3 w-2.5 h-2.5 bg-amber-400 rounded-full opacity-38"
          ></motion.div>
          <motion.div
            animate={{ y: [13, -13, 13] }}
            transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute bottom-36 left-1/3 w-2 h-2 bg-rose-400 rounded-full opacity-42"
          ></motion.div>
          <motion.div
            animate={{ y: [-9, 9, -9] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
            className="absolute top-56 left-20 w-2 h-2 bg-teal-400 rounded-full opacity-40"
          ></motion.div>
          
          {/* Extra dots for edge coverage */}
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            className="absolute top-36 left-3/4 w-2 h-2 bg-lime-400 rounded-full opacity-35"
          ></motion.div>
          <motion.div
            animate={{ y: [11, -11, 11] }}
            transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
            className="absolute bottom-52 right-1/3 w-2.5 h-2.5 bg-violet-400 rounded-full opacity-40"
          ></motion.div>
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            className="absolute top-88 left-2/3 w-2 h-2 bg-sky-400 rounded-full opacity-45"
          ></motion.div>
          
          {/* Far edge dots for full width coverage */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
            className="absolute top-44 left-4 w-2 h-2 bg-emerald-500 rounded-full opacity-35"
          ></motion.div>
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5.3, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
            className="absolute top-68 right-4 w-2 h-2 bg-fuchsia-400 rounded-full opacity-40"
          ></motion.div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-orange">Our Story</h2> */}
          <div className="space-y-4 text-xl leading-relaxed text-justify text-gray-700  max-w-4xl mx-auto">
            {story.paragraphs.map((paragraph) => (
              <p
                key={paragraph.id}
                className={paragraph.style === 'lead' ? 'font-bold text-2xl text-center text-primary-red' : paragraph.style === 'emphasis' ? 'font-medium text-gray-800' : ''}
              >
                {paragraph.text}
              </p>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Image */}
      <div>
        <img
          src={mediaUrl(story.bottomImage)}
          alt="Mohit Rauniyar speaking"
          className="w-full h-[70vh] object-cover"
        />
      </div>

      {/* Removed old CSS animations */}
      <style>{`
        /* Clean, minimal styles only */
      `}</style>
    </div>
  );
};

export default CanopyOurStory;