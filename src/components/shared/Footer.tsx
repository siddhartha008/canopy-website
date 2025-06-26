import React from 'react';
import { motion } from 'framer-motion';
import { TreePine, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    'About Us': [
      'Our Mission',
      'Our Team',
      'Annual Reports',
      'Partnerships',
      'Careers',
    ],
    'Programs': [
      'Education',
      'Healthcare',
      'Skills Training',
      'Women Empowerment',
      'Infrastructure',
    ],
    'Get Involved': [
      'Donate',
      'Volunteer',
      'Fundraise',
      'Corporate Partnership',
      'Newsletter',
    ],
    'Resources': [
      'Impact Stories',
      'News & Updates',
      'Research',
      'FAQs',
      'Contact Us',
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-primary-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-6"
            >
              <TreePine className="h-8 w-8 text-primary-cyan" />
              <span className="text-2xl font-bold">Canopy Nepal</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 mb-6 leading-relaxed"
            >
              Transforming lives in Nepal through sustainable education, healthcare, 
              and community development programs. Together, we're building a brighter future.
            </motion.p>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-3"
            >
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-cyan" />
                <span className="text-gray-300">info@canopynepal.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-cyan" />
                <span className="text-gray-300">+977 1-234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-cyan" />
                <span className="text-gray-300">Kathmandu, Nepal</span>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
            >
              <h3 className="text-lg font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-cyan transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-600"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest news and impact stories delivered to your inbox.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-primary-cyan focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="px-6 py-3 bg-primary-cyan text-white rounded-r-xl font-medium hover:bg-primary-cyan/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Social Links and Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-8 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary-cyan transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-300 mb-2">
              © 2024 Canopy Nepal. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors duration-300">
                Terms of Service
              </a>
              <span className="text-gray-500">•</span>
              <a href="#" className="text-gray-400 hover:text-primary-cyan transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;