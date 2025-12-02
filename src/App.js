import React from 'react'
// import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import About from './about/About'
import MyWork from './myWork/MyWork'
import Contact from './contact/Contact'
import Footer from './navbar/Footer'
import Nav from './navbar/Nav'
const App = () => {
  return (
    <div>
      <Nav />
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
