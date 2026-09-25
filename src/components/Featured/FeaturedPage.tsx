import React from 'react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const FeaturedPage: React.FC = () => {
  const page = useSite().featuredPage;
  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-primary-orange mb-14">{page.title}</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {page.items.map((item) => (
            <div key={item.id} className="bg-[#FFF6E6] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center w-full max-w-sm md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]">
              <img src={mediaUrl(item.image)} alt={item.title} className="w-full h-44 object-cover rounded-xl mb-6 border border-orange-100" style={{ background: '#fff' }} />
              <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">{item.title}</h3>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto text-primary-orange font-bold text-lg hover:underline">
                Read More &gt;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPage;
