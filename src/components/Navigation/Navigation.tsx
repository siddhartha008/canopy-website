import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // FIX 1: Update the navItems to correctly flag routes.
  const navItems = [
    {
      name: 'About Us',
      href: '#', // Set to '#' to indicate it's not a direct link, only a dropdown trigger
      submenu: [
        { name: 'Our Mission', href: '/missions', isRoute: true },
        { name: 'Our Story', href: '/story', isRoute: true },
        { name: 'Meet the Team', href: '/meet-the-team', isRoute: true },
        { name: 'Board of Directors', href: '/board-of-directors', isRoute: true }
      ]
    },
    {
      name: 'Our Work',
      href: '/ourwork',
      isRoute: true, // This was missing. Now it's identified as a route.
      submenu: [
        { name: 'CANSHIP', href: '/canship', isRoute: true },
        { name: 'Katha Bunaun', href: '/katha-bunaun', isRoute: true }
      ]
    },
    { name: 'Our Impact', href: '/ourimpact', isRoute: true },
    { name: 'Publications', href: '/publications', isRoute: true },
    {
      name: 'Chapters',
      href: '#',
      submenu: [
        { name: 'Canopy France', href: '/canopyfrance', isRoute: true },
        { name: 'Canopy USA', href: '/canopyusa', isRoute: true }
      ]
    },
    { name: 'Get Involved', href: '/getinvolved', isRoute: true }
  ];

  const handleNavigation = (href: string, isRoute?: boolean) => {
    if (isRoute) {
      navigate(href);
    } else {
      // Only scroll if we're on the homepage
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not on homepage, navigate to homepage first then scroll
        navigate('/');
        // Add a small delay to allow the homepage to load before scrolling
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleMenuItemClick = (item: any) => {
    if (item.isRoute) {
      navigate(item.href);
    } else {
      scrollToSection(item.href);
    }
  };

  const scrollToSection = (href: string) => {
    if (location.pathname === '/') {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      // Add a small delay to allow the homepage to load before scrolling
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <motion.nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-3">
        <div className="flex items-center">
          
          {/* 1) Logo on the left */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link to="/">
              <img
                src={logo}
                alt="Canopy Nepal Logo"
                className="h-24 w-auto"
              />
            </Link>
          </motion.div>

          {/* 2) Centered desktop nav */}
          <div className="hidden md:flex flex-1 justify-center space-x-10">
            {navItems.map((item, idx) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.submenu && setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.button
                  onClick={() => {
                    // For items with href '#', only toggle submenu (About Us, Chapters)
                    if (item.href === '#') {
                      setActiveDropdown(a => (a === idx ? null : idx));
                    } else if (item.isRoute) {
                      // For route items (Our Work), navigate to the page
                      navigate(item.href);
                    } else if (item.href && item.href !== '#') {
                      // For other items with valid href, scroll to section
                      scrollToSection(item.href);
                    }
                  }}
                  className={`
                    flex items-center space-x-1 font-medium
                    transition-colors duration-300 hover:text-primary-cyan
                    ${isScrolled ? 'text-primary-gray' : 'text-primary-gray drop-shadow-lg'}
                    ${location.pathname === item.href ? 'text-primary-cyan' : ''}
                  `}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  )}
                </motion.button>

                <AnimatePresence>
                  {item.submenu && activeDropdown === idx && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.submenu.map((sub, i) => (
                        <motion.button
                          key={sub.name}
                          onClick={() => handleNavigation(sub.href, sub.isRoute)}
                          className={`
                            w-full text-left px-4 py-2 text-sm 
                            hover:bg-gray-50 hover:text-primary-cyan transition-colors duration-200
                            ${location.pathname === sub.href ? 'text-primary-cyan bg-gray-50' : 'text-black'}
                          `}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {sub.name}
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* 3) Right side: Donate (desktop) + Mobile toggle */}
          <div className="flex items-center flex-shrink-0 space-x-4 ml-auto">
            {/* Donate button on md+ */}
            <motion.button
              onClick={() => navigate('/donate')}
              className="hidden md:inline-block bg-primary-cyan text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-cyan/90 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Donate Now
            </motion.button>

            {/* Mobile menu toggle on sm */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(open => !open)}
              className={`
                md:hidden p-2 rounded-md transition-colors duration-300
                ${isScrolled ? 'text-primary-gray' : 'text-primary-gray'}
              `}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <motion.div
          className={`md:hidden overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2">
            {navItems.map((item, idx) => (
              <div key={item.name}>
                <button
                  onClick={() => {
                    // For items with href '#', only toggle submenu (About Us, Chapters)
                    if (item.href === '#') {
                      setActiveDropdown(a => (a === idx ? null : idx));
                    } else if (item.isRoute) {
                      // For route items (Our Work), navigate to the page
                      navigate(item.href);
                    } else if (item.href && item.href !== '#') {
                      // For other items with valid href, scroll to section
                      scrollToSection(item.href);
                    }
                  }}
                  className={`
                    flex items-center justify-between w-full px-3 py-2 
                    font-medium hover:text-primary-cyan hover:bg-primary-cyan/10 rounded-md 
                    transition-colors duration-300
                    ${location.pathname === item.href ? 'text-primary-cyan bg-primary-cyan/10' : 'text-primary-gray'}
                  `}
                >
                  <span>{item.name}</span>
                  {item.submenu && (
                    <motion.div
                      animate={{ rotate: activeDropdown === idx ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={14} />
                    </motion.div>
                  )}
                </button>

                <AnimatePresence>
                  {item.submenu && activeDropdown === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden ml-4"
                    >
                      {item.submenu.map(sub => (
                        <button
                          key={sub.name}
                          onClick={() => handleNavigation(sub.href, sub.isRoute)}
                          className={`
                            block w-full px-3 py-2 text-sm 
                            hover:text-primary-cyan rounded-md transition-colors duration-300
                            ${location.pathname === sub.href ? 'text-primary-cyan bg-gray-50' : 'text-gray-600'}
                          `}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button
              onClick={() => navigate('/donate')}
              className="block w-full px-3 py-2 bg-primary-cyan text-white font-medium rounded-md hover:bg-primary-cyan/90 transition-colors duration-300"
            >
              Donate Now
            </button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
