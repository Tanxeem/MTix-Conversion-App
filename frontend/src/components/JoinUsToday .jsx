/* eslint-disable no-unused-vars */
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const JoinUsToday = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold"
            >
              Ready to Transform Your File Workflows?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-blue-100"
            >
              Join thousands of professionals who trust MTix for their file conversion needs.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              {[
                "No credit card required",
                "Get started in 30 seconds",
                "Cancel anytime",
                "24/7 customer support"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <FaCheckCircle className="text-green-300 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg shadow-lg transition duration-300 flex items-center justify-center">
                Get Started <FaArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </motion.div>
          </div>

          {/* Right Side - Animated Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-64 lg:h-96 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center"
          >
            {/* Animated floating files */}
            {[
              { icon: "PDF", color: "bg-red-400", size: "w-16 h-20", pos: "top-8 left-8" },
              { icon: "DOC", color: "bg-blue-400", size: "w-20 h-24", pos: "bottom-8 left-12" },
              { icon: "JPG", color: "bg-green-400", size: "w-14 h-18", pos: "top-12 right-10" },
              { icon: "MP4", color: "bg-purple-400", size: "w-18 h-22", pos: "bottom-12 right-8" }
            ].map((file, index) => (
              <motion.div
                key={index}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
                className={`absolute ${file.pos} ${file.size} ${file.color} rounded-lg shadow-lg flex items-center justify-center font-bold text-white`}
              >
                {file.icon}
              </motion.div>
            ))}

            {/* Central conversion arrow */}
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute z-10 w-16 h-16 bg-white rounded-full shadow-xl flex items-center justify-center text-blue-600"
            >
              <FaArrowRight size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsToday;