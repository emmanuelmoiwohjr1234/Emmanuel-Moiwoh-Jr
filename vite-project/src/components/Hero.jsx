import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { ReactTyped } from "react-typed";
import heroPic from '../assets/picture/hero pic.png'
import diamondIcon from '../assets/picture/value.gif'
import crownIcon from '../assets/picture/value.gif'
import paletteIcon from '../assets/picture/value.gif'

const Hero = () => {
  return (
    <div className="bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section - First on mobile */}
          <div className="relative order-1 md:order-2">
            <div className="relative">
              <img
                src={heroPic}
                alt="Emmanuel Moiwoh"
                className="w-full max-w-md mx-auto"
              />
              {/* Decorative elements */}
              <img src={diamondIcon} alt="Diamond" className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary/20 rounded-full"></img>
              <img src={diamondIcon} alt="Diamond" className="absolute -top-4 -left-4 w-16 h-16 bg-blue-400/20 rounded-full"></img>
            </div>
          </div>

          {/* Content Section - Second on mobile */}
          <div className="order-2 md:order-1">
            <p className="text-dark mb-4">I'M GLAD YOU'RE HERE</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi 👋, I'm Emmanuel Moiwoh Jr.A{' '}
              <span>
                <ReactTyped
                  strings={[
                    "Web Designer",
                    "Web Developer",
                    "Mobile Developer"
                  ]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                  className="text-primary"
                />
              </span>
            </h1>
            
            <p className="text-gray-600 mb-8 mt-4">
              I'm passionate about creating user-friendly designs and functional
              interfaces. With expertise in both design and development, I bring a
              unique perspective to every project. Let's collaborate on something
              great!
            </p>

            <img 
              src={diamondIcon} 
              alt="Diamond" 
              className="w-8 h-8 mb-8"
            />

            <div>
              <p className="text-gray-700 mb-4">FIND WITH ME</p>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <FaFacebook className="text-2xl text-primary" />
                </a>
                <a 
                  href="#" 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <FaInstagram className="text-2xl text-primary" />
                </a>
                <a 
                  href="#" 
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <FaWhatsapp className="text-2xl text-primary" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 