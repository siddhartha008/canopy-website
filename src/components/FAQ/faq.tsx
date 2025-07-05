import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, BookOpen, Users, Heart, Globe, Award, Mail } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: "What is Canopy Nepal and what do you do?",
      answer: "Canopy Nepal is a non-profit organization dedicated to improving access to quality education for underserved students across Nepal. We provide long-term scholarships and deliver story-based learning in public schools to reduce dropout rates and break cycles of poverty. By combining academic support with creativity, mentorship, and collaboration with local governments, we help students stay in school, build critical life skills, and shape their own futures.",
      category: "general",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 2,
      question: "How can I donate to Canopy Nepal?",
      answer: "You can donate to Canopy Nepal through our secure online donation platform. We accept various payment methods including credit cards, PayPal, and bank transfers. Your donation directly supports our scholarship programs and educational initiatives. Visit our donate page for more information and to make a contribution.",
      category: "donations",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 3,
      question: "How do you select students for scholarships?",
      answer: "Our scholarship selection process is based on several criteria including financial need, academic potential, and commitment to education. We work closely with local schools and communities to identify students who would benefit most from our support. The process includes interviews, family visits, and ongoing assessment to ensure we're supporting the right students.",
      category: "scholarships",
      icon: <Award className="w-6 h-6" />
    },
    {
      id: 4,
      question: "What is the Katha Bunaun program?",
      answer: "Katha Bunaun is our innovative story-based learning program that helps students develop creativity, critical thinking, and communication skills. Through interactive storytelling sessions, students learn to express themselves, build confidence, and develop a love for learning. The program has shown remarkable results in improving student engagement and academic performance.",
      category: "programs",
      icon: <BookOpen className="w-6 h-6" />
    },
    {
      id: 5,
      question: "How can I volunteer with Canopy Nepal?",
      answer: "We welcome volunteers from all backgrounds! Whether you're interested in teaching, mentoring, administrative support, or fundraising, there are many ways to get involved. We have both local and international volunteer opportunities. Contact us through our website or email us directly to learn more about current volunteer positions.",
      category: "volunteering",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 6,
      question: "Where does Canopy Nepal operate?",
      answer: "Canopy Nepal primarily operates in Nepal, with our main office located in Kathmandu. We work in various regions across the country, partnering with local schools and communities. We also have international chapters and partnerships to support our global mission of educational empowerment.",
      category: "general",
      icon: <Globe className="w-6 h-6" />
    },
    {
      id: 7,
      question: "How can I stay updated with Canopy Nepal's work?",
      answer: "You can stay connected with us through our newsletter, social media channels, and website. We regularly share updates about our programs, student success stories, and upcoming events. Subscribe to our newsletter or follow us on social media to receive the latest news and impact stories.",
      category: "general",
      icon: <Mail className="w-6 h-6" />
    },
    {
      id: 8,
      question: "What percentage of donations goes directly to programs?",
      answer: "We are committed to transparency and efficiency. Approximately 85% of all donations go directly to our programs, including scholarships, educational materials, and program delivery. The remaining 15% covers essential administrative costs, fundraising, and organizational development to ensure sustainable impact.",
      category: "donations",
      icon: <Heart className="w-6 h-6" />
    },
    {
      id: 9,
      question: "Do you provide support beyond financial scholarships?",
      answer: "Yes! Our support goes far beyond financial assistance. We provide mentorship, academic guidance, life skills training, and emotional support to our students. Our holistic approach ensures that students have the tools, confidence, and support network they need to succeed both academically and personally.",
      category: "scholarships",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 10,
      question: "How can schools partner with Canopy Nepal?",
      answer: "We actively seek partnerships with schools that share our vision for quality education. If your school is interested in partnering with us, please reach out through our contact form or email us directly. We'll discuss potential collaboration opportunities and how we can work together to support students.",
      category: "partnerships",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'general', name: 'General', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'donations', name: 'Donations', icon: <Heart className="w-5 h-5" /> },
    { id: 'scholarships', name: 'Scholarships', icon: <Award className="w-5 h-5" /> },
    { id: 'programs', name: 'Programs', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'volunteering', name: 'Volunteering', icon: <Users className="w-5 h-5" /> },
    { id: 'partnerships', name: 'Partnerships', icon: <Globe className="w-5 h-5" /> }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-primary-red mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Find answers to common questions about Canopy Nepal, our programs, and how you can get involved in our mission to reshape education.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-primary-orange text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="space-y-4"
        >
          <AnimatePresence mode="wait">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ backgroundColor: '#f9fafb' }}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-primary-orange">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-primary-orange flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-gray-100 pt-4">
                          <p className="text-gray-700 leading-relaxed text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 text-center bg-[#FFFBF2] rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-red mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help! Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-primary-orange text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-cyan transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
            <motion.button
              className="border-2 border-primary-orange text-primary-orange px-8 py-3 rounded-lg font-semibold hover:bg-primary-cyan hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
