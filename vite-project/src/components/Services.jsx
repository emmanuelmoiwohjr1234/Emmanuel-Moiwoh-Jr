import { FaPalette, FaLaptopCode, FaMobile } from 'react-icons/fa'

const Services = () => {
  return (
    <div className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">My <span className="text-primary">Services</span></h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaPalette className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Web Design</h3>
            <p className="text-gray-600">
              Transform your digital presence with visually appealing and user-friendly designs.
              I specialize in creating responsive, modern websites that capture your brand's essence.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaLaptopCode className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Web Development</h3>
            <p className="text-gray-600">
              Full-stack web development solutions including custom web applications,
              dynamic websites, and robust backend systems.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <FaMobile className="text-4xl text-primary mb-4" />
            <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
            <p className="text-gray-600">
              Create powerful mobile applications that provide seamless experiences
              across all devices. Specializing in responsive and native app development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 