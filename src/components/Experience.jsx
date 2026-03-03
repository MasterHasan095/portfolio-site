export default function Experience() {
    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-primary">Experience</h2>

            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold">Borderworx Logistics</h3>
                    <p className="text-gray-400">Software Developer Co-op</p>
                    <ul className="list-disc ml-6 mt-3 text-gray-400 space-y-2">
                        <li>Maintained production logistics systems used by 25+ staff.</li>
                        <li>Troubleshot API, database, and authentication issues.</li>
                        <li>Supported secure RBAC systems using Auth0.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Skill Squirrel</h3>
                    <p className="text-gray-400">Junior Programmer Intern</p>
                    <ul className="list-disc ml-6 mt-3 text-gray-400 space-y-2">
                        <li>Implemented features in agile environment.</li>
                        <li>Debugged and optimized existing modules.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}