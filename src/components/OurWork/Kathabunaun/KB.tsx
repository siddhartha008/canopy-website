import React, { useEffect, useRef, useState } from 'react';
import { useSite } from '../../../cms/ContentContext';
import { mediaUrl } from '../../../cms/media';

const MobileMTOCCarousel: React.FC<{ slides: string[] }> = ({ slides }) => {
  const mtocImages = slides.map((src, index) => ({ src: mediaUrl(src), alt: `MTOC step ${index + 1}` }));
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
  const page = useSite().katha;
  return (
    <div className="min-h-screen bg-white mt-28">
      {/* Hero Image at the very top */}
      <img
        src={mediaUrl(page.heroImage)}
        alt="Canopy Nepal Scholarship Hero"
        className="w-full h-[500px] object-cover object-bottom mb-8"
      />

      {/* Heading Section */}
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-primary-red mb-2">
          {page.title}
        </h1>
        <div className='mt-4'>
        {page.paragraphs.slice(0, 2).map((paragraph) => (
          <p key={paragraph} className="text-gray-700 text-xl leading-relaxed mb-4">{paragraph}</p>
        ))}
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
              {page.paragraphs.slice(2).map((paragraph) => (
                <p key={paragraph} className="text-xl leading-relaxed mb-8">{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lifecycle Section - Desktop image + Mobile carousel */}
      <div className="px-0 py-12 pb-0">
        <h2 className="text-3xl lg:text-4xl font-bold text-primary-red text-center">
          {page.lifecycleTitle}
        </h2>

        {/* Desktop/Tablet: keep existing landscape image */}
        <div className="hidden md:flex justify-center">
          <img
            src={mediaUrl(page.lifecycleImage)}
            alt="Canopy Scholar Lifecycle Flowchart"
            className="w-screen max-w-none h-auto mt-8 mb-8 mx-auto"
          />
        </div>

        {/* Mobile: swipeable carousel using MTOC images */}
        <MobileMTOCCarousel slides={page.slides} />
      </div>

      {/* Impact Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-primary-red mb-8">{page.impactTitle}</h2>
              <ul className="space-y-6 text-gray-700 text-xl">
                {page.points.map((point) => (
                  <li key={point.id} className="flex items-start">
                    <span className="text-primary-red mr-3 mt-1">•</span>
                    <div>
                      <span className="font-semibold">{point.label}:</span> {point.text}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-end items-stretch">
              <img 
                src={mediaUrl(page.impactImage)}
                alt="Student and mentor interaction"
                className="rounded-xl h-auto object-left object-cover transform -scale-x-100"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {page.stats.map((stat) => (
            <div key={stat.id}>
              <h3 className="text-xl md:text-2xl mb-2">
                <span className="font-bold text-primary-red">{stat.emphasis}</span> {stat.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
 
    </div>
    
  );
};

export default KathaBunaun;