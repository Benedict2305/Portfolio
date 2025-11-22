import React from 'react'
// import Navbar from './navigation/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import MyWork from './myWork/MyWork'
import Contact from './contact/Contact'
import Footer from './navigation/Footer'
const App = () => {
  return (
    <div>
    {/* <Navbar /> */}
    <Hero />
    <About />
    <MyWork />
    <Contact />
    <Footer/>
    </div>
  )
}

export default App
