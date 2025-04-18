import { 
    FaCompressAlt, 
    FaExchangeAlt, 
    FaCropAlt, 
    FaExpandAlt,
    FaRotateRight,
    FaCircle,
    FaObjectGroup,
    FaSignature,
    FaFileImage,
    FaFileAlt
  } from 'react-icons/fa';
  
  const imageServices = [
    {
      name: "OPTIMIZE IMAGE",
      icon: <FaCompressAlt className="mr-2 text-blue-500" />,
      items: [
        { name: "Compress Image", icon: <FaCompressAlt className="mr-2 text-blue-500" />, href: "/compressimage" },
        { name: "Compress JPG", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compressjpg" },
        { name: "Compress PNG", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compresspng" },
        { name: "Compress JPEG", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compressjpeg" },
        { name: "Compress WEBP", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compresswebp" },
        { name: "Compress HEIC", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compressheic" },
        { name: "Compress BMP", icon: <FaFileImage className="mr-2 text-blue-500" />, href: "/compressbmp" },
      ]
    },
    {
      name: "CONVERT IMAGE",
      icon: <FaExchangeAlt className="mr-2 text-green-500" />,
      items: [
        { name: "Image to JPG", icon: <FaFileImage className="mr-2 text-green-500" />, href: "/imagetojpg" },
        { name: "Image to PNG", icon: <FaFileImage className="mr-2 text-green-500" />, href: "/imagetopng" },
        { name: "Image to JPEG", icon: <FaFileImage className="mr-2 text-green-500" />, href: "/imagetojpeg" },
        { name: "Image to WEBP", icon: <FaFileImage className="mr-2 text-green-500" />, href: "/imagetowebp" },
        { name: "WEBP to JPG", icon: <FaExchangeAlt className="mr-2 text-green-500" />, href: "/webptojpg" },
        { name: "HEIC to JPG", icon: <FaExchangeAlt className="mr-2 text-green-500" />, href: "/heictojpg" },
      ]
    },
    {
      name: "EDIT IMAGE",
      icon: <FaCropAlt className="mr-2 text-purple-500" />,
      items: [
        { name: "Image Crop", icon: <FaCropAlt className="mr-2 text-purple-500" />, href: "/imagecrop" },
        { name: "Image Resize", icon: <FaExpandAlt className="mr-2 text-purple-500" />, href: "/imageresize" },
        { name: "Image Rotate", icon: <FaRotateRight className="mr-2 text-purple-500" />, href: "/imagerotate" },
        { name: "Image Crop Circle", icon: <FaCircle className="mr-2 text-purple-500" />, href: "/imagecropcircle" },
        { name: "Image Merge", icon: <FaObjectGroup className="mr-2 text-purple-500" />, href: "/imagemerge" },
        { name: "Photo Signature Resize", icon: <FaSignature className="mr-2 text-purple-500" />, href: "/photosignature" },
      ]
    },
  ];
  
  export default imageServices;