import Autoplay from 'embla-carousel-autoplay';
import {
    Facebook,
    Instagram,
    Youtube,
    ArrowRight,
    Home,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import BrandLayout from '@/components/brands/brand-layout';
import { tobolinTopnavOptions } from '@/components/topnav/topnav-options';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Solution {
    title: string;
    body: string;
    image: string;
}

const solutions: Solution[] = [
    {
        title: 'Horizontalsperre',
        body: 'Mit der Horizontalsperre schützen Sie Ihr Mauerwerk vor aufsteigender Feuchtigkeit und Schimmel.',
        image: 'https://www.tobolin.de/media/c4/a8/0a/1761810302/icon-horizontalsperre.webp',
    },
    {
        title: 'Abdichtung von innen',
        body: 'Ob Sanierung im Bestand oder Feuchteschutz im Neubau: unsere Lösungen bewähren sich in Privathäusern, denkmalgeschützten Gebäuden und gewerblichen Objekten.',
        image: 'https://www.tobolin.de/media/fb/14/d1/1761560021/icon-negativabdichtung-1.webp',
    },
    {
        title: 'Feuchtemessung',
        body: 'Feuchtigkeitsmessgerät TOBOMETER HY: schnelle Messung, zuverlässige Werte, einfache Anwendung.',
        image: 'https://www.tobolin.de/media/d2/59/51/1755518299/icon-feuchtemessung.webp',
    },
    {
        title: 'Pflasterpflege',
        body: 'Sauberes Pflaster – gepflegte Fugen. Entdecken Sie unsere Produkte für Pflaster, Steinflächen und Fugen.',
        image: 'https://www.tobolin.de/media/79/0a/a7/1760015796/pflasterschutz-icon-neu.webp',
    },
];

const promises = [
    {
        image: 'https://www.tobolin.de/media/ee/95/fe/1779096532/einfache-anwendung2-1536x1024.webp',
        title: 'Einfache Anwendung',
        body: 'Alle unsere Produkte sind anwendungsbezogen und verständlich aufgebaut. Horizontalsperre und weitere Systemlösungen können Sie ganz unkompliziert und ohne viel Aufwand selbst anbringen.',
    },
    {
        image: 'https://www.tobolin.de/media/a0/e8/e0/1779096078/preis-leistung-doppelt-1160x728.webp',
        title: 'Top Preis-Leistung',
        body: 'Wir sind preiswerter, weil wir online direkt zum Endkunden verkaufen. Unsere Systeme sind überwiegend günstiger als aufwendige Dienstleistungen. Dabei garantieren wir beste Qualität – Made in Germany.',
    },
    {
        image: 'https://www.tobolin.de/media/4e/e7/dc/1769004460/freundlicher-mann-im-bro-mit-headset-skal2.webp',
        title: 'Persönliche Beratung',
        body: 'Profitieren Sie von unserer langjährigen wissenschaftlichen Erfahrung und Kundennähe. Unser TÜV-zertifizierter Kundenservice berät Sie gerne individuell und auf Ihre Anliegen zugeschnitten.',
    },
];

interface HeroSlide {
    title: string;
    body: string;
    cta: string;
    image: string;
    imageAlt: string;
}

const heroSlides: HeroSlide[] = [
    {
        title: 'Trockene Wände für ein gesundes Raumklima',
        body: 'Mit der Horizontalsperre schützen Sie Ihr Mauerwerk vor aufsteigender Feuchtigkeit und Schimmel.',
        cta: 'Zum Produkt',
        image: 'https://www.tobolin.de/media/71/20/f9/1776149259/banner-004-1.webp',
        imageAlt: 'Tobolin Horizontalsperre mit Injektionstrichtern',
    },
    {
        title: 'Feuchte Wände sicher erkennen',
        body: 'Feuchtigkeitsmessgerät TOBOMETER HY: schnelle Messung, zuverlässige Werte, einfache Anwendung.',
        cta: 'Zum Produkt',
        image: 'https://www.tobolin.de/media/b5/4f/a4/1776149287/banner-003-1.webp',
        imageAlt: 'TOBOMETER Feuchtigkeitsmessgerät an einer Ziegelwand',
    },
    {
        title: 'Sauberes Pflaster – gepflegte Fugen.',
        body: 'Entdecken Sie unsere Produkte für Pflaster, Steinflächen und Fugen.',
        cta: 'Zu den Produkten',
        image: 'https://www.tobolin.de/media/2b/5d/97/1775553680/banner-001.webp',
        imageAlt: 'Pflaster und Fugen Produktebanner',
    },
    {
        title: 'Starke Produkte zum Schutz vor Feuchtigkeit und Witterung',
        body: 'Entdecken Sie aufeinander abgestimmte Lösungen für Sanierung, Schutz und Werterhalt rund ums Haus.',
        cta: 'Mehr erfahren',
        image: 'https://www.tobolin.de/media/34/f9/83/1775553683/banner-002.webp',
        imageAlt: 'Tobolin Produktfamilie',
    },
];

const promiseDetails = [
    'Die Systeme stoppen kapillar aufsteigende Nässe im Mauerwerk.',
    'Folgeschäden wie Schimmel und Salz-Ausblühungen werden vorbeugend reduziert.',
    'Die Lösungen bewähren sich in Privathäusern, denkmalgeschützten Gebäuden und gewerblichen Objekten.',
    'Für die Anwendung sind weder ausuferndes Fachwissen noch Spezialwerkzeug notwendig.',
];

export default function Tobolin() {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoplay] = useState(() =>
        Autoplay({ delay: 6000, stopOnInteraction: false }),
    );

    useEffect(() => {
        if (!api) {
            return;
        }

        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    return (
        <BrandLayout
            title="Tobolin – Trockene Wände für ein gesundes Raumklima"
            description="Tobolin steht für zuverlässigen Feuchteschutz aus Deutschland: Horizontalsperren und Abdichtungssysteme gegen aufsteigende Feuchtigkeit im Mauerwerk."
            headerClass="bg-tobolin/90"
            accentClass="text-tobolin-accent"
            topnav={tobolinTopnavOptions}
            footer={{
                brandName: 'Tobolin',
                logo: '/tobolin/tobolin_logo.svg',
                bgClass: 'bg-tobolin',
                accentClass: 'text-tobolin-accent',
                consultTitle: 'Persönliche Beratung',
                consultIntro: 'per Telefon, E-Mail & WhatsApp:',
                phone: '+49 (0)941 37847200',
                whatsapp: "+49 (0)159 01366514",
                socials: [
                    {
                        icon: Facebook,
                        label: "Facebook",
                        href: "https://www.facebook.com/TobolinBauChemie/",
                    },
                    {
                        icon: Instagram,
                        label: "Instagram",
                        href: "https://www.instagram.com/tobolin_smarte_bauprodukte/",
                    },
                    {
                        icon: Youtube,
                        label: "YouTube",
                        href: "https://www.youtube.com/channel/UCnGGnqiHOGPkKejIb9s5k7Q",
                    },
                ],
                contactFormUrl: 'https://www.tobolin.de/service/kontakt/',
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
                <Carousel
                    setApi={setApi}
                    opts={{ loop: true }}
                    plugins={[autoplay]}
                    className="group"
                >
                    <CarouselContent className="ml-0">
                        {heroSlides.map((slide) => (
                            <CarouselItem key={slide.title} className="pl-0">
                                <div className="relative flex min-h-[76svh] items-center pt-16">
                                    <img
                                        src={slide.image}
                                        alt={slide.imageAlt}
                                        className="absolute inset-0 size-full object-cover"
                                        loading="eager"
                                    />
                                    <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
                                        <div className="max-w-xl rounded-xl bg-white/85 p-7 shadow-float backdrop-blur-sm lg:p-10">
                                            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin uppercase">
                                                Tobolin · Eine Marke der MARAWE
                                                GmbH &amp; Co. KG
                                            </p>
                                            <h2 className="font-display text-3xl leading-[1.08] font-bold tracking-tight text-balance text-zinc-900 sm:text-5xl">
                                                {slide.title}
                                            </h2>
                                            <p className="mt-4 text-base text-zinc-700 sm:text-lg">
                                                {slide.body}
                                            </p>
                                            <div className="mt-7 flex flex-wrap gap-4">
                                                <Button
                                                    asChild
                                                    size="lg"
                                                    className="bg-tobolin text-white hover:bg-tobolin/90"
                                                >
                                                    <a href="#loesungen">
                                                        {slide.cta}
                                                        <ArrowRight data-icon="inline-end" />
                                                    </a>
                                                </Button>
                                                <Button
                                                    asChild
                                                    size="lg"
                                                    variant="outline"
                                                    className="border-zinc-300 bg-transparent text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900"
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
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-6 hidden border-tobolin/30 bg-white/70 text-tobolin opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white hover:text-tobolin lg:inline-flex" />
                    <CarouselNext className="right-6 hidden border-tobolin/30 bg-white/70 text-tobolin opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 hover:bg-white hover:text-tobolin lg:inline-flex" />
                </Carousel>
                <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-2.5">
                    {heroSlides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            onClick={() => api?.scrollTo(index)}
                            aria-label={`Slide ${index + 1} anzeigen`}
                            className={cn(
                                'h-1.5 rounded-full transition-all duration-300',
                                index === selectedIndex
                                    ? 'w-8 bg-tobolin'
                                    : 'w-3 bg-zinc-900/25 hover:bg-zinc-900/40',
                            )}
                        />
                    ))}
                </div>
            </section>

            <section
                id="horizontalsperre"
                className="bg-secondary py-24 lg:py-32"
            >
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
                    <div className="mt-14 grid gap-4 sm:grid-cols-3">
                        {[
                            'Qualität aus Deutschland',
                            'Sicher Bezahlen',
                            'Persönlicher Kundensupport',
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl border border-border/80 bg-card p-5"
                            >
                                <Home className="size-5 text-tobolin" />
                                <span className="text-sm font-semibold">
                                    {item}
                                </span>
                            </div>
                        ))}
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
                                className="group overflow-hidden rounded-xl border border-border/80 bg-card transition-shadow hover:shadow-float"
                            >
                                <div className="flex aspect-[4/3] items-center justify-center bg-white p-8">
                                    <img
                                        src={solution.image}
                                        alt={solution.title}
                                        className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="font-display text-lg font-bold tracking-tight">
                                        {solution.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                        {solution.body}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="videos" className="bg-secondary py-24 lg:py-32">
                <div className="mx-auto w-full max-w-4xl px-6 lg:px-8">
                    <div className="overflow-hidden rounded-xl border border-border/80 bg-card">
                        <img
                            src="https://www.tobolin.de/media/b3/ab/a0/1778152340/ceo-banner-neu.webp"
                            alt="Das Team hinter TOBOLIN"
                            className="aspect-[4/3] w-full object-cover sm:aspect-[2/1] lg:aspect-auto"
                            loading="lazy"
                        />
                        <div className="p-8">
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin uppercase dark:text-tobolin-accent">
                            Wer steckt hinter TOBOLIN?
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance">
                            Zuverlässiger Feuchteschutz aus Deutschland.
                        </h2>
                        <p className="mt-5 text-muted-foreground">
                            Als Marke der MARAWE GmbH &amp; Co. KG entwickelt
                            und vertreibt Tobolin hochwertige Lösungen zur
                            Abdichtung von Mauerwerk. Der Schwerpunkt liegt auf
                            modernen Horizontalsperren-Systemen gegen kapillar
                            aufsteigende Feuchtigkeit sowie Sanierungslösungen
                            bei Feuchtigkeits- und Kondensationsschäden.
                        </p>
                        <p className="mt-4 text-muted-foreground">
                            Mit über 10 Jahren Erfahrung steht Tobolin für
                            Qualität, Innovation und persönlichen Kundenservice.
                        </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="beratung"
                className="bg-tobolin py-24 text-white lg:py-32"
            >
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
                                className="overflow-hidden rounded-xl border border-white/10 bg-white/5"
                            >
                                <img
                                    src={promise.image}
                                    alt={promise.title}
                                    className="aspect-[3/2] w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="p-6 lg:p-8">
                                <h3 className="font-display text-lg font-bold tracking-tight">
                                    {promise.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-white/75">
                                    {promise.body}
                                </p>
                                </div>
                            </article>
                        ))}
                    </div>
                    <p className="mt-12 text-sm text-white/60">
                        Tobolin steht für zuverlässigen Feuchteschutz aus
                        Deutschland – TÜV-zertifizierter Kundenservice, TOBOLIN
                        ist eine Marke der MARAWE-Gruppe.
                    </p>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2">
                        {promiseDetails.map((detail) => (
                            <div
                                key={detail}
                                className="rounded-md border border-white/10 bg-white/5 p-4 text-sm text-white/75"
                            >
                                {detail}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-background py-24 lg:py-32">
                <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-tobolin uppercase dark:text-tobolin-accent">
                            Qualität
                        </p>
                        <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Qualität, auf die Sie sich verlassen können!
                        </h2>
                    </div>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Ihr Zuhause hat einen besonderen Wert – für Sie und
                            Ihre Familie. Genau deshalb wurde die
                            Horizontalsperre mit größter Sorgfalt entwickelt.
                        </p>
                        <p>
                            Tobolin bietet innovative Systemlösungen und steht
                            persönlich für die Qualität der Produkte ein.
                            Zugleich bleibt die Marke eng mit der MARAWE-Gruppe
                            verbunden.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-tobolin text-white hover:bg-tobolin/90"
                        >
                            <a href="https://www.tobolin.de/service/kontakt/">
                                Jetzt Kontakt aufnehmen
                                <ArrowRight data-icon="inline-end" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>
        </BrandLayout>
    );
}
