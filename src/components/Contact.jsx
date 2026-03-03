import Section from "./Section";
import Button from "./Button";
import { PROFILE } from "../data/site";

export default function Contact() {
    return (
        <Section
            id="contact"
            title="Contact"
            subtitle="Want to collaborate or hire? Send a message and I’ll reply quickly."
        >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm text-white/70">
                    Email me at{" "}
                    <a className="text-emerald-300 hover:underline" href={`mailto:${PROFILE.email}`}>
                        {PROFILE.email}
                    </a>{" "}
                    or connect on LinkedIn/GitHub.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                    <Button href={`mailto:${PROFILE.email}`} variant="primary">
                        Email
                    </Button>
                    <Button href={PROFILE.linkedin} variant="ghost">
                        LinkedIn
                    </Button>
                    <Button href={PROFILE.github} variant="ghost">
                        GitHub
                    </Button>
                </div>
            </div>
        </Section>
    );
}