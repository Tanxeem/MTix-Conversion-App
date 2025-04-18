/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { motion, AnimatePresence } from 'framer-motion';
import { 
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
  FaExchangeAlt,
  FaCloudUploadAlt,
  FaSpinner,
  FaCheckCircle,
  FaArrowLeft
} from 'react-icons/fa';
import WhyMTix from '../components/WhyMTix';

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

const imageServices = [
    {
      name: "OPTIMIZE IMAGE",
      icon: "compress",
      color: "blue",
      items: [
        { name: "Compress Image", description: "Reduce image file size while preserving quality", icon: "compress", href: "/compressimage" },
        { name: "Compress JPG", description: "Optimize JPG images for smaller file sizes", icon: "image", href: "/compressjpg" },
        { name: "Compress PNG", description: "Make PNG files smaller without losing clarity", icon: "image", href: "/compresspng" },
        { name: "Compress JPEG", description: "Reduce JPEG file size efficiently", icon: "image", href: "/compressjpeg" },
        { name: "Compress WEBP", description: "Optimize modern WEBP image format", icon: "image", href: "/compresswebp" },
        { name: "Compress HEIC", description: "Shrink HEIC/HEIF images for easier sharing", icon: "image", href: "/compressheic" },
        { name: "Compress BMP", description: "Reduce BMP image file sizes", icon: "image", href: "/compressbmp" },
      ]
    },
    {
      name: "CONVERT IMAGE",
      icon: "exchange",
      color: "green",
      items: [
        { name: "Image to JPG", description: "Convert any image to JPG format", icon: "image", href: "/imagetojpg" },
        { name: "Image to PNG", description: "Transform images to PNG format", icon: "image", href: "/imagetopng" },
        { name: "Image to JPEG", description: "Convert to JPEG format", icon: "image", href: "/imagetojpeg" },
        { name: "Image to WEBP", description: "Convert to modern WEBP format", icon: "image", href: "/imagetowebp" },
        { name: "WEBP to JPG", description: "Convert WEBP back to JPG", icon: "exchange", href: "/webptojpg" },
        { name: "HEIC to JPG", description: "Convert HEIC to widely compatible JPG", icon: "exchange", href: "/heictojpg" },
      ]
    },
    {
      name: "EDIT IMAGE",
      icon: "crop",
      color: "purple",
      items: [
        { name: "Image Crop", description: "Crop images to remove unwanted areas", icon: "crop", href: "/imagecrop" },
        { name: "Image Resize", description: "Change image dimensions", icon: "expand", href: "/imageresize" },
        { name: "Image Rotate", description: "Rotate images to correct orientation", icon: "redo", href: "/imagerotate" },
        { name: "Image Crop Circle", description: "Create circular cropped images", icon: "circle", href: "/imagecropcircle" },
        { name: "Image Merge", description: "Combine multiple images into one", icon: "object-group", href: "/imagemerge" },
        { name: "Photo Signature Resize", description: "Optimize signatures for documents", icon: "signature", href: "/photosignature" },
      ]
    },
  ];

  const FileProcessing = () => {
    const { tool } = useParams();
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);
    const [isProcessing, setIsProcessing] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [downloadUrl, setDownloadUrl] = useState('');
    const [isDragging, setIsDragging] = useState(false);
  
    const handleFileChange = (e) => {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    };
  
    const handleDragEnter = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };
  
    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };
  
    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      const newFiles = Array.from(e.dataTransfer.files);
      setFiles([...files, ...newFiles]);
    };
  
    const removeFile = (index) => {
      const updatedFiles = [...files];
      updatedFiles.splice(index, 1);
      setFiles(updatedFiles);
    };
  
    const processFiles = async () => {
      setIsProcessing(true);
      
      // Simulate processing with progress
      for (let progress = 0; progress <= 100; progress += 10) {
        await new Promise(resolve => setTimeout(resolve, 200));
      }
      
      // Create a zip file with processed files
      const zip = new JSZip();
      
      files.forEach((file, index) => {
        zip.file(`processed_${index}_${file.name}`, file);
      });
      
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      setDownloadUrl(url);
      setIsProcessing(false);
      setIsComplete(true);
    };
  
    const downloadFiles = () => {
      saveAs(downloadUrl, `processed_${tool}_files.zip`);
    };
  
    const getToolInfo = () => {
      const allImageTools = imageServices.flatMap(cat => cat.items);
      const allPdfTools = pdfServices.flatMap(cat => cat.items);
      const allTools = [...allImageTools, ...allPdfTools];
      return allTools.find(t => t.href === `/${tool}`);
    };
  
    const toolInfo = getToolInfo();
  
    // Animation variants
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1,
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
          duration: 0.5,
          ease: "easeOut"
        }
      },
      hover: {
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }
    };
  
    const fileItemVariants = {
      hidden: { x: -20, opacity: 0 },
      visible: (i) => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: i * 0.05,
          duration: 0.3
        }
      }),
      exit: { x: 20, opacity: 0 }
    };
  
    return (
        <>
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center text-blue-100 hover:text-white mb-4 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Tools
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <h1 className="text-3xl font-bold">{toolInfo?.name}</h1>
              <p className="text-blue-100">{toolInfo?.description}</p>
            </motion.div>
          </div>
  
          <div className="p-6">
            <AnimatePresence mode="wait">
              {!isComplete ? (
                <motion.div
                  key="processing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* File Upload Area */}
                  <motion.div 
                    className={`border-2 border-dashed rounded-xl p-8 text-center mb-6 transition-all duration-300 ${
                      isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                    }`}
                    onDragEnter={handleDragEnter}
                    onDragLeave={handleDragLeave}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    whileHover={{ scale: 1.01 }}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <motion.div
                        animate={{ 
                          y: [0, -5, 0],
                          scale: isDragging ? 1.1 : 1
                        }}
                        transition={{ 
                          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                          scale: { duration: 0.2 }
                        }}
                      >
                        <FaCloudUploadAlt className="text-4xl text-blue-500 mb-3" />
                      </motion.div>
                      <p className="text-lg font-medium text-gray-700 mb-1">
                        {isDragging ? 'Drop your files here' : 'Drag & drop files here'}
                      </p>
                      <p className="text-sm text-gray-500 mb-4">or</p>
                      <label className="cursor-pointer">
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                          Browse Files
                        </span>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          className="hidden"
                          multiple
                          accept={tool.includes('pdf') ? '.pdf' : 'image/*'}
                        />
                      </label>
                    </div>
                  </motion.div>
  
                  {/* Selected Files */}
                  {files.length > 0 && (
                    <motion.div 
                      className="mb-6"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.4 }}
                    >
                      <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Files</h3>
                      <ul className="space-y-2">
                        <AnimatePresence>
                          {files.map((file, index) => (
                            <motion.li 
                              key={index}
                              custom={index}
                              variants={fileItemVariants}
                              initial="hidden"
                              animate="visible"
                              exit="exit"
                              whileHover={{ scale: 1.01 }}
                              className="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
                            >
                              <div className="flex items-center truncate">
                                <FaFileImage className="text-blue-400 mr-3 flex-shrink-0" />
                                <div className="truncate">
                                  <p className="text-sm font-medium text-gray-900 truncate">
                                    {file.name}
                                  </p>
                                  <p className="text-xs text-gray-500">
                                    {(file.size / 1024).toFixed(2)} KB
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFile(index)}
                                className="text-red-400 hover:text-red-600 transition-colors"
                              >
                                <FaTrashAlt />
                              </button>
                            </motion.li>
                          ))}
                        </AnimatePresence>
                      </ul>
                    </motion.div>
                  )}
  
                  {/* Process Button */}
                  <motion.button
                    onClick={processFiles}
                    disabled={files.length === 0 || isProcessing}
                    whileTap={files.length > 0 && !isProcessing ? { scale: 0.95 } : {}}
                    className={`w-full py-3 rounded-xl shadow-md font-medium flex items-center justify-center ${
                      files.length === 0 || isProcessing 
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white'
                    }`}
                  >
                    {isProcessing ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="mr-2"
                        >
                          <FaSpinner />
                        </motion.span>
                        Processing...
                      </>
                    ) : (
                      'Process Files'
                    )}
                  </motion.button>
                </motion.div>
              ) : (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="mb-6 text-green-500"
                  >
                    <FaCheckCircle className="mx-auto text-6xl" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Processing Complete!</h3>
                  <p className="text-gray-600 mb-8">Your files are ready to download.</p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <motion.button
                      onClick={() => {
                        setIsComplete(false);
                        setFiles([]);
                      }}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 bg-white border border-gray-300 rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                      Process More Files
                    </motion.button>
                    <motion.button
                      onClick={downloadFiles}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-sm text-sm font-medium text-white hover:from-green-600 hover:to-green-700"
                    >
                      Download All Files
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
      <WhyMTix />
      </>
    );
  };
  
  export default FileProcessing;