import { cart, dashboard, home, login } from '@/routes';
import { goldanalytix, tifoo, tobolin } from '@/routes/brands';
import { index as productsIndex } from '@/routes/products';
import type { RouteDefinition } from '@/wayfinder';

export type TopnavHref = string | RouteDefinition<'get'>;

export interface TopnavItem {
    label: string;
    href: TopnavHref;
    external?: boolean;
}

export interface TopnavOptions {
    brand: {
        label: string;
        eyebrow?: string;
        href: TopnavHref;
        logo?: string;
        logoAlt?: string;
    };
    navItems: TopnavItem[];
    utilityItems?: TopnavItem[];
    cartHref?: TopnavHref;
    auth?: {
        dashboardHref: TopnavHref;
        loginHref: TopnavHref;
    };
}

export const maraweTopnavOptions = {
    brand: {
        label: 'MARAWE',
        eyebrow: 'Regensburg',
        logo: '/marawe/marawe_icon.png',
        logoAlt: 'MARAWE Logo',
        href: '#start',
    },
    navItems: [
        { label: 'Marken', href: '#marken' },
        { label: 'Jobs', href: '#karriere' },
        { label: 'Über Uns', href: '#ueber-uns' },
        { label: 'Kontakt', href: '#kontakt' },
    ],
    utilityItems: [{ label: 'Produkte', href: productsIndex() }],
    cartHref: cart(),
    auth: {
        dashboardHref: dashboard(),
        loginHref: login(),
    },
} satisfies TopnavOptions;

export const tifooTopnavOptions = {
    brand: {
        label: 'TIFOO',
        eyebrow: 'Galvanik & Oberflächentechnik',
        logo: '/tifoo/tifoo_logo.svg',
        logoAlt: 'Tifoo Logo',
        href: tifoo(),
    },
    navItems: [
        { label: 'Shop', href: productsIndex() },
        { label: 'Galvanisieren', href: '#sortiment' },
        { label: 'Eloxieren', href: '#sortiment' },
        { label: 'Anleitungen', href: '#service' },
        { label: 'Kontakt', href: '#kontakt' },
    ],
    utilityItems: [{ label: 'MARAWE', href: home() }],
    cartHref: cart(),
} satisfies TopnavOptions;

export const goldanalytixTopnavOptions = {
    brand: {
        label: 'GOLDANALYTIX',
        eyebrow: 'Edelmetallprüfung',
        logo: '/goldanalytix/goldanalytix_logo.svg',
        logoAlt: 'Goldanalytix Logo',
        href: goldanalytix(),
    },
    navItems: [
        { label: 'Shop', href: productsIndex() },
        { label: 'Prüfgeräte', href: '#sortiment' },
        { label: 'Wissen', href: '#wissen' },
        { label: 'Bedienungsanleitungen', href: '#downloads' },
        { label: 'Kontakt', href: '#kontakt' },
    ],
    utilityItems: [{ label: 'MARAWE', href: home() }],
    cartHref: cart(),
} satisfies TopnavOptions;

export const tobolinTopnavOptions = {
    brand: {
        label: 'TOBOLIN',
        eyebrow: 'Bauwerksabdichtung',
        logo: '/tobolin/tobolin_logo.svg',
        logoAlt: 'Tobolin Logo',
        href: tobolin(),
    },
    navItems: [
        { label: 'Shop', href: productsIndex() },
        { label: 'Lösungen', href: '#loesungen' },
        { label: 'Horizontalsperre', href: '#horizontalsperre' },
        { label: 'Videos', href: '#videos' },
        { label: 'Beratung', href: '#beratung' },
        { label: 'Kontakt', href: '#kontakt' },
    ],
    utilityItems: [{ label: 'MARAWE', href: home() }],
    cartHref: cart(),
} satisfies TopnavOptions;
