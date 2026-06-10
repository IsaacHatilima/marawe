export interface HeroSlide {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    cta: {
        label: string;
        href: string;
    };
}

export interface Brand {
    name: string;
    field: string;
    description: string;
    image: string;
    imageAlt: string;
    accentClass: string;
}

export interface Stat {
    value: string;
    label: string;
}

export interface Faq {
    question: string;
    answer: string;
}

export const heroSlides: HeroSlide[] = [
    {
        eyebrow: 'MARAWE GmbH & Co. KG · Regensburg',
        title: 'Oberflächen veredeln. Werte prüfen. Substanz schützen.',
        description:
            'Vier Spezialmarken, ein Anspruch: Chemie- und Prüftechnik in höchster Qualität – entwickelt und gefertigt in Deutschland.',
        image: 'marawe/marawe_main.jpg',
        imageAlt: 'Dunkle geometrische Metallkonstruktion',
        cta: { label: 'Unsere Marken entdecken', href: '#marken' },
    },
    {
        eyebrow: 'Tifoo · Galvanik & Oberflächentechnik',
        title: 'Galvanisieren, Polieren, Veredeln – in Profiqualität.',
        description:
            'Galvanik-Sets, Elektrolyte und Poliermittel für Industrie, Handwerk und anspruchsvolle Maker.',
        image: 'marawe/marawe_tifoo.jpg',
        imageAlt: 'Funkenflug bei der Metallbearbeitung',
        cta: { label: 'Mehr zu Tifoo', href: '#marken' },
    },
    {
        eyebrow: 'Goldanalytix · Edelmetallprüfung',
        title: 'Echtheit von Gold und Silber – sicher geprüft.',
        description:
            'Prüfgeräte und Analysemethoden, mit denen Händler, Juweliere und Anleger Edelmetalle zuverlässig prüfen.',
        image: 'marawe/marawe_gold.jpg',
        imageAlt: 'Gestapelte Goldbarren',
        cta: { label: 'Mehr zu Goldanalytix', href: '#marken' },
    },
    {
        eyebrow: 'Tobolin · Bauwerksabdichtung',
        title: 'Trockenes Mauerwerk. Dauerhaft geschützt.',
        description:
            'Horizontalsperren und Abdichtungssysteme gegen aufsteigende Feuchtigkeit – einfach in der Anwendung, stark in der Wirkung.',
        image: 'marawe/marawe_main.jpg',
        imageAlt: 'Geschwungene Ziegelfassade eines modernen Bauwerks',
        cta: { label: 'Mehr zu Tobolin', href: '#marken' },
    },
];

export const brands: Brand[] = [
    {
        name: 'Tifoo',
        field: 'Galvanik & Oberflächentechnik',
        description:
            'Galvanik-Sets, Elektrolyte und Poliermittel für die Veredelung metallischer Oberflächen – vom Stiftgalvanisieren bis zur Badgalvanik.',
        image: '/tifoo/tifoo_logo.svg',
        imageAlt: 'Metallbearbeitung mit Funkenflug',
        accentClass: 'bg-tifoo',
    },
    {
        name: 'Goldanalytix',
        field: 'Edelmetallprüfung',
        description:
            'Prüfgeräte, Magnetwaagen und Analysesets, mit denen sich Gold, Silber und Platin zerstörungsfrei auf Echtheit prüfen lassen.',
        image: '/goldanalytix/goldanalytix_logo.svg',
        imageAlt: 'Goldbarren auf dunklem Untergrund',
        accentClass: 'bg-gold',
    },
    {
        name: 'Tobolin',
        field: 'Bauwerksabdichtung',
        description:
            'Horizontalsperren gegen aufsteigende Feuchtigkeit im Mauerwerk – Injektionsverfahren für nachhaltige Bauwerkserhaltung.',
        image: '/tobolin/tobolin_logo.svg',
        imageAlt: 'Geschwungene Ziegelfassade eines modernen Bauwerks',
        accentClass: 'bg-tobolin',
    },
];

export const stats: Stat[] = [
    { value: '4', label: 'Spezialmarken unter einem Dach' },
    { value: '100 %', label: 'Entwicklung & Abfüllung in Regensburg' },
    { value: '10+', label: 'Jahre Erfahrung im Markenverbund' },
    { value: '4', label: 'Shop-Sprachen: DE, EN, FR, IT' },
];

export const faqs: Faq[] = [
    {
        question: 'Wofür steht MARAWE?',
        answer: 'MARAWE GmbH & Co. KG ist das Dach über vier Spezialmarken: Tifoo (Oberflächentechnik), Goldanalytix (Edelmetallprüfung), Tobolin (Bauwerksabdichtung) und Walhalla-Chemie (Spezialchemie). Entwickelt und gefertigt wird in Regensburg.',
    },
    {
        question: 'Beliefern Sie Privat- und Geschäftskunden?',
        answer: 'Ja. Unsere Produkte richten sich an Industrie, Handwerk und Handel ebenso wie an private Anwender. Für Geschäftskunden bieten wir Staffelpreise und individuelle Beratung.',
    },
    {
        question: 'Wie erreiche ich die Fachberatung?',
        answer: 'Unsere Service-Hotline erreichen Sie unter 0941 - 37847200, Montag bis Donnerstag von 9 bis 16 Uhr und Freitag von 9 bis 14 Uhr. Alternativ beantworten wir Anfragen per E-Mail in der Regel innerhalb eines Werktags.',
    },
    {
        question: 'Versenden Sie auch international?',
        answer: 'Ja, unsere Marken-Shops liefern auch international – Goldanalytix ist zusätzlich mit eigenen Shops für Frankreich und Spanien vertreten. Versandkosten und Lieferzeiten richten sich nach Zielland und Produkt und werden im Bestellprozess transparent ausgewiesen.',
    },
    {
        question:
            'Kann MARAWE auch als Partner für Vertrieb oder Lohnherstellung auftreten?',
        answer: 'Ja. Neben den eigenen Marken bildet MARAWE Partnerschaften, Full-Service-Lohnherstellung und markenübergreifende Beratung ab. Der erste Kontakt läuft über die zentrale Service-Hotline oder das Kontaktformular.',
    },
];
