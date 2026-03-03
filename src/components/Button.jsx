export default function Button({ href, children, variant = "primary" }) {
    const base =
        "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20";
    const styles =
        variant === "primary"
            ? "bg-white text-black hover:bg-white/90"
            : "border border-white/15 bg-white/5 text-white hover:bg-white/10";

    if (href) {
        return (
            <a className={`${base} ${styles}`} href={href} target="_blank" rel="noreferrer">
                {children}
            </a>
        );
    }
    return <button className={`${base} ${styles}`}>{children}</button>;
}