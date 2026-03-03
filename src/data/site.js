export const PROFILE = {
    name: "Hasan Master",
    title: "Full Stack Engineer — Software Developer",
    location: "Malton — Mississauga, ON, Canada",
    tagline:
        "I build scalable systems that bridge business strategy with engineering execution.",
    github: "https://github.com/masterhasan095",
    linkedin: "https://www.linkedin.com/in/your-linkedin/", // change this
    email: "masterhasan095@gmail.com", // change if needed
};

export const PROJECTS = [
    {
        title: "PathSense",
        subtitle: "Indoor navigation + event discovery for campus",
        description:
            "Designed a campus navigation experience with map layers and structured location data for faster wayfinding.",
        stack: ["React Native", "Node.js", "MongoDB", "Mapbox"],
        live: "", // optional
        github: "", // optional
    },
    {
        title: "GetFixed IMS",
        subtitle: "Inventory + sales workflow for retail operations",
        description:
            "Built modules for tracking products, stock movement, and role-based workflows for staff.",
        stack: ["Angular", "NestJS", "PostgreSQL", "Prisma"],
        live: "",
        github: "",
    },
    {
        title: "Borderworx Internal Support Tools",
        subtitle: "Troubleshooting + system reliability improvements",
        description:
            "Supported internal logistics systems and resolved API, DB, and auth issues to keep operations running.",
        stack: ["Angular", "REST APIs", "PostgreSQL", "Auth"],
        live: "",
        github: "",
    },
];

export const SKILLS = [
    { group: "Frontend", items: ["Angular", "React", "Tailwind CSS", "TypeScript"] },
    { group: "Backend", items: ["Node.js", "NestJS", "Express", "REST APIs", "JWT/Auth"] },
    { group: "Data", items: ["PostgreSQL", "MongoDB", "Prisma", "Sequelize"] },
    { group: "DevOps", items: ["Docker", "CI/CD (GitHub Actions)", "AWS basics"] },
];

export const EXPERIENCE = [
    {
        role: "Software Developer Co-op",
        company: "Borderworx Logistics",
        location: "Mississauga, ON",
        dates: "Sep 2024 — Dec 2025",
        bullets: [
            "Provided application + technical support for internal logistics systems used by 25+ operations staff.",
            "Troubleshot API, database, and authentication issues to maintain system uptime.",
            "Monitored logs, resolved user-reported issues, and collaborated with operations on fixes.",
            "Assisted deployment/maintenance of Dockerized PostgreSQL environments.",
        ],
    },
    {
        role: "Junior Programmer Intern",
        company: "Skill Squirrel",
        location: "Mississauga, ON",
        dates: "Jan 2024 — Apr 2024",
        bullets: [
            "Built and maintained features across frontend + backend components.",
            "Collaborated with team members to ship improvements and fix bugs quickly.",
        ],
    },
];