import Section from "./Section";
import { EXPERIENCE } from "../data/site";

export default function Experience() {
    return (
        <Section
            id="experience"
            title="Experience"
            subtitle="A quick timeline of roles and the impact I delivered."
        >
            <div className="space-y-4">
                {EXPERIENCE.map((e) => (
                    <div
                        key={`${e.role}-${e.company}`}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <h3 className="text-base font-semibold text-white">{e.role}</h3>
                                <p className="text-sm text-white/70">
                                    {e.company} • {e.location}
                                </p>
                            </div>
                            <p className="text-sm text-white/50">{e.dates}</p>
                        </div>

                        <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/65">
                            {e.bullets.map((b) => (
                                <li key={b}>{b}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
}