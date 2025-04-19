import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router'
import Home from "../src/pages/Home"
import Footer from "./components/Footer";
import LearnMore from "./components/LearnMore";
import FileProcessing from "./pages/FileProcessing ";
import Signup from "./components/Signup";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path='/learnmore' element={<LearnMore />} />
        <Route path="/:tool" element={<FileProcessing />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
