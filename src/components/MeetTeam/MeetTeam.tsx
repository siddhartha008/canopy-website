import React, { useState } from 'react';
import Siddhartha from '../../assets/team/all/Siddhartha.png';
import Anusuya from '../../assets/team/all/Anusuya.png';
import Pratima from '../../assets/team/all/Pratima.png';
import Mohit from '../../assets/team/all/Mohit.png';
import Monal from '../../assets/team/all/Monal.png';
import Angirash from '../../assets/team/all/Angirash.png';
import Anjula from '../../assets/team/all/Anjula.png';
import Monika from '../../assets/team/all/Monika.png';
import Wangmo from '../../assets/team/all/Wangmo.png';
import Yamuna from '../../assets/team/all/Yamuna.png';
import Raghav from '../../assets/team/all/Raghav.png';
import Tanisha from '../../assets/team/all/Tanisha.png';

const CanopyMeetTeam: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('CORE TEAM');

  const filters = [
    'CORE TEAM',
    'FACILATORS AND FIELD VOLUNTEERS',
    'VOLUNTEERS',
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Mohit Rauniyar',
      title: 'Founder',
      category: 'CORE TEAM',
      image: Mohit,
      description: 'Established Canopy Nepal and leads its global vision, actively overseeing international chapters in the USA and France while driving strategic fundraising to expand impact and ensure long-term sustainability.',
      linkedin: 'https://www.linkedin.com/in/mohitrauniyar/'
    },
    {
      id: 2,
      name: 'Monal Bhattarai',
      title: 'Managing Director',
      category: 'CORE TEAM',
      image: Monal,
      description: 'Leads Canopy\'s vision, partnerships, and fundraising strategy—steering growth, building global relationships, and amplifying the organization\'s voice through thought leadership, board support, and international representation.',
      linkedin: 'http://www.linkedin.com/in/monal-bhattarai-bb3261194'
    },
    {
      id: 3,
      name: 'Angirash Karki',
      title: 'Executive Director',
      category: 'CORE TEAM',
      image: Angirash,
      description: 'Ensures Canopy operates smoothly by overseeing compliance, HR, finance, and risk management while building strong government partnerships and driving internal systems for staff performance and operational excellence.',
      linkedin: 'https://www.linkedin.com/in/angirash-karki/'
    },
    {
      id: 4,
      name: 'Pratima Wosti',
      title: 'Finance & Legal Officer',
      category: 'CORE TEAM',
      image: Pratima,
      description: 'Manages budgets, payments, and reports, ensuring Canopy\'s financial integrity with timely reconciliations, audit readiness, and clear communication of budget performance across all departments and proposals.',
      linkedin: 'https://www.linkedin.com/in/pratima-wosti-005b72239/'
    },
    {
      id: 5,
      name: 'Anjula Joshi',
      title: 'Program Coordinator',
      category: 'CORE TEAM',
      image: Anjula,
      description: 'Oversees the execution of Katha Bunaun and CANSHIP programs, ensuring sessions run smoothly, logistics are managed, and participants\' feedback and program data are regularly reviewed and reported.',
      linkedin: 'https://www.linkedin.com/in/anjula-joshi-she-her-352974217/'
    },
    {
      id: 6,
      name: 'Tanisha Agarwal',
      title: 'Development Assistant',
      category: 'CORE TEAM',
      image: Tanisha,
      description: 'Drives fundraising efforts by writing grant proposals, managing donor communications, organizing campaigns, and aligning program and finance teams to secure funding and report impact.',
      linkedin: 'https://www.linkedin.com/in/tanisha-agarwal-a65585240/'
    },
    {
      id: 7,
      name: 'Wangmo Lama',
      title: 'Communication Officer',
      category: 'CORE TEAM',
      image: Wangmo,
      description: 'Leads Canopy\'s digital storytelling and branding, managing content creation, press outreach, and engagement strategies to increase visibility, share success stories, and build a strong online presence.',
      linkedin: 'https://www.linkedin.com/in/wangmo-lama-b08688273/'
    },
    {
      id: 8,
      name: 'Abhishek Pradhan',
      title: 'Monitoring and Evaluation Trainee',
      category: 'CORE TEAM',
      image: Angirash,
      description: 'Tracks program impact through assessments, reporting, and data tools, ensuring that insights guide decision-making, drive improvement, and reflect the voices of students and communities.',
      linkedin: null
    },
    {
      id: 9,
      name: 'Anusuya Dahal',
      title: 'Facilitator Officer',
      category: 'CORE TEAM',
      image: Anusuya,
      description: 'Supports and trains facilitators, ensures quality program delivery, manages performance reviews, and maintains a strong support system to foster facilitator growth and retention.',
      linkedin: 'https://www.linkedin.com/in/anusuya-dahal-3b5884223/'
    },
    {
      id: 10,
      name: 'Siddhartha Guvaju',
      title: 'Facilitator Officer',
      category: 'CORE TEAM',
      image: Siddhartha,
      description: 'Supports and trains facilitators, ensures quality program delivery, manages performance reviews, and maintains a strong support system to foster facilitator growth and retention.',
      linkedin: null
    },
    {
      id: 11,
      name: 'Monika Limbu',
      title: 'School Liaison Officer',
      category: 'CORE TEAM',
      image: Monika,
      description: 'Builds strong relationships with schools, conduct regular visits, coordinate events, monitor student well-being, and ensure timely feedback and collaboration with parents and teachers to support scholars holistically.',
      linkedin: 'https://www.linkedin.com/in/monika-limbu-43119723r/'
    },
    {
      id: 12,
      name: 'Raghav Devkota',
      title: 'Finance Intern',
      category: 'CORE TEAM',
      image: Raghav,
      description: 'Supports day-to-day accounting tasks, helps maintain organized records, assists with budget tracking, and learns nonprofit finance systems.',
      linkedin: null
    },
    {
      id: 13,
      name: 'Yamuna Thapa',
      title: 'Kitchen and Care Champion',
      category: 'CORE TEAM',
      image: Yamuna,
      description: 'Ensures a welcoming, hygienic, and well-fed environment by preparing nutritious meals, maintaining cleanliness, and supporting daily office upkeep, helping the team stay energized and focused on their work.',
      linkedin: null
    },
    // Facilitators and Field Volunteers
    {
      id: 14,
      name: 'Anala Shrestha',
      title: 'Field Volunteer',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/analashrestha1830/'
    },
    {
      id: 15,
      name: 'Aviska Upadhyaya',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://np.linkedin.com/in/aaviska-upadhayaya-741755370'
    },
    {
      id: 16,
      name: 'Bimala Dahal',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 17,
      name: 'Biraj Poudel',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 18,
      name: 'Deepasha Maharjan',
      title: 'Field Volunteer',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/deepasha-maharjan-b30229206/'
    },
    {
      id: 19,
      name: 'Himshikha Dahal',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 20,
      name: 'Janvi Subedi',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 21,
      name: 'Mamata Shah',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 22,
      name: 'Manila Magar',
      title: 'Field Volunteer & Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 23,
      name: 'Megha Bhattarai',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/megha-bhattarai-73350a261/'
    },
    {
      id: 24,
      name: 'Mohit Muni Bajracharya',
      title: 'Field Volunteer & Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 25,
      name: 'Nandita Ghimire',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/nandita-ghimire/'
    },
    {
      id: 26,
      name: 'Ojashwi Pun',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 27,
      name: 'Prarthana Sharma',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/prarthana-sharma-268a81330/'
    },
    {
      id: 28,
      name: 'Prastuti Chaulagain',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 29,
      name: 'Pratikshya Poudel',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 30,
      name: 'Puspa kala Rai',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: 'https://www.linkedin.com/in/puspa-kala-rai-226090353/'
    },
    {
      id: 31,
      name: 'Sobika Shrestha',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 32,
      name: 'Sristy Khadka',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    },
    {
      id: 33,
      name: 'Sujal Adhikari',
      title: 'Facilitator',
      category: 'FACILATORS AND FIELD VOLUNTEERS',
      image: Angirash, // Using default image
      description: '',
      linkedin: null
    }
  ];

  const filteredMembers = selectedFilter === 'ALL' 
    ? teamMembers 
    : teamMembers.filter(member => member.category === selectedFilter);

  // Define consistent background color classes
  const cardBgClass = "bg-gray-50"; // Light gray background for all cards



  return (
    <div className="bg-primary-orange/5 text-gray-800 mt-28 min-h-screen">
      {/* Header Section */}
      <div className="py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-orange mb-12">
          Meet Our Team
        </h1>
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-medium text-gray-600">
          {filters.map((filter, index) => (
            <React.Fragment key={filter}>
              <button
                onClick={() => setSelectedFilter(filter)}
                className={`hover:text-primary-orange transition-colors duration-200 ${
                  selectedFilter === filter ? 'text-gray-900 font-semibold' : ''
                }`}
              >
                {filter}
              </button>
              {index < filters.length - 1 && (
                <span className="text-gray-400">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Team Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {/* Facilitators and Field Volunteers section description */}
        {selectedFilter === 'FACILATORS AND FIELD VOLUNTEERS' && (
          <div className="mb-12 text-center">
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Facilitators and Field Volunteers run engaging storytelling sessions, mentor students, track progress, and provide on-the-ground support—ensuring students thrive both inside and outside the classroom.
            </p>
          </div>
        )}
        
        {/* Responsive flex layout with centered last row */}
        <div className="flex flex-wrap justify-center gap-6">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className={`${cardBgClass} shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden w-full max-w-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]`}
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
                <div className={`${cardBgClass} p-6`}>
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
                  <p className="text-m uppercase text-gray-600 tracking-wide">
                    {member.title}
                  </p>
                  
                  {/* Description below name/title only for non-facilitator sections */}
                  {selectedFilter !== 'FACILATORS AND FIELD VOLUNTEERS' && (
                    <p className="mt-4 text-gray-700 text-base leading-relaxed">
                      {member.description}
                    </p>
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