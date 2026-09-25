import { useNavigate } from 'react-router-dom';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const About = () => {
  const about = useSite().home.about;
  const navigate = useNavigate();

  return (
    <section id="about" className="py-16 pt-0 bg-gray-50">


      {/* Full-width unified border container, France-style */}
      <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
        <div className="flex flex-col md:flex-row items-stretch h-full">
          {/* Image section */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto">
            <img
              src={mediaUrl(about.image)}
              alt="what-we-do-image"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Text section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-gray-50">
            <h2 className="text-5xl font-bold text-primary-red mb-4">{about.title}</h2>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index} className={`text-black leading-relaxed text-xl ${index === about.paragraphs.length - 1 ? 'mb-8' : 'mb-4 mt-4'}`}>
                {paragraph}
              </p>
            ))}
           <div className="mt-4 mb-4">
        <button 
          className="inline-flex items-center bg-primary-orange text-white px-4 py-2 text-lg rounded-lg font-bold hover:bg-primary-cyan transition-all duration-300 hover:shadow-lg"
          onClick={() => navigate(about.href)}
        >
          {about.button}
          <svg 
            className="w-5 h-5 ml-2 align-middle relative top-[1px]" 
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
