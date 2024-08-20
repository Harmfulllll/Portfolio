import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About/About'

function App() {
  return (
    <>
        <section id='home'>
            <Navbar />
            <Hero />
        </section>
        <section 
         id='about'
        >
            <About />
        </section>
        <section>Contact</section>
    </>
  )
}

export default App
