const projects = [
    {
        title: "PathSense",
        desc: "Indoor navigation and event discovery system for Sheridan College. Team project led by me.",
        stack: "React Native, Node.js, MongoDB, Mapbox, AWS"
    },
    {
        title: "GetFixed IMS",
        desc: "Inventory & retail management system for live physical stores.",
        stack: "Angular, NestJS, PostgreSQL, Prisma, AWS"
    },
    {
        title: "AI First Responder",
        desc: "AI-powered emergency analysis system using ML pipelines.",
        stack: "Flutter, FastAPI, XGBoost, PyTorch"
    }
]

export default function Projects() {
    return (
        <section className="py-24 max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-primary">Featured Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((p, i) => (
                    <div key={i} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-primary transition">
                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                        <p className="text-gray-400 mb-3">{p.desc}</p>
                        <p className="text-sm text-primary">{p.stack}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}