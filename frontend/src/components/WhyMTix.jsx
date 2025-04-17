import { FaShieldAlt, FaRocket, FaUserFriends, FaCog, FaHeart } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const WhyMTix = () => {
  const features = [
    {
      icon: <FaShieldAlt className="text-blue-500" size={24} />,
      title: "Military-Grade Security",
      description: "Bank-level encryption protects all your transactions and data"
    },
    {
      icon: <FaRocket className="text-purple-500" size={24} />,
      title: "Lightning Fast",
      description: "Process transactions in milliseconds with our optimized platform"
    },
    {
      icon: <FaUserFriends className="text-green-500" size={24} />,
      title: "User Friendly",
      description: "Intuitive interface that anyone can use without training"
    },
    {
      icon: <FaCog className="text-amber-500" size={24} />,
      title: "Reliable Infrastructure",
      description: "99.99% uptime with automatic failover systems"
    },
    {
      icon: <FaHeart className="text-red-500" size={24} />,
      title: "Customer Obsessed",
      description: "24/7 support with real human assistance"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Why Choose MTix?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            The fastest, most secure platform with customer experience at its core
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-3 rounded-full shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Security Badge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full inline-flex items-center shadow-lg">
            <FaShieldAlt className="mr-2" size={18} />
            <span className="font-medium">Enterprise-Grade Security Certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyMTix;