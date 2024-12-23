import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "HTML Project 1",
    category: "HTML",
    image: "/project1.jpg",
    description: "A responsive HTML-based website with modern design",
    link: "https://project1.com",
    technologies: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 2,
    title: "Periodic Table",
    category: "Tables",
    image: "/project2.jpg",
    description: "Interactive periodic table with detailed elements information",
    link: "https://periodictable.com",
    technologies: ["React", "TailwindCSS"]
  },
  {
    id: 3,
    title: "Contact Form",
    category: "Forms",
    image: "/project3.jpg",
    description: "Dynamic form with validation and submission handling",
    link: "https://contactform.com",
    technologies: ["React", "Node.js", "MongoDB"]
  }
]

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg mb-4"
        />

        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Technologies Used:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-6 py-2 rounded-lg inline-block hover:bg-primary/90 transition-colors"
        >
          View Project
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = ['All Projects', 'HTML', 'Tables', 'Forms']

  const filteredProjects = selectedCategory === 'All Projects'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory)

  return (
    <div className="bg-secondary py-20" id="projects">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-primary mb-2">Showcasing my development journey</p>
          <h2 className="text-3xl font-bold">My <span className="text-primary">Projects</span></h2>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="text-primary text-sm">{project.category}</span>
                  <h3 className="font-bold text-lg mt-2">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects 