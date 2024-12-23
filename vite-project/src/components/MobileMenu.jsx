import { motion, AnimatePresence } from 'framer-motion'

const MobileMenu = ({ isOpen, onClose, scrollToSection }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
          />
          
          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-64 bg-white z-50 md:hidden"
          >
            <div className="p-5">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="mt-8 space-y-4">
                <button 
                  onClick={() => {
                    scrollToSection('home')
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('about')
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  About Me
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('services')
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  Services
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('projects')
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  Projects
                </button>
                <button 
                  onClick={() => {
                    scrollToSection('contact')
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50"
                >
                  Contact
                </button>
                <a 
                  href="/cv.pdf" 
                  download
                  className="block w-full text-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Download CV
                </a>
              </nav>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu 