import React, { useState } from 'react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const CanopyBoardOfDirectors: React.FC = () => {
  const board = useSite().board;
  const [selectedFilter, setSelectedFilter] = useState(board.filters[0] || '');
  const filteredMembers = board.members.filter((member) => member.category === selectedFilter);

  return (
    <div className="bg-primary-orange/5 text-gray-800 mt-28 min-h-screen">
      <div className="py-16 text-center">
        <h1 className={`text-5xl md:text-6xl font-bold ${selectedFilter === 'BOARD OF DIRECTORS' ? 'text-primary-red' : 'text-[#4984c4]'} mb-12`}>
          {board.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-base font-medium text-gray-600">
          {board.filters.map((filter, index) => (
            <React.Fragment key={filter}>
              <button onClick={() => setSelectedFilter(filter)} className={`hover:text-primary-red transition-colors duration-200 ${selectedFilter === filter ? 'text-gray-900 font-semibold' : ''}`}>
                {filter}
              </button>
              {index < board.filters.length - 1 && <span className="text-gray-400">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member) => (
            <div key={member.id} className="bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
              <div className="relative aspect-square overflow-hidden">
                <img src={mediaUrl(member.image)} alt={member.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                  <p className="text-white text-md leading-relaxed">{member.description}</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6">
                <h3 className={`text-2xl font-bold ${member.category === 'BOARD OF DIRECTORS' ? 'text-primary-red' : 'text-[#4984c4]'} mb-1`}>{member.name}</h3>
                <p className="text-base uppercase text-gray-600 tracking-wide">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanopyBoardOfDirectors;
