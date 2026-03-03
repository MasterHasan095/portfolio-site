export default function Navbar() {
    return (
        <nav className="fixed w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
                <h1 className="font-bold text-primary">Hasan Master</h1>
                <a href="/hasanmaster.pdf" className="hover:text-primary">Resume</a>
            </div>
        </nav>
    )
}