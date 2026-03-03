export default function Background() {
    return (
        <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f13] via-[#111827] to-[#0f0f13]" />
            <div className="absolute w-[500px] h-[500px] bg-primary opacity-10 rounded-full blur-3xl top-20 left-20 animate-pulse" />
        </div>
    )
}