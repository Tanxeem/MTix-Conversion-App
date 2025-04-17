// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaBolt, FaShieldAlt, FaFileAlt, FaRocket, FaExchangeAlt, FaImage } from 'react-icons/fa';

const FileToolsSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
          >
            The Fastest Tools for File Conversion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Transform your files in seconds with our lightning-fast processing engine. 
            No compromises on quality, security, or format support.
          </motion.p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Features */}
          <div className="space-y-8">
            {[
              {
                icon: <FaBolt className="text-yellow-500 text-2xl" />,
                title: "Lightning Fast",
                desc: "Process files in seconds with our optimized conversion engine"
              },
              {
                icon: <FaShieldAlt className="text-blue-500 text-2xl" />,
                title: "Bank-Grade Security",
                desc: "Your files are encrypted and automatically deleted after processing"
              },
              {
                icon: <FaFileAlt className="text-green-500 text-2xl" />,
                title: "Multi-Format Support",
                desc: "Over 50 file formats supported with perfect conversion quality"
              },
              {
                icon: <FaRocket className="text-purple-500 text-2xl" />,
                title: "Boost Productivity",
                desc: "Save hours with batch processing and automated workflows"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="bg-blue-50 p-3 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Animated Files */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96 hidden lg:block"
          >
            {/* Base File */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white rounded-xl shadow-lg z-10 border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-3 text-white font-medium">
                <span>document.pdf</span>
              </div>
              <div className="h-full flex items-center justify-center bg-gray-50">
                <div className="text-center p-4">
                  <FaFileAlt className="text-5xl text-red-500 mx-auto mb-3" />
                  <span className="text-gray-500">PDF Document</span>
                </div>
              </div>
            </div>

            {/* Animated Conversion Icon */}
            <motion.div
              animate={{
                rotate: [0, 360],
                x: [-80, 80],
                y: [-40, 40, -40]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg z-20 flex items-center justify-center text-blue-500"
            >
              <FaExchangeAlt className="text-xl" />
            </motion.div>

            {/* Floating Files */}
            {[
              { type: "doc", color: "blue", pos: "top-16 left-8" },
              { type: "jpg", color: "green", pos: "bottom-20 right-12" },
              { type: "mp4", color: "purple", pos: "top-24 right-16" }
            ].map((file, i) => (
              <motion.div
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                className={`absolute ${file.pos} w-16 h-20 bg-white rounded-lg shadow-md z-${10 + i} border border-gray-200 overflow-hidden`}
              >
                <div className={`bg-gradient-to-r from-${file.color}-500 to-${file.color}-600 p-2 text-white text-xs font-medium truncate`}>
                  {`file.${file.type}`}
                </div>
                <div className="h-full flex items-center justify-center bg-gray-50">
                  <div className="text-center">
                    <div className={`text-2xl text-${file.color}-500 mx-auto`}>
                      {file.type === "doc" && <FaFileAlt />}
                      {file.type === "jpg" && <FaImage />}
                      {file.type === "mp4" && <FaFileAlt />}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FileToolsSection;