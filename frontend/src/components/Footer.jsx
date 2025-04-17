/* eslint-disable no-unused-vars */
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaChevronDown } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import mtpix from '../assets/mtix.png'

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({});
  const socialLinks = [
    { icon: <FaFacebook />, name: "Facebook", color: "bg-blue-600 hover:bg-blue-700" },
    { icon: <FaTwitter />, name: "Twitter", color: "bg-blue-400 hover:bg-blue-500" },
    { icon: <FaInstagram />, name: "Instagram", color: "bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700" },
    { icon: <FaLinkedin />, name: "LinkedIn", color: "bg-blue-700 hover:bg-blue-800" },
    { icon: <FaYoutube />, name: "YouTube", color: "bg-red-600 hover:bg-red-700" }
  ];

  const footerLinks = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API", "Integrations", "Changelog"]
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "Blog", "Community", "Help Center"]
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Privacy", "Partners"]
    },
  ];

  const toggleMenu = (title) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Accordion */}
        <div className="md:hidden mb-8">
          {footerLinks.map((column, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleMenu(column.title)}
                className="flex justify-between items-center w-full py-4 text-left"
              >
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  {column.title}
                </h3>
                <motion.div
                  animate={{ rotate: openMenus[column.title] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-400" />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openMenus[column.title] ? 'auto' : 0,
                  opacity: openMenus[column.title] ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="pb-4 space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-cyan-400 transition duration-300 block pl-2"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description - Full width on mobile, 2 cols on tablet, 2 cols on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <div className="flex items-center mb-4">
              <img 
                src={mtpix} 
                alt="MTix Logo" 
                className="h-10 w-auto mr-3"
              />
            </div>
            <p className="text-gray-400 mb-6 text-sm lg:text-base">
              The fastest way to convert, edit and optimize your files.
            </p>
            
            {/* Newsletter - Hidden on small mobile, shown otherwise */}
            <div className="hidden sm:block space-y-3">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                Newsletter
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-r-lg transition duration-300 text-sm"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Footer Links - Hidden on mobile, shown on tablet+ */}
          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      whileHover={{ x: 5, color: "#06b6d4" }}
                      href="#"
                      className="text-gray-400 hover:text-cyan-400 transition duration-300 block text-sm"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6 md:my-8"
        />

        {/* Bottom Footer - Stack on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright - Always visible */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-xs md:text-sm order-2 md:order-1"
          >
            © {new Date().getFullYear()} MTix. All rights reserved.
          </motion.p>

          {/* Mobile Newsletter - Only shown on small mobile */}
          <div className="w-full md:hidden order-1 mb-4">
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">
              Newsletter
            </h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full text-sm"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-r-lg transition duration-300 text-sm"
              >
                Join
              </motion.button>
            </div>
          </div>

          {/* Social Media - Always visible */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex space-x-3 order-3 md:order-2"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className={`${social.color} w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition duration-300`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;