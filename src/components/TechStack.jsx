export default function TechStack() {
    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-primary">Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-400">
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Frontend</h3>
                    <p>React, Angular, React Native, Flutter, Tailwind</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Backend</h3>
                    <p>Node.js, NestJS, Spring Boot, FastAPI</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">Database</h3>
                    <p>PostgreSQL, MongoDB</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">DevOps</h3>
                    <p>AWS, Docker, GitHub Actions, Cloudflare</p>
                </div>
            </div>
        </section>
    )
}