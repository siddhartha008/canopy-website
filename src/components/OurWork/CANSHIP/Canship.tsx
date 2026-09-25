import { useSite } from '../../../cms/ContentContext';
import { mediaUrl } from '../../../cms/media';

const CanopyScholarshipPage = () => {
  const page = useSite().canship;
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Image at the very top */}
      <img
        src={mediaUrl(page.heroImage)}
        alt="Canopy Nepal Scholarship Hero"
        className="w-full h-[500px] object-cover mb-8"
      />

      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-blue mb-8">
          {page.title}
        </h1>
        <div className='mt-4'>
        {page.paragraphs.slice(0, 2).map((paragraph) => (
          <p key={paragraph} className="text-gray-700 text-xl leading-relaxed mb-8">{paragraph}</p>
        ))}
              </div>
      </div>

      {/* Second Section with Image */}
      {/* <img
        src={secondSection}
        alt="CANSHIP Section Divider"
        className="w-full h-[400px] object-cover object-center"
        style={{ maxHeight: '400px' }}
      /> */}

      <div className="bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full text-center">
              {page.paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph} className="text-gray-700 text-xl leading-relaxed mb-8">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Section - Single Image */}
      <div className="px-0 py-12 pb-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue text-center">
          {page.lifecycleTitle}
        </h2>
        <div className="flex justify-center">
          <img 
            src={mediaUrl(page.lifecycleImage)}
            alt="Canopy Scholar Lifecycle Flowchart"
            className="w-11/12 max-w-none h-auto mt-8 mb-8 mx-auto"
          />
        </div>
      </div>

      {/* Impact Section */}
      <div className=" px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-blue mb-8">{page.impactTitle}</h2>
              <ul className="space-y-6 text-gray-700">
                {page.points.map((point) => (
                  <li key={point.id} className="flex items-start">
                    <span className="text-primary-blue mr-3 mt-1">•</span>
                    <div className="text-xl">
                      <span className="font-semibold text-xl">{point.label}:</span> {point.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end items-stretch">
              <img 
                src={mediaUrl(page.impactImage)}
                alt="Student and mentor interaction"
                className="rounded-lg h-auto object-cover"
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {page.stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-xl md:text-2xl mb-2">
                <span className='font-bold text-primary-blue'>{stat.emphasis}</span> {stat.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <img
        src={mediaUrl(page.bottomImage)}
        alt="CANSHIP Section Divider"
        className="w-full h-[500px] object-cover object-center"
        style={{ maxHeight: '500px' }}
      />
    </div>
    
  );
};

export default CanopyScholarshipPage;