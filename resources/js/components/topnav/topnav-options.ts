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
        href: tobolin(),
    },
    navItems: [
        { label: 'Lösungen', href: '#loesungen' },
        { label: 'Horizontalsperre', href: '#horizontalsperre' },
        { label: 'Videos', href: '#videos' },
        { label: 'Beratung', href: '#beratung' },
        { label: 'Kontakt', href: '#kontakt' },
    ],
    utilityItems: [{ label: 'MARAWE', href: home() }],
    cartHref: cart(),
} satisfies TopnavOptions;
