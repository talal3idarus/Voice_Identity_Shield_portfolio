import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import halfLogo from '../assets/hafl_no_background.png'

const Navbar = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
  ]

  return (
    <>
      <nav className="bg-dark/80 border-b border-border/50 sticky top-0 z-50 backdrop-blur-md shadow-soft">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <img
                src={halfLogo}
                alt="Voice Identity Shield Logo"
                className="h-10 w-auto object-contain transition-transform group-hover:scale-105 duration-300"
              />
              <span className="text-xl font-heading font-semibold text-primary group-hover:text-accent transition-colors">
                Voice Identity Shield
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group px-3 py-2 rounded-xl transition-all duration-300"
                  >
                    <span
                      className={`text-sm font-medium transition-colors relative z-10 ${
                        isActive ? 'text-primary' : 'text-text-secondary group-hover:text-primary'
                      }`}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 bg-primary/10 rounded-xl"
                        layoutId="navbar-indicator"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    {!isActive && (
                      <span className="absolute inset-0 bg-primary/5 rounded-xl scale-0 group-hover:scale-100 transition-transform origin-center duration-300" />
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="md:hidden">
              <button className="text-text-primary p-2 rounded-xl hover:bg-card transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar

