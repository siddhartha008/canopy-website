import React from 'react';

const FeaturedInSection = () => {
  // Logo data
  const logos = [
    { src: "src/assets/icons/hi.png", alt: "Harvard Innovation Lab" },
    { src: "src/assets/icons/hk.png", alt: "Harvard Kennedy School" },
    { src: "src/assets/icons/hun.png", alt: "HundrED" },
    { src: "src/assets/icons/ila.png", alt: "International Literacy Association" },
    { src: "src/assets/icons/ktmp.png", alt: "The Kathmandu Post" },
    { src: "src/assets/icons/mit.png", alt: "MIT Solve" },
    { src: "src/assets/icons/res.png", alt: "Resolution Project" },
    { src: "src/assets/icons/wef.png", alt: "World Economic Forum" }
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
          {logos.map((logo, index) => (
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
          {logos.map((logo, index) => (
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
          {logos.map((logo, index) => (
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
      <div className="max-w-6xl mx-auto px-6 text-center mt-8 mb-4">
        <button 
          className="inline-flex items-center bg-primary-orange text-white px-8 py-4 text-lg rounded-full font-bold hover:bg-primary-red transition-all duration-300 hover:shadow-lg"
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

        .animate-infinite-scroll:hover {
          animation-play-state: paused;
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