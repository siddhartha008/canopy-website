import React from 'react';
import icon1 from '../../assets/icons/1.svg';
import icon2 from '../../assets/icons/2.svg';
import icon3 from '../../assets/icons/3.svg';
import icon4 from '../../assets/icons/4.svg';
import icon5 from '../../assets/icons/5.svg';
import icon6 from '../../assets/icons/6.svg';
import icon7 from '../../assets/icons/7.svg';
import icon8 from '../../assets/icons/8.svg';
import icon9 from '../../assets/icons/9.svg';
import icon10 from '../../assets/icons/10.svg';
import icon11 from '../../assets/icons/11.svg';
import icon12 from '../../assets/icons/12.svg';

const FeaturedInSection = () => {
  // Logo data
  const logos = [
    { src: icon1, alt: "Featured Organization 1" },
    { src: icon2, alt: "Featured Organization 2" },
    { src: icon3, alt: "Featured Organization 3" },
    { src: icon4, alt: "Featured Organization 4" },
    { src: icon5, alt: "Featured Organization 5" },
    { src: icon6, alt: "Featured Organization 6" },
    { src: icon7, alt: "Featured Organization 7" },
    { src: icon8, alt: "Featured Organization 8" },
    { src: icon9, alt: "Featured Organization 9" },
    { src: icon10, alt: "Featured Organization 10" },
    { src: icon11, alt: "Featured Organization 11" },
    { src: icon12, alt: "Featured Organization 12" }
  ];

  return (
    <section className="overflow-hidden mt-4 mb-4">
      {/* Full width heading */}
      <div className="w-full text-center relative overflow-hidden pt-3">
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
          <h3 className="text-primary-orange text-3xl md:text-3xl lg:text-4xl font-bold tracking-wide">
            Featured In
          </h3>
        </div>
      </div>
      
      {/* Full width continuous scroll */}
      <div className="w-full overflow-hidden ">
        <div className="flex items-center animate-infinite-scroll">
          {/* First set of logos */}
          {logos.map((logo, index: number) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-4 md:mx-8">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-48 h-48 object-contain"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index: number) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-4 md:mx-8">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-48 h-48 object-contain"
                loading="lazy"
              />
            </div>
          ))}
          
          {/* Third set for extra smoothness */}
          {logos.map((logo, index: number) => (
            <div key={`third-${index}`} className="flex-shrink-0 mx-4 md:mx-8">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-48 h-48 object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center mb-4">
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
          animation: infinite-scroll 25s linear infinite;
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
            animation-duration: 20s;
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