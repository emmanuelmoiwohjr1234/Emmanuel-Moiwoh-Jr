import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { useState } from 'react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setStatus('error')
    }
  }

  return (
    <footer className="bg-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary">About Me</a></li>
              <li><a href="#" className="hover:text-primary">Project</a></li>
              <li><a href="#" className="hover:text-primary">Contact Me</a></li>
              <li><a href="#" className="hover:text-primary">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Paynesville, Old-Road</li>
              <li>Highway, Monrovia</li>
              <li>+231772987698/+231770512</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Let's Make Consultation With Us!</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <button 
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Email'}
              </button>
              {status === 'success' && (
                <p className="text-green-400">Subscription successful!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400">Error subscribing. Please try again.</p>
              )}
            </form>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-12">
          <a href="#" className="text-white hover:text-primary">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-primary">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="#" className="text-white hover:text-primary">
          <FaWhatsapp className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer 