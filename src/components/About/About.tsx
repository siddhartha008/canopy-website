import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import l2 from '../../assets/l2.png';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="mx-auto sm:px-6 ">
        {/* Heading */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-gray">
            <span className="text-primary-red">What We Do</span>
          </h2>
        </motion.div>

        {/* unified border container */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col md:flex-row overflow-hidden"
        >
          {/* full-width image */}
          <img
            src={l2}
            alt="what-we-do-image"
            className="w-full md:w-1/2 object-cover"
          />

          <div className="w-full md:w-1/2 bg-gray-50 text-primary-gray p-8 text-xl flex flex-col justify-center">
            <p className="text-black leading-relaxed">
              Canopy Nepal is working to improve access to quality education for underserved students across Nepal. We provide long-term scholarships and deliver story-based learning in public schools to reduce drop out rates and break cycles of poverty.
            </p>
            <br></br>
            <p className="text-black leading-relaxed">
            By combining academic support with creativity, mentorship, and collaboration with local governments, we help students stay in school, build critical life skills, and shape their own futures.
            </p>

            <button
              onClick={() => {/* your handler */}}
              className="mt-8 w-1/4 bg-primary-cyan text-white px-6 py-2 rounded-xl font-medium hover:bg-primary-red/90 transition-colors duration-300"
            >
              Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
