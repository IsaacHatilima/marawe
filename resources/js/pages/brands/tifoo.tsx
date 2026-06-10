import {
    ArrowRight,
    Droplets,
    Hourglass,
    Layers,
    Paintbrush,
    Sparkles,
    Zap,
} from 'lucide-react';
import type { ComponentType } from 'react';
import BrandLayout from '@/components/brands/brand-layout';
import { tifooTopnavOptions } from '@/components/topnav/topnav-options';
import { Button } from '@/components/ui/button';

interface Category {
    icon: ComponentType<{ className?: string }>;
    title: string;
    body: string;
    image: string;
}

const categories: Category[] = [
    {
        icon: Paintbrush,
        title: 'Eloxieren',
        body: 'Mit unseren Eloxalprodukten lassen sich Kleinteile wie Werkzeuge, Hifi- oder Fahrradteile aus Aluminium farbig eloxieren. Durch elektrolytische Oxidation entsteht eine Schutzschicht, die sich färben lässt.',
        image: '/tifoo/eloxieren.webp',
    },
    {
        icon: Zap,
        title: 'Galvanisieren',
        body: 'Mit unseren Galvanik-Sets und Elektrolyten selbst vergolden und versilbern: Stift-, Bad- oder Tampongalvanik mit Metallen wie Platin, Gold, Silber, Kupfer und Zink – für Schmuck, Werkstücke und mehr.',
        image: '/tifoo/galvanisieren.webp',
    },
    {
        icon: Layers,
        title: 'Brünieren',
        body: 'Unsere Brünierverfahren ermöglichen es, Objekte aus niedriglegiertem Stahl sowie Edelstahl und Aluminium mit einer edlen, schwarzen Brünierschicht zu versehen.',
        image: '/tifoo/bruenieren.webp',
    },
    {
        icon: Hourglass,
        title: 'Patinieren',
        body: 'Erzeugen Sie auf Kupfer, Messing, Bronze oder Silber in kürzester Zeit edle Alterungseffekte, die auf natürlichem Weg Jahre dauern würden – ganz ohne großen Aufwand.',
        image: '/tifoo/patinieren.webp',
    },
    {
        icon: Sparkles,
        title: 'Stromlos beschichten',
        body: 'Buntmetalle ohne Zubehör vergolden oder versilbern, Zink mit Chromatierungen schützen und mit Leitlacken echte Metalloberflächen erzeugen – ganz ohne Stromquelle.',
        image: '/tifoo/stromlos_beschichten.webp',
    },
    {
        icon: Droplets,
        title: 'Vor- & Nachbehandlung',
        body: 'Für eine erfolgreiche Beschichtung ist die saubere, gleichmäßige Vor- und Nachbehandlung essenziell. Je besser die Oberfläche vorbereitet ist, desto besser das Endergebnis.',
        image: '/tifoo/nachbehandlung.webp',
    },
];

const tifooSupportHighlights = [
    'Kundensupport (DE + EN)',
    'Kostenlose Lieferung ab 200 € (DE)',
    'Sichere Zahlung',
    'Deutsch · English · Français · Italiano',
];

export default function Tifoo() {
    return (
        <BrandLayout
            title="Tifoo – Metallveredelung DIY: Galvanik, Eloxieren, Brünieren & mehr"
            description="Tifoo bietet Produkte für Oberflächenbeschichtung und Metallveredelung im Do-it-yourself-Verfahren: Galvanisieren, Eloxieren, Brünieren, Patinieren und mehr."
            headerClass="bg-tifoo/90"
            accentClass="text-tifoo-accent"
            topnav={tifooTopnavOptions}
            footer={{
                brandName: 'Tifoo',
                logo: '/tifoo/tifoo_logo.svg',
                bgClass: 'bg-tifoo',
                accentClass: 'text-tifoo-accent',
                consultTitle: 'Produktberatung',
                consultIntro:
                    'Technischer Support und Bestellungen per Telefon und E-Mail:',
                phone: '+49 941 378 472 00',
                email: 'tifoo@marawe.de',
                serviceLinks: [
                    { label: 'Kontakt', href: '/#kontakt' },
                    { label: 'Versand & Zahlung', href: '#' },
                    { label: 'Widerrufsrecht', href: '#' },
                    { label: 'AGB', href: '#' },
                    { label: 'Cookie-Einstellungen', href: '#' },
                ],
                infoLinks: [
                    { label: 'Full Service Lohnhersteller', href: '#' },
                    { label: 'MARAWE-Gruppe', href: '/#ueber-uns' },
                    { label: 'Jobs & Karriere', href: '/#karriere' },
                    { label: 'Datenschutz', href: '#' },
                    { label: 'Impressum', href: '#' },
                ],
            }}
        >
            <section className="relative bg-tifoo text-white">
                <img
                    src="https://www.tifoo.de/media/70/04/8b/1684693866/galvanisieren-badgalvanik-silberelektrolyt.webp"
                    alt="Tifoo Oberflächenveredelung und Metallbearbeitung"
                    className="absolute inset-0 size-full object-cover opacity-35"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-tifoo via-tifoo/80 to-tifoo/40" />
                <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 px-6 pt-40 pb-24 lg:grid-cols-[minmax(0,1fr)_24rem] lg:px-8 lg:pb-32">
                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-tifoo-accent uppercase">
                            Tifoo · Eine Marke der MARAWE GmbH &amp; Co. KG
                        </p>
                        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                            Metallveredelung DIY: Galvanik, Eloxieren, Brünieren
                            &amp; mehr!
                        </h1>
                        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
                            Produkte für Oberflächenbeschichtung und
                            Metallveredelung im Do-it-yourself-Verfahren – für
                            alle, die Oberflächen selbst veredeln, verschönern
                            oder beschichten wollen.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <Button
                                asChild
                                size="lg"
                                className="bg-tifoo-accent text-tifoo hover:bg-tifoo-accent/90"
                            >
                                <a href="#sortiment">
                                    Sortiment entdecken
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
                                    href="https://www.tifoo.de/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Zum Tifoo-Shop
                                </a>
                            </Button>
                        </div>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-white/10 p-5 shadow-float backdrop-blur-md">
                        <p className="text-xs font-semibold tracking-[0.2em] text-tifoo-accent uppercase">
                            DIY bis Gewerbe
                        </p>
                        <p className="mt-3 font-display text-2xl font-bold tracking-tight">
                            Zuhause selbst beschichten – egal ob Lieblingsstück oder Arbeitsmaterial!
                        </p>
                        <dl className="mt-6 grid grid-cols-3 gap-3 text-center">
                            {['6 Verfahren', '4 Sprachen', 'ab 200 € frei'].map(
                                (item) => (
                                    <div
                                        key={item}
                                        className="rounded-md bg-white/10 px-3 py-4"
                                    >
                                        <dt className="text-[11px] font-semibold text-white/65 uppercase">
                                            Service
                                        </dt>
                                        <dd className="mt-1 text-sm font-bold text-tifoo-accent">
                                            {item}
                                        </dd>
                                    </div>
                                ),
                            )}
                        </dl>
                    </div>
                </div>
            </section>

            <section className="border-y-4 border-tifoo-accent bg-tifoo text-white">
                <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
                    {tifooSupportHighlights.map((highlight) => (
                        <div
                            key={highlight}
                            className="rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold text-white/80"
                        >
                            {highlight}
                        </div>
                    ))}
                </div>
            </section>

            <section id="sortiment" className="bg-background py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tifoo uppercase dark:text-tifoo-accent">
                            Unser Sortiment
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Tauchen Sie jetzt ein in die spannende Welt der Oberflächenbeschichtung!
                        </h2>
                        <p className="mt-4 text-muted-foreground">
                            Galvanik, Brünieren, Patinieren und Eloxieren für
                            unterschiedlichste Erfahrungsstufen – für
                            Gewerbekunden ebenso wie für Einsteiger, Bastler und
                            Künstler.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((category) => (
                            <article
                                key={category.title}
                                className="group overflow-hidden rounded-xl border border-border/80 bg-card transition-shadow hover:shadow-float"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-tifoo/70 to-transparent" />
                                    <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-md bg-tifoo text-tifoo-accent shadow-float">
                                        <category.icon
                                            className="size-5"
                                            aria-hidden
                                        />
                                    </span>
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-xl font-bold tracking-tight">
                                        {category.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {category.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-secondary py-24 lg:py-32">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tifoo uppercase dark:text-tifoo-accent">
                            Unsere Aufgabe
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Metallveredelung DIY – zuhause selbst beschichten.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 text-muted-foreground">
                        <p>
                            Unsere Aufgabe ist es, Produkte für
                            Oberflächenbeschichtung und Metallveredelung in
                            Do-It-Yourself-Verfahren für alle diejenigen zur
                            Verfügung zu stellen, die Oberflächen veredeln oder
                            beschichten wollen. Diese speziellen Verfahren zur
                            Oberflächenbehandlung werden üblicherweise nur
                            durch industrielle Fertigungsprozesse oder
                            Dienstleistungen ermöglicht – ein Umstand, an dem
                            wir etwas ändern wollen.
                        </p>
                        <p>
                            Aus diesem Grund bieten wir die passenden Produkte
                            an, mithilfe derer Sie zuhause selbst beschichten
                            können – egal ob Lieblingsstück oder
                            Arbeitsmaterial!
                        </p>
                    </div>
                </div>
            </section>

            <section className="border-y-4 border-tifoo-accent bg-tifoo text-white">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:text-left lg:px-8">
                    <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold tracking-tight text-tifoo-accent sm:text-3xl">
                            Perfekte Vor- und Nachbehandlung
                        </h2>
                        <p className="mt-1 text-sm text-white/85 sm:text-base">
                            Für einfache, schnelle und dekorative Ergebnisse sorgt unsere Kategorie „Stromlos Beschichten“ – mit passenden Produkten zur Vor- und Nachbehandlung im Shop.
                        </p>
                    </div>
                    <Button
                        asChild
                        size="lg"
                        className="bg-tifoo-accent text-tifoo hover:bg-tifoo-accent/90"
                    >
                        <a
                            href="https://www.tifoo.de/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jetzt im Shop stöbern
                            <ArrowRight data-icon="inline-end" />
                        </a>
                    </Button>
                </div>
            </section>
        </BrandLayout>
    );
}
