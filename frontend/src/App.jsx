import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router'
import Home from "../src/pages/Home"
import Login from "../src/pages/Login";
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";
import FileProcessing from "./pages/FileProcessing ";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/learnmore' element={<LearnMore />} />
        <Route path="/:tool" element={<FileProcessing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
