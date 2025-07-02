import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, BookOpen, Home, Users, Star, Award, DollarSignIcon, Group } from 'lucide-react';
import CountUp from '../shared/CountUp';

const Impact: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const impactStats = [
    
    {
      icon: Users,
      title: 'Scholarships Awarded',
      value: 227,
      color: 'text-primary-cyan',
      bgColor: 'bg-secondary-cyan',
    },
    {
      icon: BookOpen,
      value: 21000,
      suffix: '+',
      title: 'Students Worked With',
      color: 'text-primary-blue',
      bgColor: 'bg-secondary-blue',
    },
    {
      icon: Home,
      title: 'Schools Reached',
      value: 245,
      color: 'text-primary-orange',
      bgColor: 'bg-secondary-orange',
    },
    {
      icon: Heart,
      title: 'Sessions Conducted',
      value: 2500,
      suffix: '+',
      color: 'text-primary-red',
      bgColor: 'bg-secondary-red',
    },
    {
      icon: DollarSignIcon,
      title: 'Funds Raised',
      value: 1300000,
      color: 'text-primary-orange',
      bgColor: 'bg-secondary-orange',
    },
    {
      icon: Group,
      title: 'Local Government Adaptation',
      value: 7,
      color: 'text-primary-cyan',
      bgColor: 'bg-secondary-cyan',
    },
  ];

  

  return (
    <section id="impact" className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-red mb-4">
            Our Work in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Through our scholarship and storytelling programs, we're creating lasting change in the education space in Nepal. 

          </p>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${stat.bgColor} rounded-xl p-8 shadow-lg hover:shadow-xl duration-300 text-center group hover:-translate-y-2 transform transition-transform`}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-5xl font-bold mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {stat.title}
              </h3>
            </motion.div>
          ))}
        </div>

        

        
      </div>
    </section>
  );
};

export default Impact;