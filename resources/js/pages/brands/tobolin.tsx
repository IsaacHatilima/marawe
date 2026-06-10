import {
    ArrowRight,
    BadgeEuro,
    Droplets,
    Gauge,
    Headset,
    Layers,
    ShieldCheck,
    Wrench,
} from 'lucide-react';
import type { ComponentType } from 'react';
import BrandLayout from '@/components/brands/brand-layout';
import { Button } from '@/components/ui/button';

interface Solution {
    icon: ComponentType<{ className?: string }>;
    title: string;
    body: string;
}

const solutions: Solution[] = [
    {
        icon: Layers,
        title: 'Horizontalsperre',
        body: 'Stoppt aufsteigende Feuchtigkeit im Mauerwerk per Injektionsverfahren – einfach selbst anzubringen, dauerhaft wirksam.',
    },
    {
        icon: ShieldCheck,
        title: 'Abdichtung von innen',
        body: 'Kapillarabdichtung für Keller- und Innenwände, wenn eine Abdichtung von außen nicht möglich oder zu aufwendig ist.',
    },
    {
        icon: Gauge,
        title: 'Feuchtemessung',
        body: 'Messgeräte und Methoden, mit denen Sie Feuchtigkeit im Mauerwerk zuverlässig lokalisieren und den Sanierungserfolg kontrollieren.',
    },
    {
        icon: Droplets,
        title: 'Pflasterpflege',
        body: 'Reinigung, Schutz und Pflege für Pflasterflächen – damit Einfahrten und Terrassen dauerhaft gepflegt bleiben.',
    },
];

const promises = [
    {
        icon: Wrench,
        title: 'Einfache Anwendung',
        body: 'Alle Produkte sind anwendungsbezogen und verständlich aufgebaut. Horizontalsperren und Systemlösungen bringen Sie unkompliziert und ohne viel Aufwand selbst an.',
    },
    {
        icon: BadgeEuro,
        title: 'Top Preis-Leistung',
        body: 'Wir verkaufen online direkt zum Endkunden und sind dadurch deutlich günstiger als aufwendige Dienstleistungen – bei bester Qualität, Made in Germany.',
    },
    {
        icon: Headset,
        title: 'Persönliche Beratung',
        body: 'Profitieren Sie von langjähriger wissenschaftlicher Erfahrung: Unser TÜV-zertifizierter Kundenservice berät Sie individuell und auf Ihr Anliegen zugeschnitten.',
    },
];

export default function Tobolin() {
    return (
        <BrandLayout
            name="TOBOLIN"
            field="Bauwerksabdichtung"
            title="Tobolin – Trockene Wände für ein gesundes Raumklima"
            description="Tobolin steht für zuverlässigen Feuchteschutz aus Deutschland: Horizontalsperren und Abdichtungssysteme gegen aufsteigende Feuchtigkeit im Mauerwerk."
            headerClass="bg-tobolin/90"
            accentClass="text-tobolin-accent"
            footer={{
                brandName: 'Tobolin',
                bgClass: 'bg-tobolin',
                accentClass: 'text-tobolin-accent',
                consultTitle: 'Persönliche Beratung',
                consultIntro: 'per Telefon, E-Mail & WhatsApp:',
                phone: '+49 (0)941 37847200',
                whatsapp: '+49 (0)159 01366514',
                email: 'tobolin@marawe.de',
                serviceLinks: [
                    { label: 'Kontakt', href: '/#kontakt' },
                    { label: 'Versand & Zahlung', href: '#' },
                    { label: 'Widerrufsrecht', href: '#' },
                    { label: 'Cookie-Einstellungen', href: '#' },
                    { label: 'Batterieverordnung', href: '#' },
                    { label: 'AGB', href: '#' },
                    { label: 'Stellenangebote', href: '/#karriere' },
                ],
                infoLinks: [
                    { label: 'Downloads', href: '#' },
                    { label: 'FAQ', href: '#' },
                    { label: 'Full Service Lohnhersteller', href: '#' },
                    { label: 'Über TOBOLIN & MARAWE', href: '/#ueber-uns' },
                    { label: 'Jobs & Karriere', href: '/#karriere' },
                    { label: 'Datenschutz', href: '#' },
                    { label: 'Impressum', href: '#' },
                ],
            }}
        >
            <section className="relative bg-tobolin text-white">
                <img
                    src="https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&w=1800&q=80"
                    alt="Geschwungene Ziegelfassade eines modernen Bauwerks"
                    className="absolute inset-0 size-full object-cover opacity-25"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tobolin via-tobolin/70 to-tobolin/40" />
                <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-24 lg:px-8 lg:pb-32">
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-tobolin-accent uppercase">
                        Tobolin · Eine Marke der MARAWE GmbH &amp; Co. KG
                    </p>
                    <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                        Trockene Wände für ein gesundes Raumklima.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
                        Mit der Tobolin-Horizontalsperre schützen Sie Ihr
                        Mauerwerk vor aufsteigender Feuchtigkeit und Schimmel –
                        einfach in der Anwendung, dauerhaft in der Wirkung.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-tobolin-accent text-white hover:bg-tobolin-accent/90"
                        >
                            <a href="#loesungen">
                                Zu den Lösungen
                                <ArrowRight data-icon="inline-end" />
                            </a>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                        >
                            <a
                                href="https://www.tobolin.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Zum Tobolin-Shop
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="bg-background py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="grid items-start gap-14 lg:grid-cols-2">
                        <div>
                            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin uppercase dark:text-tobolin-accent">
                                Unsere Philosophie
                            </p>
                            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                                Verantwortung beginnt mit nachhaltigem Schutz.
                            </h2>
                        </div>
                        <div className="flex flex-col gap-4 text-muted-foreground">
                            <p>
                                Wir bei Tobolin glauben, dass durch den Erhalt
                                und die Sanierung von Bausubstanz nachhaltiger
                                gewirtschaftet wird – und wir versuchen unseren
                                Teil dazu beizutragen: mit durchdachten
                                Produkten, langlebiger Wirkung und fairer
                                Herstellung in Deutschland.
                            </p>
                            <p>
                                Unser Schwerpunkt liegt auf der Entwicklung und
                                dem Vertrieb moderner Horizontalsperren-Systeme
                                gegen aufsteigende Feuchtigkeit sowie
                                Sanierungslösungen mit über 10 Jahren Erfahrung
                                – für Qualität, Vertrauen und Lösungen, die
                                wirklich funktionieren.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="loesungen" className="bg-secondary py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin uppercase dark:text-tobolin-accent">
                            Unsere Lösungen
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Systeme gegen Feuchtigkeit – vom Keller bis zum
                            Pflaster.
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {solutions.map((solution) => (
                            <article
                                key={solution.title}
                                className="rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg"
                            >
                                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-tobolin text-white">
                                    <solution.icon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </span>
                                <h3 className="font-display text-lg font-bold tracking-tight">
                                    {solution.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {solution.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-tobolin py-24 text-white lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 max-w-2xl">
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin-accent uppercase">
                            Was wir versprechen
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                            Mit uns schützen Sie Ihre Immobilie vor Feuchtigkeit
                            – dauerhaft und effektiv.
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {promises.map((promise) => (
                            <article
                                key={promise.title}
                                className="rounded-xl border border-white/10 bg-white/5 p-6 lg:p-8"
                            >
                                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-tobolin-accent text-white">
                                    <promise.icon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </span>
                                <h3 className="font-display text-lg font-bold tracking-tight">
                                    {promise.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">
                                    {promise.body}
                                </p>
                            </article>
                        ))}
                    </div>
                    <p className="mt-12 text-sm text-white/60">
                        Tobolin steht für zuverlässigen Feuchteschutz aus
                        Deutschland – TÜV-zertifizierter Kundenservice, TOBOLIN
                        ist eine Marke der MARAWE-Gruppe.
                    </p>
                </div>
            </section>
        </BrandLayout>
    );
}
