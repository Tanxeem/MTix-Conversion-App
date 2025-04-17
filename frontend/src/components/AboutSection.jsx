import React from 'react';
import { FaFilePdf, FaImage, FaExchangeAlt } from 'react-icons/fa';

function AboutSection() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Powerful File Conversion Made Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                FileTools offers a comprehensive suite of tools to handle all your document and media conversion needs.
              </p>
            </div>
    
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaFilePdf className="text-cyan-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">PDF Tools</h3>
                <p className="text-gray-600">
                  Merge, split, compress, and convert PDF files with our powerful processing tools. 
                  Maintain quality while reducing file sizes.
                </p>
              </div>
    
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaImage className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Image Processing</h3>
                <p className="text-gray-600">
                  Resize, crop, convert, and optimize images for web or print. 
                  Supports all major formats including JPG, PNG, SVG, and more.
                </p>
              </div>
    
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition duration-300">
                <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FaExchangeAlt className="text-indigo-600 text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">File Conversion</h3>
                <p className="text-gray-600">
                  Convert between document, image, audio, and video formats. 
                  Office documents, ebooks, media files - we handle them all.
                </p>
              </div>
            </div>
    
            <div className="mt-16 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl p-8 text-white">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                  Why Choose FileTools?
                </h3>
                <p className="text-lg text-cyan-100 mb-6">
                  Our platform combines powerful processing with an intuitive interface, 
                  giving you professional results without the complexity.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">100%</div>
                    <div className="text-sm">Secure</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">50+</div>
                    <div className="text-sm">Formats</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">∞</div>
                    <div className="text-sm">Cloud Storage</div>
                  </div>
                  <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold mb-1">24/7</div>
                    <div className="text-sm">Availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}

export default AboutSection;