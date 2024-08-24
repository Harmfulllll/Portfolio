import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'

function App() {
  return (
    <>
        <section id='home'>
            <Navbar />
            <Hero />
        </section>
        <section id='skills'>
            <Skills />
        </section>
        <section id='projects'>
            <Projects />
        </section>
        <section 
         id='about'
        >
            <About />
        </section>
        <section id='contact'>
            <Contact />
        </section>
    </>
  )
}

export default App
