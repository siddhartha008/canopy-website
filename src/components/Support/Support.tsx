import React from 'react';
import { ArrowRight } from 'lucide-react';

const SupportUsSection = () => {
  return (
    <section className="bg-#eeeeee py-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <h2 className="text-neutral-900 text-lg font-semibold uppercase tracking-wider mb-8">
          SUPPORT US
        </h2>
        
        {/* Main Statistic */}
        <div className="mb-12">
          <h3 className="text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="text-primary-red">73%</span> of students are out of school and stuck in cycles of <span className="text-primary-orange">generational poverty</span>
          </h3>
        </div>
        
        {/* Description */}
        <p className="text-neutral-900 text-xl md:text-2xl font-medium mb-12 leading-relaxed">
          Our work to reduce the drop out rate needs your support. You can help by providing support to child's education, school sessions, or operational cost.
        </p>
        
        {/* CTA Button */}
        <button className="group bg-primary-orange hover:bg-primary-red text-white text-xl font-bold py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto">
          Donate Now
          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default SupportUsSection;