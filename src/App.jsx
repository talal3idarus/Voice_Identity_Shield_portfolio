import { BrowserRouter as Router, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'

function ScrollToTop() {
  const location = useLocation()

  useEffect(() => {
    // Always jump to top on route change unless an in-page anchor is present
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [location.pathname, location.hash])

  return null
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-dark">
        <Navbar />
        <main className="flex-grow bg-dark">
          <ScrollToTop />
          <PageTransition>
            <Home />
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

