import React from 'react';
import { useSite } from '../../../cms/ContentContext';
import { mediaUrl } from '../../../cms/media';

const Sustainable: React.FC = () => {
  const page = useSite().impactPage;
  return (
    <div className="w-full overflow-hidden px-4 md:px-16 pt-18 bg-white">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-primary-blue mb-8">
        {page.sdgTitle}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {page.sdgs.map((sdg) => (
          <div
            className={`flex flex-col items-center justify-center  shadow-md min-h-[200px]`}
          >
            <div className="flex items-center space-x-2 ">
              <img src={mediaUrl(sdg.image)} alt={sdg.alt} className="w-full h-full object-fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sustainable;
