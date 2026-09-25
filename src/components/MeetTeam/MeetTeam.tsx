import React, { useState } from 'react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const CanopyMeetTeam: React.FC = () => {
  const team = useSite().team;
  const [selectedFilter, setSelectedFilter] = useState(team.filters[0] || '');
  const filteredMembers = team.members.filter((member) => member.category === selectedFilter);
  const cardBgClass = 'bg-gray-50';

  return (
    <div className="bg-primary-orange/5 text-gray-800 mt-28 min-h-screen">
      <div className="py-16 text-center">
        <h1 className={`text-5xl md:text-6xl font-bold mb-12 ${selectedFilter === 'VOLUNTEERS' ? 'text-green-600' : 'text-primary-orange'}`}>
          {team.title}
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-600">
          {team.filters.map((filter, index) => (
            <React.Fragment key={filter}>
              <button
                onClick={() => setSelectedFilter(filter)}
                className={`hover:text-primary-orange transition-colors duration-200 ${selectedFilter === filter ? 'text-gray-900 font-semibold' : ''}`}
              >
                {filter}
              </button>
              {index < team.filters.length - 1 && <span className="text-gray-400">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {selectedFilter === 'FACILATORS AND FIELD VOLUNTEERS' && team.facilitatorNote && (
          <div className="mb-12 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">{team.facilitatorNote}</p>
          </div>
        )}
        {selectedFilter === 'VOLUNTEERS' && team.volunteerNote && (
          <div className="mb-12 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">{team.volunteerNote}</p>
          </div>
        )}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member) => (
            <div key={member.id} className={`${cardBgClass} shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}>
              <div className="relative aspect-square overflow-hidden">
                <img src={mediaUrl(member.image)} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <div className={`${cardBgClass} p-6`}>
                <div className="flex items-center mb-1">
                  <h3 className={`text-2xl font-bold mr-2 ${member.category === 'VOLUNTEERS' ? 'text-green-600' : 'text-primary-orange'}`}>{member.name}</h3>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-blue hover:text-primary-gray">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                  )}
                </div>
                <p className="text-m uppercase text-gray-600 tracking-wide">{member.title}</p>
                {selectedFilter !== 'FACILATORS AND FIELD VOLUNTEERS' && (
                  <p className="mt-4 text-gray-700 text-base leading-relaxed">{member.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanopyMeetTeam;
