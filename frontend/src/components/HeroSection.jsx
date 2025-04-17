import { useEffect, useRef } from 'react';
import { FaFilePdf, FaImage, FaExchangeAlt, FaArrowRight } from 'react-icons/fa';
import { motion, useAnimation, useInView } from 'framer-motion';

const HeroSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const features = [
    { icon: <FaFilePdf className="text-blue-500 text-xl" />, text: "PDF Conversion & Editing" },
    { icon: <FaImage className="text-blue-500 text-xl" />, text: "Image Processing Tools" },
    { icon: <FaExchangeAlt className="text-blue-500 text-xl" />, text: "File Format Conversion" }
  ];

  return (
    <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-6" ref={ref}>
            <motion.h1
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Files With{' '}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-700 bg-clip-text text-transparent">
                Ease
              </span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600"
            >
              FileTools is your all-in-one solution for document and media conversion. 
              Our powerful online tools help you convert, edit, and optimize files 
              without compromising quality. No installations required - work magic 
              with your files directly in the browser.
            </motion.p>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center">
                Get Started <FaArrowRight className="ml-2" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="pt-4"
            >
              <div className="flex flex-wrap gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center bg-white/50 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                    {feature.icon}
                    <span className="ml-2 text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side - Animated Graphic */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 }
            }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-80 md:h-96 lg:h-[500px]"
          >
            {/* Main File Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white rounded-xl shadow-2xl z-10 flex flex-col overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-cyan-600 to-blue-700 p-3 text-white font-medium flex items-center">
                <FaFilePdf className="mr-2" />
                <span>document.pdf</span>
              </div>
              <div className="flex-grow flex items-center justify-center bg-gray-50">
                <div className="text-center p-4">
                  <FaFilePdf className="text-5xl text-red-500 mx-auto mb-3" />
                  <span className="text-gray-500">PDF Document</span>
                </div>
              </div>
              <div className="p-3 border-t border-gray-200 text-sm text-gray-600">
                Ready for conversion
              </div>
            </div>

            {/* Converting Animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-[170%] -translate-y-1/2 w-16 h-16 bg-white rounded-lg shadow-lg z-20 flex items-center justify-center text-blue-500"
            >
              <FaExchangeAlt className="text-2xl" />
            </motion.div>

            {/* Result File Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: [0, 0, 1],
                x: [50, 50, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 transform translate-x-[30%] -translate-y-1/2 w-64 h-80 bg-white rounded-xl shadow-xl z-0 flex flex-col overflow-hidden border border-gray-100"
            >
              <div className="bg-green-500 p-3 text-white font-medium flex items-center">
                <FaFilePdf className="mr-2" />
                <span>document.docx</span>
              </div>
              <div className="flex-grow flex items-center justify-center bg-gray-50">
                <div className="text-center p-4">
                  <svg className="w-12 h-12 text-blue-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                  </svg>
                  <span className="text-gray-500">Word Document</span>
                </div>
              </div>
              <div className="p-3 border-t border-gray-200 text-sm text-gray-600">
                Conversion complete
              </div>
            </motion.div>

            {/* Floating elements */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-cyan-100 rounded-full opacity-70"></div>
            <div className="absolute bottom-12 right-8 w-16 h-16 bg-blue-100 rounded-full opacity-70"></div>
            <div className="absolute top-20 right-20 w-10 h-10 bg-cyan-200 rounded-full opacity-50"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
