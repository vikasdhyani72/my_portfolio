import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { SiCodersrank } from 'react-icons/si'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const linkClass = ({ isActive }) =>
    `relative group transition font-medium ${
      isActive
        ? 'after:content-[""] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-400 text-blue-400 font-semibold'
        : 'text-white hover:text-blue-400'
    }`

  return (
    <header className="bg-gray-900 text-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link to={'/'}>
          <h1 className="text-3xl gap-3 flex font-bold">
            <SiCodersrank className="text-4xl text-blue-600" />
            <span className="bg-gradient-to-r from-blue-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Vikas Dhyani
            </span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            My Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact Me
          </NavLink>
          <NavLink to="/resume" className={linkClass}>
            My Resume
          </NavLink>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden relative">
          <button onClick={toggleMenu}>
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg p-4 z-50">
              <nav className="flex flex-col space-y-3">
                <NavLink to="/" className={linkClass} onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink to="/about" className={linkClass} onClick={toggleMenu}>
                  About
                </NavLink>
                <NavLink
                  to="/projects"
                  className={linkClass}
                  onClick={toggleMenu}
                >
                  My Projects
                </NavLink>
                <NavLink
                  to="/contact"
                  className={linkClass}
                  onClick={toggleMenu}
                >
                  Contact Me
                </NavLink>
                <NavLink
                  to="/resume"
                  className={linkClass}
                  onClick={toggleMenu}
                >
                  My Resume
                </NavLink>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
