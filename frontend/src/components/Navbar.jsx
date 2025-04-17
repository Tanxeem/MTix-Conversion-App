import { useState } from 'react';
import { FaFilePdf, FaImage, FaExchangeAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import mtpix from '../assets/mtix.png'
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate()

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const tools = [
    {
      name: "PDF Tools",
      icon: <FaFilePdf className="mr-2 text-blue-500" />,
      dropdown: [
        { name: "Merge PDF", href: "#" },
        { name: "Split PDF", href: "#" },
        { name: "Compress PDF", href: "#" },
        { name: "PDF to Word", href: "#" },
      ]
    },
    {
      name: "Image Tools",
      icon: <FaImage className="mr-2 text-blue-500" />,
      dropdown: [
        { name: "Resize Image", href: "#" },
        { name: "Crop Image", href: "#" },
        { name: "Convert Format", href: "#" },
        { name: "Compress Image", href: "#" },
      ]
    },
    {
      name: "Converter",
      icon: <FaExchangeAlt className="mr-2 text-blue-500" />,
      dropdown: [
        { name: "Word to PDF", href: "#" },
        { name: "Excel to PDF", href: "#" },
        { name: "JPG to PNG", href: "#" },
        { name: "MP4 to MP3", href: "#" },
      ]
    }
  ];

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}

<div className="flex-shrink-0 cursor-pointer"
onClick={() => navigate('/')}>
  <span className="text-white text-2xl font-bold flex items-center">
    <img 
      src={mtpix} 
      alt="logo" 
      className="h-8 mr-2"  // h-8 = 32px, mr-2 adds spacing if needed
    />
    MTix  {/* Optional text next to logo */}
  </span>
</div>

          {/* Mobile menu button - Right */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop Navigation - Centered Tools */}
          <div className="hidden md:flex md:items-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            {tools.map((tool) => (
              <div key={tool.name} className="relative group mx-1">
                <button
                  className={`text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium flex items-center ${activeDropdown === tool.name ? 'bg-blue-800' : ''}`}
                  onClick={() => toggleDropdown(tool.name)}
                >
                  {tool.icon}
                  {tool.name}
                  <FaChevronDown className={`ml-1 h-3 w-3 transition-transform ${activeDropdown === tool.name ? 'transform rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {activeDropdown === tool.name && (
                  <div className="absolute z-10 left-0 mt-2 w-56 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {tool.dropdown.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth Buttons - Right */}
          <div className="hidden md:flex md:items-center space-x-2">
            <a
              onClick={() => navigate('/login', { state: { mode: 'login' } })}
              className="text-white hover:bg-blue-800 px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition duration-300"
            >
              Login
            </a>
            <a
              onClick={() => navigate('/login', { state: { mode: 'signup' } })}
              className="bg-white text-blue-700 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium shadow-sm transition duration-300 cursor-pointer"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tools.map((tool) => (
              <div key={`mobile-${tool.name}`}>
                <button
                  className="w-full flex items-center justify-between px-3 py-2 text-white text-sm font-medium rounded-md hover:bg-blue-800"
                  onClick={() => toggleDropdown(`mobile-${tool.name}`)}
                >
                  <div className="flex items-center">
                    {tool.icon}
                    {tool.name}
                  </div>
                  <FaChevronDown className={`h-3 w-3 transition-transform ${activeDropdown === `mobile-${tool.name}` ? 'transform rotate-180' : ''}`} />
                </button>

                {activeDropdown === `mobile-${tool.name}` && (
                  <div className="pl-4">
                    {tool.dropdown.map((item) => (
                      <a
                        key={`mobile-${item.name}`}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-white hover:bg-blue-800 rounded-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="pt-2 border-t border-blue-600">
              <a
                onClick={() => navigate('/login', { state: { mode: 'login' } })}
                className="block px-3 py-2 text-sm text-white hover:bg-blue-800 rounded-md"
              >
                Login
              </a>
              <a
                onClick={() => navigate('/login', { state: { mode: 'signup' } })}
                className="block px-3 py-2 mt-1 text-sm bg-white text-blue-700 rounded-md font-medium text-center"
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;