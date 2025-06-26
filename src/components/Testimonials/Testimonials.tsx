import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tg from '../../assets/testimonials/tg.png';
import tg1 from '../../assets/testimonials/tg1.png';
import tg2 from '../../assets/testimonials/tg2.png';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: "I never knew imagining my own story with new characters and plot of my choice would be possible before Canopy's session. I always had a difficult time expressing myself to my teachers and in exams. But, after Katha Bunaun, not only have I learned how to write my own story but also communicate with others.",
      image: tg
    },
    {
      id: 2,
      text: "My daughter was about to leave school because I simply couldn't afford it anymore. As a father, it broke my heart but there was nothing I could do. But then Canopy stepped in and helped her stay in school. Now, she's not only in school, she's talking about becoming a banker! She tells me she'll earn enough so I don't have to worry anymore.",
      image: tg2
    },
    {
      id: 3,
      text: "What stands out the most about Canopy Nepal is the compassion, dedication, and professionalism of every person involved with the organization. We all share the belief that education is the key to empowering children, families, and communities to break free from the cycle of poverty and pursue a brighter future. Thanks to the Canopy team we see stories every day of how this belief is in action.",
      image: tg1
    }
  ];

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length, paused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      className="relative w-full overflow-hidden h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background Images */}
      {testimonials.map((testimonial, index: number) => (
        <div
          key={testimonial.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${testimonial.image})` }}
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className={`relative z-10 flex h-full items-center justify-start px-4 sm:px-6 lg:px-8`}>
        <div className={`w-full flex ${currentSlide === 1 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-full max-w-4xl ${currentSlide === 1 ? 'text-left mr-auto pl-0 lg:pl-20' : 'text-right ml-auto pr-0 lg:pr-20'}`}>
            <blockquote className="text-lg text-white font-light sm:text-2xl lg:text-3xl">
              "{testimonials[currentSlide].text}"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="group rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
        </button>
      </div>

      <div className="absolute right-6 top-1/2 z-20 -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="group rounded-full bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/30"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 z-20 h-1 w-full bg-white/20">
        <div
          className="h-full bg-white transition-all duration-300 ease-linear"
          style={{
            width: `${((currentSlide + 1) / testimonials.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
};

export default TestimonialSection;