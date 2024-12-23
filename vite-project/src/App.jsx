import { useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router'

function App() {
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
  }, [])

  return <RouterProvider router={router} />
}

export default App
