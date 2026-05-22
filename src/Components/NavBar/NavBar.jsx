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
    <nav className="fixed top-0 w-full z-[9999] bg-white dark:bg-bgdark shadow-md overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo */}
          <div className="text-2xl font-semibold text-myprimary dark:text-blue-400 shrink-0">
            Hanin
          </div>
          {/* Menu (Desktop) */}
          <ul className="hidden md:flex items-center justify-center w-full gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className={`px-2 text-lg font-medium transition ${
                    activeSection === link.href.replace("#", "")
                      ? "text-blue-500"
                      : "text-black dark:text-white"
                  }`}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Theme Toggle */}
          <div className="hidden md:block shrink-0">
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
              className="w-10 h-10 flex items-center justify-center text-2xl text-gray-700 dark:text-gray-200 hover:text-myprimary z-[9999]">
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
    <div className={`md:hidden fixed inset-0 top-16 z-[9998] transition-all duration-300 ease-in-out ${
    menuOpen ? "opacity-100 pointer-events-auto translate-y-0"
        : "opacity-0 pointer-events-none -translate-y-4" }`}>
         {/* Backdrop */}
        <div className="absolute inset-0 bg-white/90 dark:bg-gray-950/ backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}/>
         {/* Menu Content */}
        <div className="relative flex flex-col h-full px-6 pt-8 pb-12">
            <ul className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                <li key={index}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`group flex items-center justify-between py-4 border-b border-gray-100 dark:border-gray-800 transition-all duration-200 ${
                    activeSection === link.href.replace("#", "")
                    ? "text-blue-500"
                    : "text-gray-800 dark:text-gray-100"}`}>
                    <span className="text-lg font-semibold tracking-tight group-hover:translate-x-2 transition-transform duration-200">
                    {link.label}
                  </span>
                </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex items-center justify-between pt-2">
            <span className="text-mysecondary dark:text-white">Toggle Theme</span>
            <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only peer"/>
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:bg-gray-600 rounded-full peer peer-checked:bg-blue-500 transition-all duration-300"></div>
                  <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
            </label>
        </div>
      </div>
    </div>
  </nav>
  )
}
export default Navbar
