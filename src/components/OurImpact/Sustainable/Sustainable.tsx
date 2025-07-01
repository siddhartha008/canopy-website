import React from 'react';
import sdg1 from '../../../assets/sdg/1.png';
import sdg2 from '../../../assets/sdg/2.png';
import sdg3 from '../../../assets/sdg/3.png';
import sdg4 from '../../../assets/sdg/4.png';
import sdg5 from '../../../assets/sdg/5.png';
import sdg8 from '../../../assets/sdg/8.png';
import sdg10 from '../../../assets/sdg/10.png';
import sdg17 from '../../../assets/sdg/17.png';

const sdgs = [
  {
    img: sdg1,
  },
  {
    img: sdg2,
  },
  {
    img: sdg3,
  },
  {
    img: sdg4,

  },
  {
    img: sdg5,

  },
  {
    img: sdg8,

  },
  {
    img: sdg10,

  },
  {
    img: sdg17,

  },
];

const Sustainable: React.FC = () => {
  return (
    <div className="w-full overflow-hidden px-4 md:px-16 pt-18 bg-white">
      <h2 className="text-3xl md:text-3xl font-bold text-center text-primary-cyan mb-8">
        Contributing to the SDGs
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {sdgs.map((sdg) => (
          <div
            className={`flex flex-col items-center justify-center  shadow-md min-h-[200px]`}
          >
            <div className="flex items-center space-x-2 ">
              <img src={sdg.img} alt={"sdgicons"} className="w-full h-full object-fill" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sustainable;
