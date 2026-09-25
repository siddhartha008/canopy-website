import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const Arrow = () => (
  <svg className="w-5 h-5 ml-2 align-middle relative top-[1px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const GetInvolvedSection = () => {
  const page = useSite().getInvolved;
  return (
    <div className="bg-white font-sans mt-28">
      <div className="relative h-96">
        <img src={mediaUrl(page.heroImage)} alt={page.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white p-4">
          <h1 className="text-6xl md:text-6xl font-bold mb-4">{page.title}</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 text-center">
          <p className="text-2xl leading-relaxed whitespace-pre-line">{page.intro}</p>
        </div>
        {page.ways.map((way) => (
          <div key={way.id} className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
            <div className={`flex flex-col ${way.imageSide === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch h-full`}>
              <div className="w-full md:w-1/2 h-[400px]">
                <img src={mediaUrl(way.image)} alt={way.title} className={`w-full h-full object-cover object-center ${way.flipImage ? 'transform -scale-x-100' : ''}`} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 bg-white">
                <h2 className="text-3xl font-bold text-primary-red mb-4">{way.title}</h2>
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">{way.body}</p>
                <div className="flex gap-4 flex-wrap">
                  {way.buttons.map((button) => (
                    <a
                      key={button.id}
                      href={button.href}
                      target={button.newTab ? '_blank' : undefined}
                      rel={button.newTab ? 'noopener noreferrer' : undefined}
                      onClick={button.popup ? (event) => {
                        event.preventDefault();
                        window.open(button.href, 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500');
                      } : undefined}
                      className="w-max inline-flex items-center bg-primary-orange text-white font-semibold py-2 px-4 rounded-lg text-lg hover:bg-primary-cyan transition-colors duration-300"
                    >
                      {button.label}
                      <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <div className="flex flex-col md:flex-row items-stretch h-full">
            <div className="w-full md:w-1/2 h-[400px]">
              <img src={mediaUrl(page.helpImage)} alt={page.helpTitle} className="w-full h-full object-cover object-top" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-8 bg-white">
              <h2 className="text-3xl font-bold text-primary-red mb-4">{page.helpTitle}</h2>
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                {page.helpBody} <a href={`mailto:${page.helpEmail}`} className="text-primary-blue hover:underline font-semibold">{page.helpEmail}</a>. We'd love to hear from you.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">{page.helpClosing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolvedSection;
