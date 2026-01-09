import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import MyWork from './components/myWork/MyWork'
import Contact from './components/contact/Contact'
import Footer from './components/navbar/Footer'

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
