import { PROFILE } from "../data/site";

const LINKS = [
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
                <a href="#top" className="text-sm font-semibold tracking-tight text-emerald-300">
                    {PROFILE.name}
                </a>

                <nav className="hidden items-center gap-6 sm:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="text-sm text-white/70 hover:text-white"
                        >
                            {l.label}
                        </a>
                    ))}
                    <a
                        href="/resume" // change if your resume route differs
                        className="text-sm text-white/70 hover:text-white"
                    >
                        Resume
                    </a>
                </nav>

                <a
                    href="#contact"
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10 sm:hidden"
                >
                    Contact
                </a>
            </div>
        </header>
    );
}