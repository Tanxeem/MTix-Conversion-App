// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import {Link} from 'react-router'
import React from 'react';
import { 
  FaFilePdf, 
  FaCompressAlt, 
  FaObjectGroup, 
  FaCut, 
  FaCropAlt, 
  FaTrashAlt,
  FaFileDownload,
  FaFileImage,
  FaFileWord,
  FaFilePowerpoint,
  FaFileExcel,
  FaFileAlt,
  FaExchangeAlt
} from 'react-icons/fa';

const pdfServices = [
  {
    name: "OPTIMIZE PDF",
    icon: <FaCompressAlt className="mr-2 text-blue-500" />,
    description: "Tools to reduce file size and improve PDF performance",
    items: [
      { 
        name: "Compress PDF", 
        description: "Reduce PDF file size while maintaining good quality",
        icon: <FaCompressAlt className="mr-2 text-blue-500" />, 
        href: "/compresspdf" 
      },
    ]
  },
  {
    name: "MERGE & SPLIT",
    icon: <FaObjectGroup className="mr-2 text-green-500" />,
    description: "Combine or divide PDF documents as needed",
    items: [
      { 
        name: "Merge PDF", 
        description: "Combine multiple PDF files into a single document",
        icon: <FaObjectGroup className="mr-2 text-green-500" />, 
        href: "/mergepdf" 
      },
      { 
        name: "Split PDF", 
        description: "Divide a PDF into separate files by pages or sections",
        icon: <FaCut className="mr-2 text-green-500" />, 
        href: "/splitpdf" 
      },
    ]
  },
  {
    name: "EDIT PDF",
    icon: <FaCropAlt className="mr-2 text-purple-500" />,
    description: "Modify and customize your PDF documents",
    items: [
      { 
        name: "Crop PDF Page", 
        description: "Adjust page margins and remove unwanted white space",
        icon: <FaCropAlt className="mr-2 text-purple-500" />, 
        href: "/croppdfpages" 
      },
      { 
        name: "Remove PDF Pages", 
        description: "Delete specific pages from your PDF document",
        icon: <FaTrashAlt className="mr-2 text-purple-500" />, 
        href: "/removepdfpages" 
      },
      { 
        name: "Extract PDF", 
        description: "Select and save specific pages as a new PDF file",
        icon: <FaFileDownload className="mr-2 text-purple-500" />, 
        href: "/extractpdf" 
      },
      { 
        name: "Extract Images", 
        description: "Save all images from a PDF as separate image files",
        icon: <FaFileImage className="mr-2 text-purple-500" />, 
        href: "/extractimages" 
      },
    ]
  },
  {
    name: "CONVERT TO PDF",
    icon: <FaExchangeAlt className="mr-2 text-orange-500" />,
    description: "Transform various file formats into PDF documents",
    items: [
      { 
        name: "Image to PDF", 
        description: "Convert JPG, PNG or other images to PDF format",
        icon: <FaFileImage className="mr-2 text-orange-500" />, 
        href: "/imagetopdf" 
      },
      { 
        name: "JPG to PDF", 
        description: "Turn JPG photos into PDF documents",
        icon: <FaFileImage className="mr-2 text-orange-500" />, 
        href: "/jpgtopdf" 
      },
      { 
        name: "WORD to PDF", 
        description: "Convert Microsoft Word documents to PDF",
        icon: <FaFileWord className="mr-2 text-orange-500" />, 
        href: "/wordtopdf" 
      },
      { 
        name: "Powerpoint to PDF", 
        description: "Transform PowerPoint presentations into PDF files",
        icon: <FaFilePowerpoint className="mr-2 text-orange-500" />, 
        href: "/powerpointtopdf" 
      },
      { 
        name: "Excel to PDF", 
        description: "Convert Excel spreadsheets to PDF format",
        icon: <FaFileExcel className="mr-2 text-orange-500" />, 
        href: "/exceltopdf" 
      },
      { 
        name: "Text to PDF", 
        description: "Create PDFs from plain text files",
        icon: <FaFileAlt className="mr-2 text-orange-500" />, 
        href: "/texttopdf" 
      },
    ]
  },
  {
    name: "CONVERT FROM PDF",
    icon: <FaExchangeAlt className="mr-2 text-red-500" />,
    description: "Extract content from PDFs into other formats",
    items: [
      { 
        name: "PDF to Image", 
        description: "Save PDF pages as image files (JPG, PNG, etc.)",
        icon: <FaFileImage className="mr-2 text-red-500" />, 
        href: "/pdftoimage" 
      },
      { 
        name: "PDF to JPG", 
        description: "Convert PDF pages to JPG image format",
        icon: <FaFileImage className="mr-2 text-red-500" />, 
        href: "/pdftojpg" 
      },
      { 
        name: "PDF to Word", 
        description: "Transform PDF content into editable Word documents",
        icon: <FaFileWord className="mr-2 text-red-500" />, 
        href: "/pdftoword" 
      },
      { 
        name: "PDF to Powerpoint", 
        description: "Convert PDF slides into PowerPoint presentations",
        icon: <FaFilePowerpoint className="mr-2 text-red-500" />, 
        href: "/pdftopowerpoint" 
      },
      { 
        name: "PDF to Excel", 
        description: "Extract tables from PDF to Excel spreadsheets",
        icon: <FaFileExcel className="mr-2 text-red-500" />, 
        href: "/pdftoexcel" 
      },
      { 
        name: "PDF to Text", 
        description: "Extract text content from PDF files",
        icon: <FaFileAlt className="mr-2 text-red-500" />, 
        href: "/pdftotext" 
      },
    ]
  },
];

const PDFToolsSection = () => {
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
          delayChildren: 0.2
        }
      }
    };
  
    const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          ease: "easeOut"
        }
      },
      hover: {
        y: -5,
        scale: 1.02,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }
    };
  
    // Get all items from all categories
    const allTools = pdfServices.flatMap(category => category.items);
  
    return (
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allTools.map((tool, index) => {
              // Determine color based on original category
              let colorClass = "text-blue-500";
              if (tool.icon.type === FaObjectGroup || tool.icon.type === FaCut) {
                colorClass = "text-green-500";
              } else if (tool.icon.type === FaCropAlt || tool.icon.type === FaTrashAlt || 
                        tool.icon.type === FaFileDownload || tool.icon.type === FaFileImage) {
                colorClass = "text-purple-500";
              } else if (tool.icon.type === FaExchangeAlt) {
                // Check if it's "convert to" or "convert from"
                colorClass = tool.href.includes("toPDF") ? "text-orange-500" : "text-red-500";
              }
  
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover="hover"
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors duration-300 shadow-sm"
                >
                  <Link to={tool.href} className="block h-full w-full" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  <div className="flex items-start mb-4">
                    <div className={`${colorClass.replace('text', 'bg')}-50 p-3 rounded-lg mr-3`}>
                      {React.cloneElement(tool.icon, { className: `${colorClass} text-lg` })}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tool.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-5">{tool.description}</p>
                  <div className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300">
                    <span className="text-sm font-medium">Use Tool</span>
                    <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    );
  };
  
  export default PDFToolsSection;