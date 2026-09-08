
import Header1 from './components/mvpblocks/Navbar';
import Hero from './components/Hero';
import Services from './sections/Services';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Scrollup from './components/Scrollup';
import Footer from './sections/Footer';


const App = () => {
  return (
    <div className='w-full'>
      <section className="bg-[#F9F9F9]">
        <Header1 />
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="services" className="bg-[#F9F9F9]">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="experience" className="bg-[#F9F9F9]">
        <Experience />
      </section>
      <section id="contact">
        <Contact />
      </section>

      <section className="bg-gray-800 border-t border-blue-600 py-10 px-6">
        <Footer />
      </section>

      <div>
        <Scrollup />
      </div>
    </div>
  )
}

export default App