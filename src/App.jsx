import { Routes, Route } from 'react-router-dom'

import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './pages/home/home';
import Contact from './pages/contactus/contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={"NOT FOUND!"} />
      </Routes>
      <Footer />
    </>
  )
}

export default App