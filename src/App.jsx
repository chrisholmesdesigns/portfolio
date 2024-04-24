import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { logo } from './assets/icons'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Footer from './components/Footer'
import Contact from './Pages/Contact'
import MoveSpring from './Pages/MoveSpring'
import Experian from './Pages/Experian'
import ScrollToTop from './utils/ScrollToTop'
import Catepillar from './Pages/Catepillar'
import EDS from './Pages/EDS'
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/MoveSpring" element={<MoveSpring></MoveSpring>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/Experian" element={<Experian></Experian>}></Route>
        <Route path="/Catepillar" element={<Catepillar></Catepillar>}></Route>
        <Route path="/EDS" element={<EDS></EDS>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
