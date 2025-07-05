import React from 'react';

// Import featured images
import featured1 from '../../assets/featured/1.png';
import featured2 from '../../assets/featured/2.png';
import featured3 from '../../assets/featured/3.png';
import featured4 from '../../assets/featured/4.png';
import featured5 from '../../assets/featured/5.png';
import featured6 from '../../assets/featured/6.png';
import featured7 from '../../assets/featured/7.png';
import featured8 from '../../assets/featured/8.png';
import featured9 from '../../assets/featured/9.png';
import featured10 from '../../assets/featured/10.png';
import featured11 from '../../assets/featured/11.png';
import featured12 from '../../assets/featured/12.png';
import featured13 from '../../assets/featured/13.png';
import featured14 from '../../assets/featured/14.png';

const featuredData = [
  {
    id: 1,
    title: 'Harvard i-lab Social Impact Fellowship Fund Recipient',
    url: 'https://innovationlabs.harvard.edu/venture/canopy-nepal',
    image: featured1,
  },
  {
    id: 2,
    title: 'Social Innovation + Change Initiative Fellow at Harvard Kennedy School',
    url: 'https://sici.hks.harvard.edu/person/mohit-rauniyar/',
    image: featured2,
  },
  {
    id: 3,
    title: 'Canopy Nepal Selected as One of HundrED\'s Global Innovations in Education',
    url: 'https://hundred.org/en/innovations/8-canopy-nepal',
    image: featured3,
  },
  {
    id: 10,
    title: 'Angirash Karki Interview in Education Plus',
    url: 'https://www.youtube.com/watch?v=xJXyXH60QmI',
    image: featured10,
  },
  {
    id: 11,
    title: 'Mohit Rauniyar Interview in Chiya Guff',
    url: 'https://www.youtube.com/watch?v=AAjvEer1VP4',
    image: featured11,
  },
  {
    id: 12,
    title: 'Monal Bhattarai Interview in Education Dialogue',
    url: 'https://www.youtube.com/watch?v=we30kvNKrvc&t=1702s',
    image: featured12,
  },
  
  {
    id: 7,
    title: 'MIT Solve: Canopy Nepal\'s Solution for Inclusive Learning',
    url: 'https://solve.mit.edu/solutions/89298',
    image: featured7,
  },
  {
    id: 8,
    title: 'Kathmandu Post: How Canopy Nepal is Making a Difference',
    url: 'https://kathmandupost.com/art-culture/2024/09/09/how-canopy-nepal-is-making-a-difference',
    image: featured8,
  },
  {
    id: 9,
    title: 'Canopy Nepal\'s Education Initiatives',
    url: 'https://www.setopati.com/social/218455',
    image: featured9,
  },
  {
    id: 4,
    title: 'Guide Q&A: Mohit Rauniyar on Mentorship and Social Impact',
    url: 'https://resolutionproject.org/guide-qa-with-mohit-rauniyar/',
    image: featured4,
  },
  {
    id: 5,
    title: 'World Economic Forum Feature on Mohit: Educating Communities',
    url: 'https://www.weforum.org/stories/2023/06/mohit-rauniyar-educating-community-climate-change/',
    image: featured5,
  },
  {
    id: 6,
    title: 'Catalyst 2030 Feature',
    url: 'https://catalyst2030.net/organisations/independent-mohit-rauniyar/',
    image: featured6,
  },
  
  {
    id: 13,
    title: "Angirash Karki's Podcast in House of Legends",
    url: 'https://www.youtube.com/watch?v=mk4YJGysW-M&t=32s',
    image: featured13,
  },
  {
    id: 14,
    title: 'International Literacy Association – Mohit Rauniyar Named 30 Under 30',
    url: 'https://www.literacyworldwide.org/docs/default-source/communications/literacy-today/ila-2023-30-under-30.pdf?sfvrsn=e915ab_14',
    image: featured14,
  },
];

const FeaturedPage: React.FC = () => {
  return (
    <section className="bg-white min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl md:text-6xl font-bold text-center text-primary-orange mb-14">Featured In</h1>
        <div className="flex flex-wrap justify-center gap-10">
          {featuredData.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FFF6E6] rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-6 text-center w-full max-w-sm md:w-[calc(50%-20px)] lg:w-[calc(33.333%-27px)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-44 object-cover rounded-xl mb-6 border border-orange-100"
                style={{ background: '#fff' }}
              />
              <h3 className="text-xl font-bold text-gray-900 mb-4 min-h-[64px] flex items-center justify-center">
                {item.title}
              </h3>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-primary-orange font-bold text-lg hover:underline"
              >
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
