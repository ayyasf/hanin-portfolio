import { useState, useContext } from "react"
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi"
import { ThemeContext } from "../../App"

const Navbar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ]

  return (
    <nav className="bg-white dark:bg-bgdark shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="text-2xl font-semibold text-myprimary dark:text-blue-400">
            Hanin
          </div>
          {/* Menu (Desktop) */}
          <ul className="hidden md:flex space-x-6 items-center text-gray-700 dark:text-gray-200 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-500"
                      : "text-black dark:text-white"
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Theme Toggle (Desktop - Icon at far right) */}
          <div className="hidden md:block">
            <button
              onClick={toggleTheme}
              className="text-xl text-gray-700 dark:text-gray-200">
              {theme === "dark" ? <FiSun size={33} /> : <FiMoon size={33} />}
            </button>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-700 dark:text-gray-200 hover:text-myprimary">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 text-gray-700 dark:text-gray-200 space-y-2">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-500"
                      : "text-black dark:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Theme Toggle */}
          <div className="flex items-center justify-between pt-2">
            <span className=" text-mysecondary  dark:text-white">Toggle Theme</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
              <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
          </div>
        </div>
      )}
    </nav>
  )
}
export default Navbar
