import {
    Facebook,
    Instagram,
    Youtube,
    ArrowRight,
    BadgeCheck,
    Coins,
    Gem,
    Magnet,
    PenLine,
    Play,
    ScanLine,
    Scale,
    ShieldCheck,
} from 'lucide-react';
import type { ComponentType } from 'react';
import BrandLayout from '@/components/brands/brand-layout';
import { goldanalytixTopnavOptions } from '@/components/topnav/topnav-options';
import { Button } from '@/components/ui/button';

interface Product {
    icon: ComponentType<{ className?: string }>;
    name: string;
    body: string;
    useCase: string;
    image: string;
}

const products: Product[] = [
    {
        icon: PenLine,
        name: 'CaratScreenPen',
        body: 'Der CaratScreenPen ist ein Gold-Testgerät, das Ihnen schnell und einfach die Karatzahl von Goldschmuck anzeigt. So können Sie z.B. beim Goldankauf direkt den Goldwert ermitteln und Unterlegierungen erkennen. Dünn vergoldeter Modeschmuck wird bei der Messung mit dem CaratScreenPen sogar von echtem Goldschmuck unterschieden.',
        useCase: 'Schmuck',
        image: 'https://www.gold-analytix.de/media/8f/48/b5/1757032075/de-produktbild-startseite-g-01-0012-1.webp',
    },
    {
        icon: ScanLine,
        name: 'GoldScreenSensor',
        body: 'Der GoldScreenSensor ermöglicht Ihnen die Echtheit von Edelmetallmünzen und -barren von 1/4 Unze bis ca. 2 Unzen zu überprüfen. Die schnelle Ergebnisausgabe und Fälschungserkennung von Wolfram, Molybdän und mehr macht den GoldScreenSensor zum idealen Edelmetallprüfgerät für private Investoren und Edelmetallhändler.',
        useCase: 'Münzen & Barren',
        image: 'https://www.gold-analytix.de/media/35/3b/03/1776941742/g-01-0013-produktbild-gss-startseite-en.webp',
    },
    {
        icon: Gem,
        name: 'GoldScreenPen',
        body: 'Mit dem GoldScreenPen können Sie die Leitfähigkeit und damit auch die Echtheit von Barren und Münzen von 1 bis 31 Gramm prüfen.',
        useCase: 'Leitfähigkeit',
        image: 'https://www.gold-analytix.de/media/59/00/24/1757032338/dt-produktbild-startseite-klein-g-01-0018.webp',
    },
    {
        icon: Magnet,
        name: 'MagneticScreenScale',
        body: 'Mit der Magnetwaage können Sie schnell und zerstörungsfrei Goldwaren wie Barren oder Münzen auf Wolframkerne prüfen.',
        useCase: 'Wolframkerne',
        image: 'https://www.gold-analytix.de/media/4c/a0/83/1776941054/g-01-0002-start-magneticscreenscale-gold-test.webp',
    },
    {
        icon: Scale,
        name: 'Prüfsäuren',
        body: 'Prüfsäuren für die zuverlässige, klassische Echtheitsprüfung von Gold, Silber und Platin – bewährt seit Generationen.',
        useCase: 'Klassisch',
        image: 'https://www.gold-analytix.de/media/a0/c5/35/1776941390/06-04-00000-produktbild-prfsuen-startseite.webp',
    },
    {
        icon: Coins,
        name: 'BarScreenSensor',
        body: 'Das wichtigste Messgerät, um Goldbarren und andere Edelmetallbarren auch in Schutzverpackung auf Echtheit zu testen.',
        useCase: 'Barren',
        image: 'https://www.gold-analytix.de/media/b7/cf/ba/1776941494/g-01-0010-produktbild-bss-startseite.webp',
    },
];

const guides = [
    {
        title: 'Gold testen',
        body: 'Unterscheiden Sie selbst echtes Gold von billigen Fälschungen – alle Methoden zur Echtheitsprüfung von Gold im Überblick.',
        image: 'https://www.gold-analytix.de/media/6f/b5/76/1757032338/goldanalytix-gold-testen.webp',
    },
    {
        title: 'Silber testen',
        body: 'Schützen Sie sich vor Betrügern. Wir zeigen Ihnen, wie man Silber-Imitate sicher identifiziert.',
        image: 'https://www.gold-analytix.de/media/3b/31/37/1757032338/goldanalytix-silberfaelschungen-erkennen.webp',
    },
    {
        title: 'Über Goldanalytix',
        body: 'Edelmetall-Prüfgeräte der neuesten Generation: hochwertige Technik, Expertise und Beratung – Made in Germany.',
        image: 'https://www.gold-analytix.de/media/4a/77/70/1753387908/gax-logo-de.jpg?ts=1753387908',
    },
];

const proofPoints = [
    'Kostenlose Produktberatung',
    'Schnelle Lieferung',
    'Gratis Lieferung ab 150,00 € (DE)',
    'Direkt vom Hersteller',
];

const mediaHighlights = [
    {
        title: 'GoldScreenSensor: Der Goldtester zur Erkennung von Fälschungen.',
        body: 'In diesem Video präsentieren wir Ihnen unser elektronisches Goldprüfgerät für Edelmetallmünzen und -barren, unseren GoldScreenSensor.',
        image: 'https://www.gold-analytix.de/media/be/54/fa/1776644676/maxresdefault-8.webp',
        href: 'https://www.youtube.com/watch?v=zm7zAaGggWM',
    },
    {
        title: 'CaratScreenPen: Das Prüfgerät zur Bestimmung des Goldgehalts.',
        body: 'Der CaratScreenPen bestimmt den Goldgehalt an der Oberfläche der Schmuckstücke und bietet Ihnen somit Sicherheit beim An- und Verkauf von Goldschmuck.',
        image: 'https://www.gold-analytix.de/media/67/39/21/1776644731/maxresdefault-9.webp',
        href: 'https://www.youtube.com/watch?v=UScu-XeCzs0',
    },
];

const importantLinks = [
    'Goldanalytix-Onlineshop – Goldprüfgeräte, Gold Tester & Edelmetallprüfer sicher online erwerben',
    'Übersicht der verschiedenen Prüfmethoden für Gold, Silber, Platin und Palladium',
    'Übersicht der häufigsten Fälschungen von Gold und Silber',
    'Informationen über Fälschungsmerkmale und Bilder von gefälschten Goldmünzen, die 2022 in Köln in Umlauf gebracht wurden',
];

export default function Goldanalytix() {
    return (
        <BrandLayout
            title="Goldanalytix – Gold und Silber zuverlässig auf Echtheit prüfen"
            description="Goldanalytix bietet einfach bedienbare und schnell messende Prüfgeräte für Gold, Silber und Platin – für Händler, Banken, Juweliere und Privatinvestoren."
            headerClass="bg-ink/90"
            accentClass="text-glx"
            topnav={goldanalytixTopnavOptions}
            footer={{
                brandName: 'Goldanalytix',
                logo: '/goldanalytix/goldanalytix_logo.svg',
                bgClass: 'bg-ink',
                accentClass: 'text-glx',
                consultTitle: 'Produktberatung',
                consultIntro:
                    'Technischer Support und Bestellungen per Telefon und E-Mail:',
                phone: '+49 941 378 472 00',
                email: 'gold-analytix@marawe.de',
                showNewsletter: true,
                socials: [
                    {
                        icon: Facebook,
                        label: 'Facebook',
                        href: 'https://www.facebook.com/Goldanalytix/',
                    },
                    {
                        icon: Instagram,
                        label: 'Instagram',
                        href: 'https://www.instagram.com/goldanalytix_de/',
                    },
                    {
                        icon: Youtube,
                        label: 'YouTube',
                        href: 'https://www.youtube.com/channel/UCwRsOiBWkL64iak0b2O9wMw',
                    },
                ],
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
                    src="https://www.gold-analytix.de/media/8e/44/57/1757032338/goldanalytix-goldfaelschungen-erkennen.webp"
                    alt="Goldanalytix Edelmetallprüfung"
                    className="absolute inset-0 size-full object-cover opacity-35"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
                <div className="relative mx-auto grid w-full max-w-7xl items-end gap-12 px-6 pt-40 pb-24 lg:grid-cols-[minmax(0,1fr)_25rem] lg:px-8 lg:pb-32">
                    <div>
                        <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-glx uppercase">
                            Goldanalytix · Eine Marke der MARAWE GmbH &amp; Co.
                            KG
                        </p>
                        <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                            Prüfen Sie Gold und Silber schnell, einfach und
                            zuverlässig auf Echtheit.
                        </h1>
                        <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
                            Edelmetall-Prüfgeräte der neuesten Generation.
                            Goldanalytix bietet Ihnen hochwertige Technik,
                            Expertise und Beratung – Made in Germany.
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
                    <div className="rounded-xl border border-white/15 bg-white/10 p-5 shadow-float backdrop-blur-md">
                        <div className="flex items-center gap-4">
                            <img
                                src="/goldanalytix/goldanalytix_logo.svg"
                                alt="Goldanalytix Logo"
                                className="size-16 rounded-md object-cover"
                                loading="lazy"
                            />
                            <div>
                                <p className="text-xs font-semibold tracking-[0.2em] text-glx uppercase">
                                    Prüfgeräte
                                </p>
                                <p className="font-display text-2xl font-bold tracking-tight">
                                    Für Schmuck, Münzen und Barren.
                                </p>
                            </div>
                        </div>
                        <div className="mt-6 grid gap-3">
                            {proofPoints.map((point) => (
                                <div
                                    key={point}
                                    className="flex items-center gap-3 rounded-md bg-white/10 px-4 py-3 text-sm font-medium text-white/85"
                                >
                                    <ShieldCheck className="size-4 text-glx" />
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-y-4 border-ink bg-glx text-ink">
                <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 text-center sm:flex-row sm:text-left lg:px-8">
                    <img
                        src="https://www.gold-analytix.de/media/06/75/c1/1779359794/banner-seminar-edelmetallpruefung-2720x764.webp"
                        alt="Seminar Edelmetallprüfung"
                        className="w-full max-w-xs shrink-0 rounded-md border border-ink/20 object-cover sm:max-w-sm"
                        loading="lazy"
                    />
                    <div className="flex-1">
                        <h2 className="font-display text-2xl font-bold tracking-tight">
                            Seminar Edelmetallprüfung
                        </h2>
                        <p className="mt-1 text-sm font-medium text-ink/80">
                            Lernen Sie die Echtheitsprüfung von Gold und Silber
                            von unseren Experten – regelmäßige Termine in
                            Stuttgart und Offenbach. Nächste Termine: 02.07.2026
                            Stuttgart und 24.07.2026 Offenbach.
                        </p>
                    </div>
                    <Button asChild size="lg" variant="secondary">
                        <a
                            href="https://www.gold-analytix.de/service/seminar-anmeldung/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jetzt anmelden
                        </a>
                    </Button>
                </div>
            </section>

            <section id="sortiment" className="bg-background py-24 lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
                        <div>
                            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gold-deep uppercase dark:text-glx">
                                Unsere Prüfgeräte
                            </p>
                            <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                                Goldprüfgeräte, Gold Tester &amp;
                                Edelmetallprüfer.
                            </h2>
                        </div>
                        <p className="text-muted-foreground">
                            Mit Geräten wie der GoldScreenSensor,
                            CaratScreenPen, GoldScreenPen, Magnetwaage oder der
                            Dichtewaage detektieren Sie schnell und präzise
                            Materialfälschungen von Edelmetallen.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {products.map((product) => (
                            <article
                                key={product.name}
                                className="group overflow-hidden rounded-xl border border-border/80 bg-card transition-shadow hover:shadow-float"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="size-full object-contain p-5 transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-md bg-glx text-ink shadow-float">
                                        <product.icon
                                            className="size-5"
                                            aria-hidden
                                        />
                                    </span>
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 flex items-center justify-between gap-3">
                                        <h3 className="font-display text-xl font-bold tracking-tight">
                                            {product.name}
                                        </h3>
                                        <span className="rounded-md border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                                            {product.useCase}
                                        </span>
                                    </div>
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {product.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="medien" className="bg-ink py-24 text-white lg:py-32">
                <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col gap-6">
                        {mediaHighlights.map((video) => (
                            <div
                                key={video.title}
                                className="grid items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6 lg:grid-cols-2 lg:p-8"
                            >
                                <div>
                                    <h2 className="font-display text-2xl font-bold tracking-tight text-glx">
                                        {video.title}
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-white/75">
                                        {video.body}
                                    </p>
                                </div>
                                <a
                                    href={video.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative aspect-video overflow-hidden rounded-lg border border-white/10"
                                    aria-label={`Video ansehen: ${video.title}`}
                                >
                                    <img
                                        src={video.image}
                                        alt={video.title}
                                        className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <span className="absolute inset-0 m-auto flex size-14 items-center justify-center rounded-full bg-glx text-ink shadow-float transition-transform group-hover:scale-110">
                                        <Play className="ml-1 size-6 fill-current" />
                                    </span>
                                    <span className="absolute right-4 bottom-3 text-xs font-semibold text-white/80">
                                        Ansehen auf YouTube
                                    </span>
                                </a>
                            </div>
                        ))}
                    </div>

                    <h2 className="mt-20 mb-12 text-center font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                        Gold und Silber selbst zuverlässig testen!
                    </h2>
                    <div className="grid gap-6 sm:grid-cols-3">
                        {guides.map((guide) => (
                            <article
                                key={guide.title}
                                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                            >
                                <div className="flex aspect-[4/3] items-center justify-center bg-white">
                                    <img
                                        src={guide.image}
                                        alt={guide.title}
                                        className="max-h-full max-w-full object-contain p-4"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6 text-center lg:p-8">
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
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-secondary py-24 lg:py-32">
                <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-gold-deep uppercase dark:text-glx">
                            Über Goldanalytix
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Goldprüfgeräte der neuesten Generation -
                            zerstörungsfrei Gold prüfen!
                        </h2>
                        <div className="mt-6 space-y-4 text-muted-foreground">
                            <p>
                                Goldanalytix ist der führende Anbieter für
                                Goldprüfgeräte, Silberprüfgeräte und Methoden
                                zur Echtheitsprüfung von Gold, Silber und
                                anderen Anlage-Edelmetallen. Mit einem breiten
                                Sortiment an Prüfgeräten stellen wir
                                Privatpersonen und Firmen die richtige Lösung
                                zur Verfügung, um selbst Gold &amp; Silber auf
                                Echtheit zu prüfen.
                            </p>
                            <p>
                                Sowohl Schmuck, Münzen als auch Barren – mit
                                Geräten wie der GoldScreenSensor,
                                CaratScreenPen, GoldScreenPen, Magnetwaage oder
                                der Dichtewaage detektieren Sie schnell und
                                präzise Materialfälschungen von Edelmetallen.
                                Egal ob es sich um unechten Goldschmuck,
                                gefälschte Goldbarren oder gefälschte Gold- und
                                Silbermünzen handelt – die Gold Tester von
                                Goldanalytix erkennen sofort, ob es sich um
                                echtes oder falsches Gold, Silber oder Platin
                                handelt.
                            </p>
                        </div>
                    </div>
                    <img
                        src="https://www.gold-analytix.de/media/91/ce/71/1757032510/tempor-res-bild.webp"
                        alt="Tastatur mit goldener Edelmetallprüfgeräte-Taste und Goldanalytix-Logo"
                        loading="lazy"
                        className="w-full self-center rounded-xl border border-border/60 object-cover shadow-float lg:order-first"
                    />
                </div>
                <div className="mx-auto mt-16 w-full max-w-7xl px-6 lg:px-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                        Wichtige Links und Informationen
                    </h3>
                    <ul className="mt-5 flex flex-col gap-2.5">
                        {importantLinks.map((link) => (
                            <li
                                key={link}
                                className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground"
                            >
                                <BadgeCheck className="mt-0.5 size-4 shrink-0 text-gold-deep dark:text-glx" />
                                <a
                                    href="https://www.gold-analytix.de/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline-offset-2 transition-colors hover:text-foreground hover:underline"
                                >
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </BrandLayout>
    );
}
