import {
    ArrowRight,
    CalendarDays,
    Coins,
    Gem,
    Magnet,
    PenLine,
    ScanLine,
    Scale,
} from 'lucide-react';
import type { ComponentType } from 'react';
import BrandLayout from '@/components/brands/brand-layout';
import { Button } from '@/components/ui/button';

interface Product {
    icon: ComponentType<{ className?: string }>;
    name: string;
    body: string;
}

const products: Product[] = [
    {
        icon: PenLine,
        name: 'CaratScreenPen',
        body: 'Bestimmt schnell, einfach und zerstörungsfrei den Goldgehalt von Schmuck – direkt am Objekt, ohne Säure und ohne Beschädigung.',
    },
    {
        icon: ScanLine,
        name: 'GoldScreenSensor',
        body: 'Prüft die Echtheit von Edelmetallbarren und -münzen von 1 bis 100 g und erkennt gängige Fälschungen – ideal für private Investoren und Händler.',
    },
    {
        icon: Gem,
        name: 'GoldScreenPen',
        body: 'Misst die Leitfähigkeit und damit die Echtheit von Barren und Münzen von 1 bis 27 Gramm – kompakt und sekundenschnell.',
    },
    {
        icon: Magnet,
        name: 'MagneticScreenScale',
        body: 'Die Magnetwaage erkennt schnell und zerstörungsfrei Wolframkerne und andere Fälschungen in Barren und Münzen.',
    },
    {
        icon: Scale,
        name: 'Prüfsteine & Säuren',
        body: 'Probiersteine für die zuverlässige, klassische Echtheitsprüfung von Gold, Silber und Platin – bewährt seit Generationen.',
    },
    {
        icon: Coins,
        name: 'BarScreenSensor',
        body: 'Das wichtigste Messgerät, um Goldbarren und andere Edelmetallbarren auch in Schutzverpackung auf Echtheit zu testen.',
    },
];

const guides = [
    {
        title: 'Gold testen',
        body: 'Unterscheiden Sie selbst echtes Gold von billigen Fälschungen – alle Methoden zur Echtheitsprüfung von Gold im Überblick.',
    },
    {
        title: 'Silber testen',
        body: 'Schützen Sie sich vor Betrug: Wir zeigen Ihnen, wie Sie Silberbarren, -münzen und -schmuck sicher identifizieren.',
    },
    {
        title: 'Über Goldanalytix',
        body: 'Edelmetall-Prüfgeräte der neuesten Generation: hochwertige Technik, Expertise und Beratung – Made in Germany.',
    },
];

export default function Goldanalytix() {
    return (
        <BrandLayout
            name="GOLDANALYTIX"
            field="Edelmetallprüfung"
            title="Goldanalytix – Gold und Silber zuverlässig auf Echtheit prüfen"
            description="Goldanalytix bietet einfach bedienbare und schnell messende Prüfgeräte für Gold, Silber und Platin – für Händler, Banken, Juweliere und Privatinvestoren."
            headerClass="bg-ink/90"
            accentClass="text-glx"
            footer={{
                brandName: 'Goldanalytix',
                bgClass: 'bg-ink',
                accentClass: 'text-glx',
                consultTitle: 'Produktberatung',
                consultIntro:
                    'Technischer Support und Bestellungen per Telefon und E-Mail:',
                phone: '+49 941 378 472 00',
                email: 'gold-analytix@marawe.de',
                showNewsletter: true,
                serviceLinks: [
                    { label: 'Kontakt', href: '/#kontakt' },
                    { label: 'AGB', href: '#' },
                    { label: 'Versand und Zahlung', href: '#' },
                    { label: 'Widerrufsrecht', href: '#' },
                    { label: 'Datenschutz', href: '#' },
                    { label: 'Impressum', href: '#' },
                    { label: 'Seminar-Anmeldung', href: '#' },
                ],
                infoLinks: [
                    { label: 'Bedienungsanleitungen', href: '#' },
                    { label: 'Erkennung von Goldfälschungen', href: '#' },
                    {
                        label: 'Über Goldanalytix & MARAWE',
                        href: '/#ueber-uns',
                    },
                    { label: 'Jobs & Karriere', href: '/#karriere' },
                ],
            }}
        >
            <section className="relative bg-ink text-white">
                <img
                    src="https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=1800&q=80"
                    alt="Gestapelte Goldbarren"
                    className="absolute inset-0 size-full object-cover opacity-30"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
                <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-24 lg:px-8 lg:pb-32">
                    <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-glx uppercase">
                        Goldanalytix · Eine Marke der MARAWE GmbH &amp; Co. KG
                    </p>
                    <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                        Prüfen Sie Gold und Silber schnell, einfach und
                        zuverlässig auf Echtheit.
                    </h1>
                    <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
                        Einfach bedienbare und schnell messende Prüfgeräte für
                        Gold, Silber und Platin. So erkennen Edelmetallhändler,
                        Pfandleiher, Banken, Juweliere und Privatinvestoren die
                        häufigen Fälschungen von Barren, Münzen und Schmuck.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="bg-glx text-ink hover:bg-glx/90"
                        >
                            <a href="#sortiment">
                                Prüfgeräte entdecken
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
                                href="https://www.gold-analytix.de/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Zum Goldanalytix-Shop
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="border-y-4 border-ink bg-glx text-ink">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-8">
                    <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-glx">
                        <CalendarDays className="size-7" aria-hidden />
                    </span>
                    <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold tracking-tight">
                            Seminar Edelmetallprüfung
                        </h2>
                        <p className="mt-1 text-sm font-medium text-ink/80">
                            Lernen Sie die Echtheitsprüfung von Gold und Silber
                            von unseren Experten – regelmäßige Termine in
                            Stuttgart und Offenbach.
                        </p>
                    </div>
                    <Button asChild size="lg" variant="secondary">
                        <a href="#kontakt">Jetzt anmelden</a>
                    </Button>
                </div>
            </section>

            <section id="sortiment" className="bg-background py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-2xl">
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gold-deep uppercase dark:text-glx">
                            Unsere Prüfgeräte
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Zerstörungsfrei prüfen. Sicher investieren.
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <article
                                key={product.name}
                                className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-lg lg:p-8"
                            >
                                <span className="mb-5 flex size-12 items-center justify-center rounded-lg bg-glx text-ink">
                                    <product.icon
                                        className="size-6"
                                        aria-hidden
                                    />
                                </span>
                                <h3 className="font-display text-xl font-bold tracking-tight">
                                    {product.name}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {product.body}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-ink py-24 text-white lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-12 text-center">
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                            Gold und Silber selbst zuverlässig testen!
                        </h2>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {guides.map((guide) => (
                            <article
                                key={guide.title}
                                className="rounded-xl border border-white/10 bg-white/5 p-6 text-center lg:p-8"
                            >
                                <h3 className="font-display text-lg font-bold tracking-tight text-glx">
                                    {guide.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/70">
                                    {guide.body}
                                </p>
                                <a
                                    href="https://www.gold-analytix.de/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-glx"
                                >
                                    Mehr erfahren
                                    <ArrowRight
                                        className="size-3.5"
                                        aria-hidden
                                    />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </BrandLayout>
    );
}
