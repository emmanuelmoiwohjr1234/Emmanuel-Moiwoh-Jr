import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

const Layout = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <ScrollToTop />
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout 