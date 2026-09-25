import { useSite } from '../../../cms/ContentContext';
import { mediaUrl } from '../../../cms/media';


const CanopyFranceSection = () => {
  const page = useSite().france;
  const teamMembers = page.members.map((member) => ({ ...member, image: mediaUrl(member.image) }));
  const heroImage = mediaUrl(page.heroImage);
  const whatWeDoImage = mediaUrl(page.whatWeDoImage);
  const getInvolvedImage = mediaUrl(page.involvedImage);

  return (
    <div className="bg-white font-sans mt-28">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden mb-2">
        <img
          src={heroImage}
          alt="Children in Nepal"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <h1 className="text-white text-6xl font-bold">
            {page.title}
          </h1>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Introduction Text */}
        <div className="py-8 text-center">
          <p className="text-2xl text-gray-700 leading-relaxed">
            {page.intro}
          </p>
        </div>

        {/* What We Do Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={whatWeDoImage}
                alt="Students in a classroom"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">{page.whatWeDoTitle}</h2>
              <ul className="list-disc text-gray-700 space-y-6 text-2xl">
                {page.whatWeDoPoints.map((point) => <li key={point} className="text-xl">{point}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Want to Get Involved Section - Full Width */}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen pb-8">
          <div className="flex flex-col md:flex-row-reverse items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px] md:h-auto">
              <img
                src={getInvolvedImage}
                alt="Volunteer for Canopy France"
                className="w-full h-[500px] object-cover object-bottom"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-16 py-16 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">{page.involvedTitle}</h2>
              <p className="text-gray-700 text-xl mb-4">{page.involvedIntro}</p>
              <ul className="list-disc list-inside text-gray-700 space-y-6 text-2xl">
                {page.involvedPoints.map((point) => <li key={point} className="text-xl">{point}</li>)}
              </ul>
              <div className="mt-8">
                <span className="font-bold text-2xl text-gray-800">{page.emailLabel}</span><br />
                <a href={`mailto:${page.email}`} className="text-primary-red hover:underline break-all text-xl">{page.email}</a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="w-full flex justify-center pb-4">
          <div className="text-center text-xl">
            <span className="text-gray-700">{page.newsletterBefore}</span>
            <a href={page.newsletterHref || '#'} className="text-primary-red hover:underline font-semibold">{page.newsletterLabel}</a>
            <span className="text-gray-700">{page.newsletterAfter}</span>
          </div>
        </div>
      </div>

      <hr/>

      {/* Meet the Team Section */}
      <div className="py-8">
        <p className="text-center text-black text-xl mb-8">
          {page.teamIntro}
        </p>
        <h2 className="text-center text-3xl font-bold text-primary-red mb-8">
          {page.teamTitle}
        </h2>
        <div className="max-w-7xl mx-auto px-6 pb-4">
          {/* Responsive flex layout with centered last row */}
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                  {/* Square Image Container */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Info */}
                  <div className="bg-gray-50 p-6">
                    <div className="flex items-center mb-1">
                      <h3 className="text-2xl font-bold text-primary-orange mr-2">
                        {member.name}
                      </h3>
                      {/* LinkedIn Link - Next to name */}
                      {member.linkedin && (
                        <a 
                          href={member.linkedin} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary-blue hover:text-primary-gray"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                    </div>
                    
                    {/* Description */}
                    <p className="mt-4 text-gray-700 text-base leading-relaxed">
                      {member.description}
                    </p>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CanopyFranceSection;