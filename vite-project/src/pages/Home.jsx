import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import SectionWrapper from '../components/SectionWrapper'

const Home = () => {
  return (
    <div className="bg-secondary">
      <SectionWrapper id="home">
        <Hero />
      </SectionWrapper>
      
      <SectionWrapper id="about">
        <About />
      </SectionWrapper>
      
      <SectionWrapper id="services">
        <Services />
      </SectionWrapper>
      
      <SectionWrapper id="projects">
        <Projects />
      </SectionWrapper>
      
      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>
    </div>
  )
}

export default Home 