import Section from "./Section";
import Badge from "./Badge";
import { SKILLS } from "../data/site";

export default function Skills() {
    return (
        <Section
            id="skills"
            title="Skills"
            subtitle="Tools and technologies I use to ship reliable web apps."
        >
            <div className="grid gap-4 sm:grid-cols-2">
                {SKILLS.map((s) => (
                    <div
                        key={s.group}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                        <h3 className="text-sm font-semibold text-white">{s.group}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {s.items.map((it) => (
                                <Badge key={it}>{it}</Badge>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
}