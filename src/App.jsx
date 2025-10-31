import { createContext, useState } from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./assets/Pages/MainPage"
import Footer from "./Components/Footer/Footer"
import NavBar from "./Components/NavBar/NavBar"
import ProjectDetails from "./assets/Pages/ProjectDetails "

export const ThemeContext = createContext()
function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    const  [activeSection, setActiveSection] = useState("home")
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light"
            setTheme(newTheme)
            localStorage.setItem("theme" , newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className={`font-sans ${theme === "dark" ? "dark" : ""}`}>
            <NavBar activeSection={activeSection} />
            <Routes>
                <Route path="/" element={<MainPage setActiveSection={setActiveSection}  />}/>
                <Route path="/projectdetails/:id" element={<ProjectDetails />}/>
            </Routes>
            <Footer />
        </div>
    </ThemeContext.Provider>
    )
}

export default App