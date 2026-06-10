import { ArrowRight, Play } from 'lucide-react';
import { goldanalytix, tifoo } from '@/routes/brands';

interface InfoColumn {
    title: string;
    body: string;
    link: { label: string; href: string };
}

const infoColumns: InfoColumn[] = [
    {
        title: 'Über MARAWE',
        body: 'Die MARAWE GmbH & Co. KG, mit Hauptsitz in Regensburg, entwickelt, produziert und vertreibt im Rahmen der Marken Tifoo, Goldanalytix, Walhalla-Chemie und Tobolin als einer der führenden Anbieter Produkte für die Oberflächenveredelung und -reinigung, Galvanotechnik, Edelmetallprüfung und Bauchemie.',
        link: {
            label: 'Mehr über die MARAWE GmbH & Co. KG',
            href: '#ueber-uns',
        },
    },
    {
        title: 'Tifoo',
        body: 'Unter dem Markennamen Tifoo vertreiben wir Produkte zur eigenständigen Vorbehandlung, Beschichtung und Reinigung von Oberflächen aller Art – vom Galvanisieren (selber Vergolden & Versilbern) über das Brünieren von Stahl bis zum Patinieren von Buntmetallen. Ideal für Profis ebenso wie für Einsteiger, Bastler und Künstler.',
        link: {
            label: 'Hier geht es zu den Tifoo-Produkten',
            href: tifoo().url,
        },
    },
    {
        title: 'Goldanalytix – Goldprüfung',
        body: 'Die Marke Goldanalytix steht für einfach bedienbare und schnell messende Prüfgeräte für Gold, Silber und Platin. Edelmetallhändler, Pfandleiher, Banken, Juweliere und Privatinvestoren prüfen damit Gold auf Echtheit und erkennen die häufigen Fälschungen von Barren, Münzen und Schmuck.',
        link: {
            label: 'Hier geht es zu Goldanalytix',
            href: goldanalytix().url,
        },
    },
    {
        title: 'Get instructed',
        body: 'Zahlreiche Inspirationen zu Do-it-yourself-Anwendungen unserer Produkte gibt es auf YouTube! Finden Sie dort Anwendungs-, Anleitungs- und Vorführungsvideos rund um Galvanik, Goldprüfung und mehr.',
        link: {
            label: 'Hier geht es zum Tifoo-YouTube-Kanal',
            href: 'https://www.youtube.com/user/TifooTech',
        },
    },
];

interface MediaTile {
    type: 'image' | 'video';
    title: string;
    subtitle?: string;
    image: string;
    href?: string;
}

const mediaTiles: MediaTile[] = [
    {
        type: 'image',
        title: 'Unser Standort Regensburg',
        image: '/marawe/marawe_building.jpg',
    },
    {
        type: 'image',
        title: 'Oberflächen in Profiqualität',
        image: '/marawe/marawe_bolts.jpg',
    },
    {
        type: 'video',
        title: 'GoldScreenSensor | Einfache Goldprüfung',
        subtitle: 'Goldanalytix Edelmetallprüfung',
        image: 'https://img.youtube.com/vi/G10dA-WM6W8/maxresdefault.jpg',
        href: 'https://www.youtube.com/embed/G10dA-WM6W8',
    },
    {
        type: 'video',
        title: 'Anwendungsideen Stiftgalvanik',
        subtitle: 'Tifoo',
        image: 'https://img.youtube.com/vi/Vy3YETgJ-uE/maxresdefault.jpg',
        href: 'https://www.youtube.com/embed/Vy3YETgJ-uE',
    },
];

export default function InfoSection() {
    return (
        <section className="bg-secondary py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                    {infoColumns.map((column) => (
                        <div key={column.title}>
                            <h3 className="font-display text-xl font-bold tracking-tight">
                                {column.title}
                            </h3>
                            <div className="mt-3 mb-4 h-px w-full bg-border" />
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                {column.body}
                            </p>
                            <a
                                href={column.link.href}
                                {...(column.link.href.startsWith('http')
                                    ? {
                                          target: '_blank',
                                          rel: 'noopener noreferrer',
                                      }
                                    : {})}
                                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-brand-soft"
                            >
                                {column.link.label}
                                <ArrowRight className="size-3.5" aria-hidden />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {mediaTiles.map((tile) => {
                        const content = (
                            <>
                                <img
                                    src={tile.image}
                                    alt={tile.title}
                                    loading="lazy"
                                    className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                                {tile.type === 'video' && (
                                    <span className="absolute inset-0 m-auto flex size-12 items-center justify-center rounded-full bg-brand text-white shadow-float transition-transform group-hover:scale-110">
                                        <Play
                                            className="ml-0.5 size-5 fill-current"
                                            aria-hidden
                                        />
                                    </span>
                                )}
                                <span className="absolute inset-x-0 bottom-0 p-4">
                                    {tile.subtitle && (
                                        <span className="block text-[11px] font-semibold tracking-[0.15em] text-white/70 uppercase">
                                            {tile.subtitle}
                                        </span>
                                    )}
                                    <span className="block text-sm font-semibold text-white">
                                        {tile.title}
                                    </span>
                                </span>
                            </>
                        );

                        const tileClass =
                            'group relative aspect-[4/3] overflow-hidden rounded-xl border';

                        return tile.href ? (
                            <div key={tile.title} className={tileClass}>
                                <iframe
                                    src={tile.href}
                                    title={tile.title}
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    className="absolute inset-0 size-full border-0"
                                ></iframe>
                            </div>
                        ) : (
                            <div key={tile.title} className={tileClass}>
                                {content}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
