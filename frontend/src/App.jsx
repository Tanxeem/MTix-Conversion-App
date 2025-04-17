import Navbar from "./components/Navbar"
import {Routes, Route} from 'react-router'
import Home from "../src/pages/Home"
import Login from "../src/pages/Login";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
