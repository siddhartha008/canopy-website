import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CanopyFranceSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div className="mt-28 relative h-[400px] overflow-hidden">
        <img
          src="src/assets/hero.png"
          alt="Canopy France team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Canopy France<br />
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      
      <div className="mx-auto px-6 py-6">
        {/* Introduction */}
        <div className="bg-white py-16">
          <div className="max-w-screen-xl text-center mx-auto px-6">
            <p className="text-2xl font-bold text-gray-700 leading-relaxed">
              Established in 2022, Canopy France is our first international chapter, founded by
              a passionate group of young changemakers from France and Nepal. Registered as
              a legal nonprofit under French law, the chapter supports Canopy Nepal by raising
              awareness, building partnerships, and mobilizing resources across Europe.
            </p>
          </div>
        </div>

        {/* What We Do Section - Using the homepage style */}
        <div className="bg-neutral-50 py-16">
          {/* Heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
              <span className="text-red-600">What We Do</span>
            </h2>
          </motion.div>

          {/* Unified border container */}
          <motion.div
             ref={ref}
             initial={{ opacity: 0, y: 30 }}
             animate={inView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col md:flex-row overflow-hidden"
          >
          <img
            src="src/assets/l2.png"
            alt="what-we-do-image"
            className="w-full md:w-1/2 object-cover"
          />

            {/* Content section */}
            <div className="w-full md:w-1/2 bg-gray-50 text-gray-800 p-8 flex flex-col justify-center">
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="mr-3 text-xl text-red-600">•</span>
                  <span className="text-xl">Organize creative fundraising campaigns, cultural events, and storytelling nights across France</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl text-red-600">•</span>
                  <span className="text-xl">Strengthen connections between the Nepali diaspora and allies in France</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl text-red-600">•</span>
                  <span className="text-xl">Raise awareness around education equity through exhibitions, university partnerships, and youth networks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3 text-xl text-red-600">•</span>
                  <span className="text-xl">Directly support core programs like CANSHIP and Katha Bunaun with financial and advocacy support</span>
                </li>
              </ul>
            </div>
            
          </motion.div>
          
        </div>

        {/* Team Leadership Section - REDESIGNED */}
        <div
          className="py-16 bg-primary-gray/50 rounded-lg  my-8 shadow-sm"
        >
          <div className="max-w-screen-xl mx-auto px-8">
            <div className="flex flex-col items-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Team Leadership</h3>
              <p className="text-xl text-center max-w-3xl text-gray-700">
                The chapter is led by a lean team of passionate changemakers, bringing together 
                <span className="text-primary-red font-semibold"> cross-cultural energy</span> and 
                <span className="text-primary-red font-semibold"> grassroots commitment</span> to our shared mission.
              </p>
            </div>
          </div>
        </div>

        {/* Get Involved Section - REDESIGNED */}
        <div className="bg-gray-50 py-16 mb-16">
          <div className="max-w-screen-xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-12">
                  <h3 className="text-4xl font-bold text-gray-800 mb-6">
                    <span className="text-red-600">Want to Get Involved?</span>
                  </h3>
                  <p className="text-xl text-gray-700">
                    If you're based in France and want to help us:
                  </p>
                </div>

                <div>
                  <ul className="space-y-6 text-lg">
                    <li className="flex items-start">
                      <span className="text-primary-red text-2xl mr-4">•</span>
                      <div>
                        <strong className="text-gray-800">Host a fundraiser or awareness event</strong>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <span className="text-primary-red text-2xl mr-4">•</span>
                      <div>
                        <strong className="text-gray-800">Partner with us for an academic or youth engagement initiative</strong>
                      </div>
                    </li>

                    <li className="flex items-start">
                      <span className="text-primary-red text-2xl mr-4">•</span>
                      <div>
                        <strong className="text-gray-800">Volunteer your time or skills</strong>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center lg:justify-end">
                <img
                  src="src/assets/mv1.png"
                  alt="Get involved with Canopy France"
                  className="w-80 h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Newsletter Section - REDESIGNED */}
        <div
          className="bg-primary-red/10 rounded-2xl p-12 mb-16 relative overflow-hidden"
        >
          {/* Decorative elements */}
          
          <div className="max-w-screen-xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h3>
                <p className="text-xl text-gray-700 mb-8">
                  Have questions or ideas? We'd love to hear from you. Reach out directly to our team:
                </p>
                
                <a 
                  href="mailto:info@canopyfrance.org" 
                  className="flex items-center space-x-4 text-xl font-medium text-gray-800 hover:text-red-600 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>info@canopyfrance.org</span>
                </a>
              </div>
              
              {/* Newsletter Section */}
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Stay Connected</h3>
                <p className="text-xl text-gray-700 mb-8">
                  Subscribe to our newsletter for updates on events, stories, and impact from Nepal.
                </p>
                
                <div className="flex">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 px-6 py-4 rounded-l-lg border-0 focus:ring-2 focus:ring-red-600 text-lg"
                  />
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium px-8 py-4 rounded-r-lg transition-colors">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CanopyFranceSection;