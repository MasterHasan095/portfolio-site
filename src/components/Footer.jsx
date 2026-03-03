import { PROFILE } from "../data/site";

export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-10">
            <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-white/50">
                    © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
                </p>
                <div className="flex gap-4 text-sm">
                    <a className="text-white/60 hover:text-white" href="#projects">Projects</a>
                    <a className="text-white/60 hover:text-white" href="#skills">Skills</a>
                    <a className="text-white/60 hover:text-white" href="#experience">Experience</a>
                    <a className="text-white/60 hover:text-white" href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}