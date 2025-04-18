import React from 'react';
import { FaFilePdf, FaImage, FaExchangeAlt } from 'react-icons/fa';
import PDFToolsSection from './PdfToolsSection';
import ImageToolsSection from './ImageToolsSection';

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
    
            <PDFToolsSection />
            <ImageToolsSection />
    
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