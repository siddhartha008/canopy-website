import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSite } from '../../cms/ContentContext';
import { mediaUrl } from '../../cms/media';

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const testimonials = useSite().home.testimonials.map((item) => ({ ...item, image: mediaUrl(item.image) }));

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
      className="relative w-full overflow-hidden h-96 sm:h-[500px] lg:h-[600px] xl:h-[700px] mt-12"
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
        <div className={`w-full flex ${currentSlide === 2 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className={`w-full max-w-4xl ${currentSlide === 2 ? 'text-left mr-auto pl-0 lg:pl-20' : 'text-right ml-auto pr-0 lg:pr-20'}`}>
            <blockquote className="text-lg text-white font-light sm:text-2xl lg:text-3xl mb-4">
              "{testimonials[currentSlide].text}"
            </blockquote>
            <div className="text-white">
              <p className="font-semibold text-lg sm:text-xl lg:text-2xl">{testimonials[currentSlide].name}</p>
              <p className="text-sm sm:text-base lg:text-lg opacity-90">{testimonials[currentSlide].position}</p>
            </div>
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