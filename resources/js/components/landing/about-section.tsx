import { stats } from '@/components/landing/landing-data';

const corporateTopics = [
    {
        title: 'MARAWE Gruppe',
        body: 'Die Gruppe bündelt E-Commerce, Entwicklung, Abfüllung, Versand und Fachberatung für spezialisierte Anwendungen rund um Oberflächen, Edelmetalle und Bauchemie.',
    },
    {
        title: 'EU-Förderung',
        body: 'Förder- und Entwicklungsprojekte stehen für den Anspruch, Produkte und Prozesse stetig weiterzuentwickeln und den Standort Regensburg langfristig zu stärken.',
    },
    {
        title: 'Vertriebspartnerschaft',
        body: 'Für Händler, Fachanwender und internationale Partner bietet MARAWE markenübergreifende Zusammenarbeit, technische Beratung und klare Sortimentsstrukturen.',
    },
];

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
                        <p className="mt-4 text-white/70">
                            MARAWE verbindet die Marken Tifoo, Goldanalytix,
                            Tobolin und Walhalla-Chemie. Jede Marke ist
                            spezialisiert, aber alle profitieren von denselben
                            kurzen Wegen, demselben Service-Team und der
                            gemeinsamen Erfahrung in Entwicklung, Produktion und
                            Online-Handel.
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

                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {corporateTopics.map((topic) => (
                        <article
                            key={topic.title}
                            className="rounded-lg border border-white/10 bg-white/5 p-6"
                        >
                            <h3 className="font-display text-xl font-bold tracking-tight text-brand">
                                {topic.title}
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-white/70">
                                {topic.body}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
