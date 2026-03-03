import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import TechStack from "./components/TechStack.jsx"
import Contact from "./components/Contact"
import Background from "./components/Background"

export default function App() {
    return (
        <div className="relative overflow-x-hidden">
            <Background />
            <Navbar />
            <Hero />
            <Projects />
            <Experience />
            <TechStack />
            <Contact />
        </div>
    )
}