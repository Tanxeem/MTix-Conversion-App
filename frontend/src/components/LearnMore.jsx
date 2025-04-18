/* eslint-disable no-unused-vars */
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const LearnMore = () => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const features = [
    {
      title: "Lightning Fast Processing",
      description: "Our proprietary algorithms convert files 3x faster than competitors without quality loss.",
      icon: "⚡"
    },
    {
      title: "Military-Grade Security",
      description: "All files are encrypted in transit and at rest, with automatic deletion after processing.",
      icon: "🔒"
    },
    {
      title: "100+ Format Support",
      description: "From documents to videos, we handle all major file types with perfect conversion quality.",
      icon: "📁"
    },
    {
      title: "Simple Pricing",
      description: "Pay-as-you-go or unlimited plans with no hidden fees or surprise charges.",
      icon: "💲"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Want to learn more?
          </h2>
          <p className="text-xl text-gray-600">
            Discover what makes MTix the preferred choice for professionals worldwide
          </p>
        </motion.div>

        {/* Toggle Button */}
        <motion.div 
          className="flex justify-center mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <button
            onClick={() => setExpanded(!expanded)}
            className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center"
          >
            {expanded ? 'Show Less' : 'Learn More'} 
            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className="ml-2"
            >
              <FaChevronDown />
            </motion.div>
          </button>
        </motion.div>

        {/* Expandable Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* CTA at bottom of expanded content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => navigate('/login', { state: { mode: 'signup' } })} 
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto"
                >
                  Get Started Today <FaArrowRight className="ml-2" />
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Always visible alternative content */}
        {!expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-600 mb-6">
              Trusted by over 50,000 professionals worldwide
            </p>
            <div className="flex justify-center space-x-4">
              {["🏆 Industry Leader", "⭐ 4.9/5 Rating", "🚀 99.9% Uptime"].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  className="bg-white px-4 py-2 rounded-full shadow-sm text-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default LearnMore;