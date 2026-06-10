import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CareerSection() {
    return (
        <section id="karriere" className="bg-secondary py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div className="order-last lg:order-first">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                            alt="Team bei der Zusammenarbeit im Büro"
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-xl object-cover"
                        />
                    </div>
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                            Karriere bei MARAWE
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Innovation entsteht im Team.
                        </h2>
                        <p className="mt-6 text-muted-foreground">
                            Innovationen und Erfolge erreichen wir mit einem
                            hochmotivierten Team, das eigenverantwortlich und
                            ergebnisorientiert arbeitet. Ob Chemie, Logistik,
                            E-Commerce oder Marketing – bei uns gestalten Sie
                            mit.
                        </p>
                        <ul className="mt-6 flex flex-col gap-3 text-sm">
                            {[
                                'Eigenverantwortliches Arbeiten mit kurzen Entscheidungswegen',
                                'Moderner Arbeitsplatz am Standort Regensburg',
                                'Vielfältige Aufgaben zwischen Labor, Lager und Online-Handel',
                            ].map((item) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Button asChild size="lg" className="mt-8">
                            <a href="#kontakt">
                                Offene Stellen anfragen
                                <ArrowRight data-icon="inline-end" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
