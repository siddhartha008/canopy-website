import React, { useEffect, useRef, useState } from 'react';
import heroImg from '../../../assets/kbtop.png';
import kblifecycle from '../../../assets/kbImpact.svg';
import kbImpact from '../../../assets/kbImpact.png';
import mtoc1 from '../../../assets/mtoc/MTOC1.png';
import mtoc2 from '../../../assets/mtoc/MTOC2.png';
import mtoc3 from '../../../assets/mtoc/MTOC3.png';
import mtoc4 from '../../../assets/mtoc/MTOC4.png';
import mtoc5 from '../../../assets/mtoc/MTOC5.png';
import mtoc6 from '../../../assets/mtoc/MTOC6.png';

const mtocImages = [
  { src: mtoc1, alt: 'MTOC step 1' },
  { src: mtoc2, alt: 'MTOC step 2' },
  { src: mtoc3, alt: 'MTOC step 3' },
  { src: mtoc4, alt: 'MTOC step 4' },
  { src: mtoc5, alt: 'MTOC step 5' },
  { src: mtoc6, alt: 'MTOC step 6' },
];

const MobileMTOCCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onScroll = () => {
      const children = Array.from(container.children) as HTMLElement[];
      if (children.length === 0) return;
      // Find the closest slide by comparing scrollLeft with each child's offsetLeft
      let closestIndex = 0;
      let minDist = Number.POSITIVE_INFINITY;
      const currentLeft = container.scrollLeft;
      for (let i = 0; i < children.length; i++) {
        const childLeft = children[i].offsetLeft - (children[0]?.offsetLeft || 0);
        const dist = Math.abs(currentLeft - childLeft);
        if (dist < minDist) {
          minDist = dist;
          closestIndex = i;
        }
      }
      setActiveIndex(closestIndex);
    };

    container.addEventListener('scroll', onScroll, { passive: true });
    return () => container.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    const children = Array.from(container.children) as HTMLElement[];
    const clamped = Math.min(Math.max(index, 0), children.length - 1);
    const firstLeft = children[0]?.offsetLeft || 0;
    const targetLeft = (children[clamped]?.offsetLeft || 0) - firstLeft;
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  // Ensure we always start from the first slide on mount
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.scrollTo({ left: 0, behavior: 'auto' });
    // After layout settles, ensure index 0
    requestAnimationFrame(() => scrollToIndex(0));
    const timeout = window.setTimeout(() => scrollToIndex(0), 100);
    return () => window.clearTimeout(timeout);
  }, []);

  // Autoscroll removed per request; users can tap left/right areas or dots

  const handleClickAdvance = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const clickX = e.clientX;
    const leftThreshold = rect.left + rect.width * 0.4; // left ~40% goes back
    const rightThreshold = rect.left + rect.width * 0.6; // right ~40% advances
    if (clickX >= rightThreshold) scrollToIndex(activeIndex + 1);
    else if (clickX <= leftThreshold) scrollToIndex(activeIndex - 1);
  };

  return (
    <div className="md:hidden mt-8 mb-10" onClick={handleClickAdvance}>
      <div
        ref={containerRef}
        className="w-full overflow-x-auto snap-x snap-mandatory flex gap-4 px-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {mtocImages.map((img, idx) => (
          <div key={idx} className="flex-shrink-0 w-full snap-center">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto rounded-xl object-contain"
            />
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-4">
        {mtocImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={(ev) => {
              ev.stopPropagation();
              scrollToIndex(i);
            }}
            className={
              'h-2 w-2 rounded-full transition-colors ' +
              (i === activeIndex ? 'bg-primary-red' : 'bg-gray-300')
            }
          />
        ))}
      </div>
    </div>
  );
};

const KathaBunaun = () => {
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Image at the very top */}
      <img
        src={heroImg}
        alt="Canopy Nepal Scholarship Hero"
        className="w-full h-[500px] object-cover object-bottom mb-8"
      />

      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-red mb-2">
          Katha Bunaun
        </h1>
        <div className='mt-4'>
        <p className="text-gray-700 text-xl leading-relaxed mb-4">
        Katha Bunaun, which translates to "Weaving Stories," is <span className='text-primary-red font-semibold'>Canopy Nepal's signature story-based learning program</span> that brings classrooms to life.

              </p>
              <p className="text-gray-700 text-xl leading-relaxed">
              Through interactive sessions, students explore language, identity, values, creativity, self-expression and critical thinking by crafting and sharing stories. Whether it's a tale about their village, a dream for the future, or a social issue they care about, students learn to express themselves with confidence and curiosity.
              </p>
              </div>
      </div>

      {/* Second Section with Image */}
      {/* <img
        src={secondSection}
        alt="CANSHIP Section Divider"
        className="w-full h-[400px] object-cover object-center"
        style={{ maxHeight: '400px' }}
      /> */}

      <div className="bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-12">
            <div className="w-full text-center">
              <p className=" text-xl leading-relaxed mb-8">
              Katha Bunaun isn't just about storytelling, it's about building the foundational skills that traditional classrooms often overlook: empathy, communication, collaboration, and voice.

              </p>
              <p className=" text-xl leading-relaxed">Designed to align with local curriculum and 
                <span className='text-primary-red font-semibold text-xl'> delivered in partnership with teachers and local governments, Katha Bunaun is Nepal's only storytelling program 
              </span> that creates a new kind of classroom, one where every child has the space to imagine, reflect, and speak up.
              </p>
              <p className='mt-4 text-xl leading-relaxed'>
              Because when students tell their own stories, they start to believe in their own power.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Section - Desktop image + Mobile carousel */}
      <div className="px-0 py-12 pb-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-red text-center">
          Katha Bunaun Incorporation in the System
        </h2>

        {/* Desktop/Tablet: keep existing landscape image */}
        <div className="hidden md:flex justify-center">
          <img
            src={kblifecycle}
            alt="Canopy Scholar Lifecycle Flowchart"
            className="w-screen max-w-none h-auto mt-8 mb-8 mx-auto"
          />
        </div>

        {/* Mobile: swipeable carousel using MTOC images */}
        <MobileMTOCCarousel />
      </div>

      {/* Impact Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-red mb-8">Impact</h2>
              <ul className="space-y-6 text-gray-700 text-xl">
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Engagement & Expression:</span> Students who were once shy or disengaged now speak up, participate actively, and take pride in their ideas and identities.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Foundational Skills:</span> Improvements in communication, empathy, creativity, and critical thinking, skills rarely prioritized in traditional classrooms.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Academic Improvement:</span> Increased classroom participation, engagement in extracurricular activities, comprehension, and retention by connecting curriculum with personal experiences and imagination.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Wellbeing & Confidence:</span> Students report feeling more confident, seen, and heard. Teachers observe better peer relationships and expression.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-red mr-3 mt-1">•</span>
                  <div>
                    <span className="font-semibold">Leadership & Collaboration:</span> Students learn to listen and collaborate while leading group discussions and projects, often guiding their friends in shared storytelling activities.
                  </div>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end items-stretch">
              <img 
                src={kbImpact}
                alt="Student and mentor interaction"
                className="rounded-xl h-auto object-left object-cover transform -scale-x-100"
                style={{  }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div>
            <h3 className="text-xl md:text-2xl mb-2">
              <span className="font-bold text-primary-red">0.025% budget increase</span> by local governments to incorporate storytelling into their curriculum.
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-2">
              <span className="font-bold text-primary-red">245 schools</span> have adopted interactive and child-centered learning approaches
            </h3>
          </div>
          <div>
            <h3 className="text-xl md:text-2xl mb-2">
              <span className="font-bold text-primary-red">67% increase</span> in student engagement in school activities.
            </h3>
          </div>
        </div>
      </div>
 
    </div>
    
  );
};

export default KathaBunaun;