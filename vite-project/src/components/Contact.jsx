import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        const errorData = await response.json()
        console.error('Server error:', errorData)
        setStatus('error')
      }
    } catch (error) {
      console.error('Connection error:', error)
      setStatus('connection-error')
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Need help? <span className="text-primary">Get in touch now!</span></h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="text-green-600">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600">Error sending message. Please try again.</p>
            )}
            {status === 'connection-error' && (
              <p className="text-red-600">
                Cannot connect to server. Please make sure the server is running and try again.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p>+231772987698/+231770512</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Email</h3>
              <p>emmanuelmoiwoh@gmail.com</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Address</h3>
              <p>Paynesville, Old-Road</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 