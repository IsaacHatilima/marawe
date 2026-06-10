import { stats } from '@/components/landing/landing-data';

export default function AboutSection() {
    return (
        <section id="ueber-uns" className="bg-ink py-24 text-white lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                            Über MARAWE
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Chemie mit Handschrift – aus Regensburg in die Welt.
                        </h2>
                        <p className="mt-6 text-white/70">
                            Was als Spezialist für Oberflächenveredelung begann,
                            ist heute ein Markenverbund für anspruchsvolle
                            Chemie- und Prüftechnik. Entwicklung, Abfüllung und
                            Versand erfolgen am Standort Regensburg – kurze
                            Wege, geprüfte Qualität und persönliche Fachberatung
                            inklusive.
                        </p>
                        <p className="mt-4 text-white/70">
                            Unser Anspruch: Produkte, die im Labor bestehen und
                            in der Praxis überzeugen – ob in der Industrie, im
                            Handwerk oder in der heimischen Werkstatt.
                        </p>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
                            alt="Ingenieurin bei der Arbeit im Labor"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-xl object-cover"
                        />
                        <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-brand px-6 py-5 text-white shadow-lg sm:block">
                            <p className="font-display text-3xl font-bold">
                                Made in
                            </p>
                            <p className="text-sm font-semibold tracking-wide uppercase">
                                Regensburg
                            </p>
                        </div>
                    </div>
                </div>

                <dl className="mt-24 grid grid-cols-2 gap-8 border-t border-white/10 pt-12 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <dt className="order-last mt-2 text-sm text-white/60">
                                {stat.label}
                            </dt>
                            <dd className="font-display text-4xl font-bold text-brand sm:text-5xl">
                                {stat.value}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
}
