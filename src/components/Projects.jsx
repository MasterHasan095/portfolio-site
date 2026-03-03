import Section from "./Section";
import Badge from "./Badge";
import Button from "./Button";
import { PROJECTS } from "../data/site";

export default function Projects() {
    return (
        <Section
            id="projects"
            title="Featured Projects"
            subtitle="A few things I’ve built recently. Each project focuses on practical business value and clean engineering."
        >
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {PROJECTS.map((p) => (
                    <div
                        key={p.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur"
                    >
                        <h3 className="text-base font-semibold text-white">{p.title}</h3>
                        <p className="mt-1 text-sm text-white/70">{p.subtitle}</p>
                        <p className="mt-3 text-sm leading-relaxed text-white/60">
                            {p.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                                <Badge key={s}>{s}</Badge>
                            ))}
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {p.live ? (
                                <Button href={p.live} variant="primary">
                                    Live
                                </Button>
                            ) : null}
                            {p.github ? (
                                <Button href={p.github} variant="ghost">
                                    GitHub
                                </Button>
                            ) : null}

                            {/* If you don't have links, show a placeholder button */}
                            {!p.live && !p.github ? (
                                <span className="text-xs text-white/40">
                  (Add Live/GitHub links in <code>src/data/site.js</code>)
                </span>
                            ) : null}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}