import { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Moiwoh Jr.
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              {/* Desktop menu items */}
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Contact
              </button>
              <a 
                href="/cv.pdf" 
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                download
              >
                Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

export default Navbar 