/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { 
  FaCompressAlt, 
  FaExchangeAlt, 
  FaCropAlt, 
  FaExpandAlt,
  FaRedo,
  FaCircle,
  FaObjectGroup,
  FaSignature,
  FaFileImage
} from 'react-icons/fa';

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

const iconComponents = {
  compress: FaCompressAlt,
  exchange: FaExchangeAlt,
  crop: FaCropAlt,
  expand: FaExpandAlt,
  redo: FaRedo,
  circle: FaCircle,
  "object-group": FaObjectGroup,
  signature: FaSignature,
  image: FaFileImage
};

const ImageToolsSection = () => {
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
  const allTools = imageServices.flatMap(category => 
    category.items.map(item => ({
      ...item,
      categoryColor: category.color
    }))
  );

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
            const IconComponent = iconComponents[tool.icon];
            const colorClass = `text-${tool.categoryColor}-500`;
            const bgColorClass = `bg-${tool.categoryColor}-50`;

            return (
              <motion.a
                key={index}
                href={tool.href}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-200 transition-colors duration-300 shadow-sm"
              >
                <div className="flex items-start mb-4">
                  <div className={`${bgColorClass} p-3 rounded-lg mr-3`}>
                    <IconComponent className={`${colorClass} text-lg`} />
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
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageToolsSection;