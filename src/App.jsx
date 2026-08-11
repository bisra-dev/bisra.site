import React from 'react'
import Header1 from './components/mvpblocks/Navbar';
import Hero from './components/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Scrollup from './components/Scrollup';
import Footer from './sections/Footer';


const App = () => {
  return (
    <div>
      <div className="bg-hero bg-cover bg-no-repeat bg-top-right w-full relative min-h-screen overflow-x-hidden">
        <Header1 />
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="contact">
          <Contact />
        </section>

        <section className="bg-black border-t border-blue-600 py-10 px-6">
          <Footer />
        </section>

        <div>
          <Scrollup />
        </div>
      </div>
    </div>
  )
}

export default App