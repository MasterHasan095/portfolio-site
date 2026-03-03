import Button from "./Button";
import Badge from "./Badge";
import { PROFILE } from "../data/site";

export default function Hero() {
    return (
        <section id="top" className="relative min-h-[78vh] overflow-hidden pt-28">
            {/* Controlled neon glow */}
            <div className="neon-glow" aria-hidden="true" />
            {/* Readability overlay */}
            <div className="readability-overlay" aria-hidden="true" />

            <div className="relative mx-auto w-full max-w-5xl px-5 pb-16">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
                    <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
                    {PROFILE.location}
                </p>

                <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                    {PROFILE.name}
                </h1>

                <p className="mt-4 text-lg font-medium text-emerald-300 sm:text-xl">
                    {PROFILE.title}
                </p>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                    {PROFILE.tagline}
                </p>

                {/* quick proof = makes it feel less empty */}
                <div className="mt-6 flex flex-wrap gap-2">
                    <Badge>1+ year dev experience</Badge>
                    <Badge>Angular • React • Node</Badge>
                    <Badge>PostgreSQL • MongoDB</Badge>
                    <Badge>Docker • CI/CD</Badge>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Button href="#projects" variant="primary">
                        View Projects
                    </Button>
                    <Button href={`mailto:${PROFILE.email}`} variant="ghost">
                        Contact
                    </Button>
                    <Button href={PROFILE.github} variant="ghost">
                        GitHub
                    </Button>
                    <Button href={PROFILE.linkedin} variant="ghost">
                        LinkedIn
                    </Button>
                </div>

                {/* scroll cue */}
                <a
                    href="#projects"
                    className="mt-10 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"
                >
                    <span className="inline-block h-5 w-[1px] bg-white/30" />
                    Scroll to projects
                </a>
            </div>
        </section>
    );
}