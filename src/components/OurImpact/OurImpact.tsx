import React, { useState, useEffect } from 'react';
import MeetOurStudents from './MeetStudents/MeetStudents';
import impactHero from '../../assets/impactHero.png';
import WhereWeWork from './WhereWeWork/WhereWeWork';
import Sustainable from './Sustainable/Sustainable';

// --- Reusable Bar Chart Component (Final Polished Version) ---
interface BarChartProps {
  title: string;
  preValue: number;
  postValue: number;
  growth: string;
  maxValue: number;
  width?: number;
  height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ title, preValue, postValue, growth, maxValue, width = 140, height = 280 }) => {
  const chartHeight = height; // in pixels
  const scale = chartHeight / maxValue;
  const preHeight = preValue * scale;
  const postHeight = postValue * scale;
  const yAxisLabels = Array.from({ length: Math.ceil(maxValue) + 1 }, (_, i) => i).reverse();
  // Bar width and gap scale with chart width
  const barWidth = Math.max(48, Math.floor(width / 5)); // e.g. 80px for 400px chart
  const barGap = Math.max(16, Math.floor(width / 18)); // e.g. 20px for 360px chart
  return (
    <div className="flex flex-col items-center text-center w-full" style={{ maxWidth: width + 60 }}>
      {/* Added justify-center here to center the chart graphic */}
      <div className="flex w-full items-end justify-center">
        <div className="flex items-end border-b-2 border-l-2 border-gray-300 relative pl-4 pr-2" style={{ height: chartHeight + 10, width }}>
            {yAxisLabels.map(label => (
                <div 
                    key={label} 
                    className="absolute text-right w-6 -left-8 text-xs text-gray-500"
                    style={{ bottom: `${(label * scale) - 4}px` }}
                >
                    {label}
                </div>
            ))}
            
            <div className="h-full flex justify-center items-end relative" style={{ width: width - 40, gap: barGap }}>
                {/* Before-value Bar with Tooltip */}
                <div className="relative group flex justify-center">
                    <div
                        className="bg-primary-orange/20 rounded-t-sm"
                        style={{ width: barWidth, height: `${preHeight}px` }}
                    ></div>
                    <div className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        Before Canopy: {preValue.toFixed(1)}
                    </div>
                </div>
                {/* Post-value Bar with Tooltip and Growth Label */}
                <div className="relative group flex justify-center">
                    {/* Growth label above After Canopy bar */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 text-center text-xs font-bold text-primary-orange">
                        {growth}
                        <br />
                        growth
                    </div>
                    <div
                        className="bg-primary-orange rounded-t-sm transition-all duration-300 ease-in-out hover:opacity-80"
                        style={{ width: barWidth, height: `${postHeight}px` }}
                    ></div>
                    <div className="absolute bottom-full z-10 mb-2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        After Canopy: {postValue.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
      </div>
      <p className="text-base font-semibold text-gray-700 mt-1 px-1 h-12 flex items-center justify-center text-center">{title}</p>
    </div>
  );
};


const OurImpact: React.FC = () => {
  // All chart data consolidated into one array
  const allChartData = [
    { title: "Creativity", preValue: 1.3, postValue: 3.0, growth: "57%" },
    { title: "Self Expression", preValue: 1.1, postValue: 2.6, growth: "60%" },
    { title: "Critical Thinking", preValue: 1.0, postValue: 2.1, growth: "51%" },
    { title: "Attendance", preValue: 3.0, postValue: 3.9, growth: "77%" },
    { title: "Academic Results", preValue: 1.8, postValue: 4.7, growth: "62.3%" },
    { title: "Extracurricular Activities Participation", preValue: 2.0, postValue: 4.0, growth: "50%" },
    { title: "Academic Support by Family", preValue: 3.0, postValue: 5.0, growth: "66.7%" },
  ];
  
  // Split data for the two rows
  const rowOneData = allChartData.slice(0, 4);
  const rowTwoData = allChartData.slice(4, 7);
  
  const maxValue = Math.max(...allChartData.map(d => d.postValue), 5.0);

  // For styled stats cards, split headline and subtext
  const impactStatsStyled = [
    {
      headline: '10 IN 10\nSCHOLARS',
      subtext: "are employed after graduation"
    },
    {
      headline: '54%\nINCREASE',
      subtext: "in students' reading, writing, and critical thinking skills"
    },
    {
      headline: '77%\nINCREASE',
      subtext: "in school attendance after Canopy's support"
    },
    {
      headline: '9 IN 10\nSCHOLARS',
      subtext: "feel mentally stronger and less overwhelmed at school after Canopy's support"
    },
  ];
  
  // Carousel state for small/medium screens
  const [currentChart, setCurrentChart] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentChart((prev) => (prev + 1) % allChartData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [allChartData.length]);

  return (
    <section className="bg-white mt-28">
      <div className="relative h-[400px] w-full flex items-center justify-center text-white">
        <img 
          src={impactHero} 
          alt="Students supported by Canopy Nepal" 
          className="absolute inset-0 w-full h-[400px] object-cover" 
        />
        <div className="absolute inset-0 "></div>
        <h1 className="relative text-5xl sm:text-7xl font-bold z-10 ">Our Impact</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-primary-cyan max-w-5xl mx-auto text-2xl leading-relaxed">
          At Canopy Nepal, we measure impact not just in numbers, but in transformed lives, classrooms, and communities. From long-term scholarships to storytelling-powered learning, our programs help students stay in school, build essential life skills, and unlock opportunity.
        </p>

        {/* Unified Charts Section with 4-3 layout */}
        <div className="mt-16">
          {/* Carousel for md and below */}
          <div className="block lg:hidden">
            <div className="flex flex-col items-center">
              <BarChart {...allChartData[currentChart]} maxValue={maxValue} width={360} height={270} />
              <div className="flex justify-center mt-6 gap-2">
                {allChartData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentChart(idx)}
                    className={`h-3 w-3 rounded-full transition-all duration-300 ${idx === currentChart ? 'bg-primary-orange scale-125' : 'bg-primary-orange/30 hover:bg-primary-orange/60'}`}
                    aria-label={`Go to chart ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Grid for lg+ */}
          <div className="hidden lg:block">
            <div className="space-y-12">
              {/* First Row: 4 charts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-12">
                {rowOneData.map(data => (
                  <BarChart key={data.title} {...data} maxValue={maxValue} width={260} height={270} />
                ))}
              </div>
              {/* Second Row: 3 charts, centered */}
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
                  {rowTwoData.map(data => (
                    <BarChart key={data.title} {...data} maxValue={maxValue} width={260} height={270} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Legend */}
          <div className="mt-12 flex justify-end pr-4">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-primary-orange/20"></div>
                <span className="text-sm text-gray-600 font-medium">Before Canopy</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded-sm bg-primary-orange"></div>
                <span className="text-sm text-gray-600 font-medium">After Canopy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Statistics Section - Styled Cards */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {impactStatsStyled.map((stat, idx) => (
              <div
                key={idx}
                className="bg-[#E2F7EE] rounded-2xl p-8 flex flex-col items-center text-center h-full"
              >
                <div className="text-primary-cyan text-3xl sm:text-4xl font-extrabold mb-2 whitespace-pre-line">
                  {stat.headline}
                </div>
                <div className=" text-lg sm:text-xl font-normal mt-2">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

        <MeetOurStudents />
        <WhereWeWork />

       

        {/* Sustainability Section */}
        <Sustainable />

        
      </div>
    </section>
  );
};

export default OurImpact;