import './App.scss'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import React from 'react'
import Parallax from './components/parallax/Parallax'

function App() {
  return (
    <div>
        <section id="Home">
          <Navbar />  
          <Hero />
        </section>
        <section id='Services'><Parallax type= "services" /></section>
        <section>Services</section>
        <section id='Portfolio'><Parallax type= "portfolio" /></section>
        <section>Portfolio1</section>
        <section>Portfolio2</section>
        <section>Portfolio3</section>
        <section id='Contact'>Contact</section>
    </div>
  )
}

export default App
