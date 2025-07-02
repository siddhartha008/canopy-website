import React, { useState, useEffect } from 'react';
import Angirash from '../../assets/team/bod/Angirash.png';
import Mohit from '../../assets/team/bod/Mohit.png';
import Roshan from '../../assets/team/bod/Roshan.png';
import Shreya from '../../assets/team/bod/Shreya.png';
import Srishti from '../../assets/team/bod/Srishti.png';
import Aditya from '../../assets/team/advisoryboard/Aditya.png';
import Bijeysh from '../../assets/team/advisoryboard/Bijeysh.png';
import Niranjan from '../../assets/team/advisoryboard/Niranjan.png';
import Saugat from '../../assets/team/advisoryboard/Saugat.png';
import Shristi from '../../assets/team/advisoryboard/Shristi.png';
import Ashra from '../../assets/team/advisoryboard/Ashra.png';
import Bhushan from '../../assets/team/advisoryboard/Bhushan.png';
import Bibek from '../../assets/team/advisoryboard/Bibek.png';
import Bimla from '../../assets/team/advisoryboard/Bimla.png';
import Binju from '../../assets/team/advisoryboard/Binju.png';
import Clement from '../../assets/team/advisoryboard/Clement.png';
import Heather from '../../assets/team/advisoryboard/Heather.png';
import Meg from '../../assets/team/advisoryboard/Meg.png';
import Needhika from '../../assets/team/advisoryboard/Needhika.png';
import Sanam from '../../assets/team/advisoryboard/Sanam.png';
import Subha from '../../assets/team/advisoryboard/Subha.png';
import Swexya from '../../assets/team/advisoryboard/Swexya.png';

const CanopyBoardOfDirectors: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState('BOARD OF DIRECTORS');

  const filters = [
    'BOARD OF DIRECTORS',
    'ADVISORY BOARD',
  ];

  const boardMembers = [
    // Board of Directors
    {
      id: 1,
      name: 'Angirash Karki',
      title: 'Board of Director',
      category: 'BOARD OF DIRECTORS',
      image: Angirash,
      description: 'Angirash is an educator and social impact leader with a decade of experience across education, inclusion, and youth empowerment. He has led country operations for ISLearning, advised U.S. Embassy Youth Council and Rotary initiatives, mentored changemakers globally, and developed inclusive education policies with governments and the National Human Rights Commission.'
    },
    {
      id: 2,
      name: 'Mohit Rauniyar',
      title: 'Board of Director',
      category: 'BOARD OF DIRECTORS',
      image: Mohit,
      description: 'Mohit is a seasoned education and development leader with experience across Nepal, the U.S., and Europe. Alongside founding Canopy Nepal, he has led grants strategy at Riverside Immigrant Services, supported the launch of the University of Nepal, mentored social entrepreneurs in Ghana, organized climate initiatives in France, and shaped education policy dialogue globally. He holds a Masters in Education from Harvard University.'
    },
    {
      id: 3,
      name: 'Roshan Bhatta',
      title: 'Board of Director',
      category: 'BOARD OF DIRECTORS',
      image: Roshan,
      description: 'Roshan is a biomedical engineer and researcher with global experience across the U.S., Turkey, and Romania. He previously served as Canopy Nepal\'s Managing Director and has since worked in medical device quality assurance and nanotechnology R&D. Roshan brings a unique lens at the intersection of innovation, science, and education.'
    },
    {
      id: 4,
      name: 'Shreya Upadhyay',
      title: 'Board of Director',
      category: 'BOARD OF DIRECTORS',
      image: Shreya,
      description: 'Shreya is a social impact strategist and entrepreneur with experience leading volunteer programs, nonprofit operations, and youth initiatives. She co-founded Sweet Fix Nepal and has led international exchanges, board engagement, and cross-cultural programs that bridge purpose, community, and creativity.'
    },
    {
      id: 5,
      name: 'Srishti Vaidya',
      title: 'Board of Director',
      category: 'BOARD OF DIRECTORS',
      image: Srishti,
      description: 'Srishti is an economist and sustainability advocate with experience at the International Finance Corporation and Cummins Inc. She has led operations at Vaidya Group, advised global climate initiatives, and served as Nepal\'s youth delegate at COP28. She is also a Global Shaper and founder of Kathmandu\'s longest-running book club.'
    },
    
    // Advisory Board - Nepal
    {
      id: 6,
      name: 'Aditya Todi',
      title: 'Nepal',
      category: 'ADVISORY BOARD',
      image: Aditya,
      description: 'Aditya leads the metal manufacturing vertical at MC Group, a century-old business in Nepal. With past roles in consulting and development, he brings a global lens to strategic leadership. He holds degrees from Stanford and dual master\'s from Harvard Kennedy School and Harvard Business School.'
    },
    {
      id: 7,
      name: 'Bijeysh Ranjit',
      title: 'Nepal',
      category: 'ADVISORY BOARD',
      image: Bijeysh,
      description: 'Bijeysh is a social entrepreneur and founder of Danfe Works, which creates opportunities for marginalized communities through business with purpose. He previously led the nonprofit SAATH and has worked across the U.S., Europe, and Nepal. Passionate about impact, he\'s also a nature lover and lifelong learner.'
    },
    {
      id: 8,
      name: 'Niranjan Kunwar',
      title: 'Nepal',
      category: 'ADVISORY BOARD',
      image: Niranjan,
      description: 'Niranjan is an educator, writer, and translator based in Kathmandu. With an M.S.Ed from CUNY, he bridges education, arts, and culture. He\'s the author of Between Queens and the Cities, and continues to champion inclusive storytelling through his forthcoming translation of Seto Dharti and a children\'s book.'
    },
    {
      id: 9,
      name: 'Saugat Gautam',
      title: 'Nepal',
      category: 'ADVISORY BOARD',
      image: Saugat,
      description: 'Saugat is a political science scholar and development leader with a decade of experience. He manages programs at the International Commission of Jurists and teaches at Thames College. As co-founder of Nepal Center for Integrated Development, he blends research, advocacy, and action for lasting social change.'
    },
    {
      id: 10,
      name: 'Shristi Mishra',
      title: 'Nepal',
      category: 'ADVISORY BOARD',
      image: Shristi,
      description: 'Shristi is an education researcher, entrepreneur, and Fulbright alum with experience at the World Bank, USAID, and DC\'s education agency. A former teacher in Nepal, she now runs Yak9 Chews, a pet wellness company based in Austin—proving you can love data and dogs equally.'
    },
    
    // USA Advisory Board
    {
      id: 11,
      name: 'Ashra Acharya',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Ashra,
      description: 'Ashra leads executive operations at Bessemer Venture Partners and previously served as Director of Community for the Great Nepali Diaspora. Born in Nepal and raised in Texas, she brings heart and expertise to her work, always rooting her leadership in connection, equity, and community building.'
    },
    {
      id: 12,
      name: 'Bhushan Dahal',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Bhushan,
      description: 'Bhushan is a Ph.D. candidate in Educational Leadership at Florida State University and former Executive Director of Kids of Kathmandu. His leadership spans rebuilding schools, implementing digital classrooms, and advancing education policy—connecting academic insight with grassroots action to drive educational change in Nepal and beyond.'
    },
    {
      id: 13,
      name: 'Bibek Raj Kandel',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Bibek,
      description: 'Bibek is a global energy and climate expert advising governments and institutions across Asia and Africa. With a decade of experience in climate finance and policy, he brings systems-level thinking and a commitment to equitable growth. He holds an MPA from Harvard Kennedy School.'
    },
    {
      id: 14,
      name: 'Bimla Siwakoti',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Bimla,
      description: 'Bimla is a Health Informaticist at Deloitte, blending her technical background with lived experience from a refugee camp in Nepal. With degrees from Johns Hopkins and Penn State, she is passionate about improving healthcare systems and championing education equity through technology and data.'
    },
    {
      id: 15,
      name: 'Binju Gaire',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Binju,
      description: 'Binju is an IT Audit Manager at Deloitte, currently based in Dublin. With expertise in tech risk and compliance, she is equally committed to mental health, education, and financial literacy. She brings thoughtful insight and global experience to supporting impactful social change.'
    },
    {
      id: 16,
      name: 'Clement V. Gomes',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Clement,
      description: 'Clement is a Biology Professor at CUNY Guttman and founder of ISLearning. With decades of experience teaching in both K–12 and higher education, he is passionate about fostering global citizenship and building inclusive learning environments. He holds a Ph.D. from Columbia University.'
    },
    {
      id: 17,
      name: 'Heather Schultz',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Heather,
      description: 'Heather helped launch Canopy\'s Katha Bunaun program in 2017 and continues to champion its mission. With years of experience in youth development and literacy, she now lives in Seattle and works as a Senior Onboarding Specialist—always bringing her love for learning to every role.'
    },
    {
      id: 18,
      name: 'Meg Zuttermeister',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Meg,
      description: 'Meg is an educator passionate about designing engaging and inclusive learning environments. Her work spans early intervention, parent coaching, and preschool education. She holds an M.Ed from Harvard and brings a deep understanding of human development to Canopy\'s mission of empowering learners at every stage.'
    },
    {
      id: 19,
      name: 'Needika Adhikari',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Needhika,
      description: 'Needika is a Senior Analyst at Excelsior Energy Capital, managing renewable energy assets and advising on sustainability initiatives in the U.S. and Nepal. With an LLM from The Fletcher School, she brings analytical precision and a deep commitment to equitable climate solutions.'
    },
    {
      id: 20,
      name: 'Sanam Karki',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Sanam,
      description: 'Sanam is a project and data management professional with experience in banking and nonprofit operations. With an MBA from the University of Southern Mississippi, she helps organizations improve systems, drive results, and build stronger teams through thoughtful analysis and collaborative leadership.'
    },
    {
      id: 21,
      name: 'Subha Niroula',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Subha,
      description: 'Subha is a Software Engineer with a passion for teaching and mathematics. With degrees from St. John\'s College and Wake Forest, he brings global academic experience and a love for lifelong learning—balancing code, books, and his second Master\'s degree while navigating Texas tech.'
    },
    {
      id: 22,
      name: 'Swexya Panta',
      title: 'USA',
      category: 'ADVISORY BOARD',
      image: Swexya,
      description: 'Swexya is a Senior Investment Analyst at the Carnegie Corporation of New York. With a strong foundation in financial research and analysis, she previously worked at Stone Forest Capital. She brings analytical clarity, curiosity, and commitment to socially impactful investing and education access.'
    }
  ];


  const filteredMembers = boardMembers.filter(member => member.category === selectedFilter);
  const cardBgClass = "bg-gray-50";



  return (
    <div className="bg-primary-orange/5 text-gray-800 mt-28 min-h-screen">
      {/* Header Section */}
      <div className="py-16 text-center">
        <h1 className={`text-5xl md:text-6xl font-bold ${selectedFilter === 'BOARD OF DIRECTORS' ? 'text-primary-red' : 'text-[#4984c4]'} mb-12`}>
          Meet Our Board
        </h1>
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-base font-medium text-gray-600">
          {filters.map((filter, index) => (
            <React.Fragment key={filter}>
              <button
                onClick={() => setSelectedFilter(filter)}
                className={`hover:text-primary-red transition-colors duration-200 ${
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

      {/* Board Members - Responsive flex layout with centered last row */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
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
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Overlay with description - visible on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <p className="text-white text-md leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </div>

                {/* Member Info */}
                <div className={`${cardBgClass} p-6`}>
                  <h3 className={`text-2xl font-bold ${member.category === 'BOARD OF DIRECTORS' ? 'text-primary-red' : 'text-[#4984c4]'} mb-1`}>
                    {member.name}
                  </h3>
                  <p className="text-base uppercase text-gray-600 tracking-wide">
                    {member.title}
                  </p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CanopyBoardOfDirectors;