import './App.scss'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import Parallax from './components/parallax/Parallax'
import Services from './components/Services/Services'
import About from './components/About/About'
import Portfoilo from './components/portfolio/Portfoilo'
import Contact from './components/contact/Contact'
// import Cursor from './components/cursor/Cursor'

function App() {
  return (
    <div>
      {/* <Cursor/> */}
        <section id="Home">
          <Navbar />  
          <Hero />
        </section>
        <section id='About'><About/></section>
        <section id='Services'><Parallax type= "services" /></section>
        <section><Services /></section>
        <section id='Projects'><Parallax type= "portfolio" /></section>
        <Portfoilo/>

        <section id='Contact'><Contact/></section>
    </div>
  )
}

export default App
