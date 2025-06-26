import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import tg from '../../assets/testimonials/tg.png';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "I never knew imagining my own story with new characters and plot of my choice would be possible before Canopy's session. I always had a difficult time expressing myself to my teachers and in exams. But, after Katha Bunaun, not only have I learned how to write my own story but also communicate with others well.",
      author: "Shreya",
      role: "Student Scholar",
      image: tg
    },
    {
      id: 2,
      text: "My daughter was about to leave school because I simply couldn't afford it anymore. As a father, it broke my heart but there was nothing I could do. But then Canopy stepped in and helped her stay in school. Now, she's not only in school, she's talking about becoming a banker! She tells me she'll earn enough so I don't have to worry anymore.",
      author: "Ram Bahadur",
      role: "Father of Scholar",
      image: tg
    },
    {
      id: 3,
      text: "The story-based learning approach has transformed how our students engage with education. We've seen remarkable improvements in critical thinking, communication skills, and most importantly, the confidence to express themselves. This program is changing the future of education in Nepal.",
      author: "Sunita Sharma",
      role: "Ministry of Social Development",
      image: tg
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

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
    <section className="relative w-full overflow-hidden h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px]">
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
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-start px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl text-center text-white">
          <div className="mb-8">
            <blockquote className="text-xl font-light text-start ml-20 leading-relaxed sm:text-3xl lg:text-4xl">
              "{testimonials[currentSlide].text}"
            </blockquote>
          </div>
          
          <div className="space-y-2">
            <p className="text-xl font-semibold sm:text-2xl">
              {testimonials[currentSlide].author}
            </p>
            <p className="text-lg text-white/80 sm:text-xl">
              {testimonials[currentSlide].role}
            </p>
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