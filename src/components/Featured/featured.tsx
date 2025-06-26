import React from 'react';
import hi from '../../assets/icons/hi.png';
import hk from '../../assets/icons/hk.png';
import hun from '../../assets/icons/hun.png';
import ila from '../../assets/icons/ila.png';
import ktmp from '../../assets/icons/ktmp.png';
import mit from '../../assets/icons/mit.png';
import res from '../../assets/icons/res.png';
import wef from '../../assets/icons/wef.png';

const FeaturedInSection = () => {
  // Logo data
  const logos = [
    { src: hi, alt: "Harvard Innovation Lab" },
    { src: hk, alt: "Harvard Kennedy School" },
    { src: hun, alt: "HundrED" },
    { src: ila, alt: "International Literacy Association" },
    { src: ktmp, alt: "The Kathmandu Post" },
    { src: mit, alt: "MIT Solve" },
    { src: res, alt: "Resolution Project" },
    { src: wef, alt: "World Economic Forum" }
  ];

  return (
    <section className="bg-white py-12 overflow-hidden">
      {/* Full width heading */}
      <div className="w-full text-center relative overflow-hidden pt-5">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div key={i} className="border border-white"></div>
            ))}
          </div> 
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-primary-orange text-2xl md:text-3xl lg:text-4xl font-bold mb-2 tracking-wide">
            Featured In
          </h3>
        </div>
      </div>
      
      {/* Full width continuous scroll */}
      <div className="w-full overflow-hidden py-8">
        <div className="flex items-center animate-infinite-scroll">
          {/* First set of logos */}
          {logos.map((logo, index: number) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-24 object-contain"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index: number) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-24 object-contain"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Third set for extra smoothness */}
          {logos.map((logo, index: number) => (
            <div key={`third-${index}`} className="flex-shrink-0 mx-8 md:mx-12">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-16 md:h-24 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center mt-8 mb-4">
        <button 
          className="inline-flex items-center bg-primary-orange text-white px-4 py-2 text-lg rounded-lg font-bold hover:bg-primary-red transition-all duration-300 hover:shadow-lg"
          onClick={() => {/* Your handler here */}}
        >
          Read More
          <svg 
            className="w-5 h-5 ml-2" 
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

      <style>{`
        @keyframes infinite-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }

        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
          width: max-content;
        }

        /* Ensure smooth performance */
        .animate-infinite-scroll {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-infinite-scroll {
            animation-duration: 30s;
          }
        }

        /* Reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-infinite-scroll {
            animation: none;
          }
          .animate-infinite-scroll {
            overflow-x: auto;
            scroll-snap-type: x mandatory;
          }
          .animate-infinite-scroll > div {
            scroll-snap-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default FeaturedInSection;