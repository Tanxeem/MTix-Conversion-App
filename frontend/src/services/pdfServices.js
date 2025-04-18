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



export default pdfServices;