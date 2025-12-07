import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './navbar/NavBar'
import Hero from './hero/Hero'
import About from './about/About'
import MyWork from './myWork/MyWork'
import Contact from './contact/Contact'
import Footer from './navbar/Footer'
const App = () => {
  return (
     (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<MyWork />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  ));
};

export default App
