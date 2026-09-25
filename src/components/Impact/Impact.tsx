import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart, BookOpen, Home, Users, DollarSignIcon, Group } from 'lucide-react';
import CountUp from '../shared/CountUp';
import { useSite } from '../../cms/ContentContext';

interface ImpactProps {
  variant?: 'home' | 'our-impact';
}

const Impact: React.FC<ImpactProps> = ({ variant = 'home' }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const homeImpact = useSite().home.impact;
  const iconMap: Record<string, typeof Users> = { users: Users, book: BookOpen, home: Home, heart: Heart, dollar: DollarSignIcon, group: Group };
  const colors = ['text-primary-cyan', 'text-primary-blue', 'text-primary-orange', 'text-primary-red', 'text-primary-orange', 'text-primary-cyan'];
  const backgrounds = ['bg-secondary-cyan', 'bg-secondary-blue', 'bg-secondary-orange', 'bg-secondary-red', 'bg-secondary-orange', 'bg-secondary-cyan'];
  const impactStats = homeImpact.stats.map((stat, index) => ({
    ...stat,
    icon: iconMap[stat.icon] || Users,
    color: colors[index % colors.length],
    bgColor: backgrounds[index % backgrounds.length],
    suffix: stat.suffix || undefined,
  }));
  // Different styling based on variant
  const containerClass = variant === 'our-impact' ? 'bg-white' : 'bg-gray-50';
  const titleClass = variant === 'our-impact' ? 'text-primary-blue' : 'text-primary-red';

  return (
    <section id="impact" className={containerClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h2 className={`${variant === 'our-impact' ? 'text-3xl sm:text-4xl' : 'text-5xl'} font-extrabold ${titleClass} mb-4 pt-4`}>
            {homeImpact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {homeImpact.intro}
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4">
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