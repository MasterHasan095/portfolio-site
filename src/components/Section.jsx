export default function Section({ id, title, subtitle, children }) {
    return (
        <section id={id} className="scroll-mt-24 py-16 sm:py-20">
            <div className="mx-auto w-full max-w-5xl px-5">
                {title && (
                    <div className="mb-8">
                        <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                            {title}
                        </h2>
                        {subtitle && (
                            <p className="mt-2 max-w-2xl text-sm text-white/70 sm:text-base">
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
}