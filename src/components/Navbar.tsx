import { Link, useLocation } from '@tanstack/react-router'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  const toggleDarkMode = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0F1A]/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section - LARGER with Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            {/* Logo Image - Larger size */}
            <img 
              src="/logo/alufusion-logo.png" 
              alt="867 ALUFUSION Logo" 
              className="h-14 w-auto object-contain transition-all duration-300 group-hover:scale-105"
              onError={(e) => {
                const img = e.target as HTMLImageElement
                img.style.display = 'none'
              }}
            />
            {/* Company Name Text */}
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-tight">
                867 <span className="text-primary">ALUFUSION</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider">We install your vision</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-300 hover:text-primary transition-colors duration-200 font-medium ${
                  location.pathname === link.path ? 'text-primary border-b-2 border-primary' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-300" />}
            </button>

            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors group">
              <Globe className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors" />
            </button>

            <Link to="/contact">
              <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary-darker text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/25">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10 mt-2 bg-[#0A0F1A]/95 backdrop-blur-md rounded-2xl my-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-colors ${
                  location.pathname === link.path ? 'text-primary bg-white/5' : ''
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 mt-2 border-t border-white/10 px-4">
              <button
                onClick={toggleDarkMode}
                className="flex-1 py-2.5 rounded-lg bg-white/10 text-white flex items-center justify-center gap-2"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {isDarkMode ? 'Light' : 'Dark'}
              </button>
              <Link to="/contact" className="flex-1" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}