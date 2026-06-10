import { Link, usePage } from '@inertiajs/react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';
import type {
    TopnavHref,
    TopnavItem,
    TopnavOptions,
} from '@/components/topnav/topnav-options';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { cn } from '@/lib/utils';

interface TopnavProps {
    options: TopnavOptions;
    headerClass: string;
    accentClass: string;
    showAuthAction?: boolean;
    cartLabel?: string;
}

function getHref(href: TopnavHref): string {
    return typeof href === 'string' ? href : href.url;
}

function isInertiaHref(href: TopnavHref): boolean {
    return typeof href !== 'string';
}

function NavLink({
    item,
    className,
    onClick,
}: {
    item: TopnavItem;
    className: string;
    onClick?: () => void;
}) {
    const href = getHref(item.href);

    if (isInertiaHref(item.href) && !item.external) {
        return (
            <Link href={item.href} onClick={onClick} className={className}>
                {item.label}
            </Link>
        );
    }

    return (
        <a
            href={href}
            onClick={onClick}
            className={className}
            target={item.external ? '_blank' : undefined}
            rel={item.external ? 'noopener noreferrer' : undefined}
        >
            {item.label}
        </a>
    );
}

function BrandMark({
    brand,
    accentClass,
}: {
    brand: TopnavOptions['brand'];
    accentClass: string;
}) {
    return (
        <>
            {brand.logo && (
                <span className="flex h-9 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white px-1.5 py-1">
                    <img
                        src={brand.logo}
                        alt={brand.logoAlt ?? `${brand.label} Logo`}
                        className="h-full w-auto object-contain"
                    />
                </span>
            )}
            <span className="font-display text-xl font-bold tracking-tight">
                {brand.label}
            </span>
            {brand.eyebrow && (
                <span
                    className={cn(
                        'hidden text-[11px] font-medium tracking-[0.2em] uppercase sm:inline',
                        accentClass,
                    )}
                >
                    {brand.eyebrow}
                </span>
            )}
        </>
    );
}

export default function Topnav({
    options,
    headerClass,
    accentClass,
    showAuthAction = false,
    cartLabel = '0,00 €',
}: TopnavProps) {
    const { auth } = usePage().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { itemCount, subtotal } = useCart();

    return (
        <header
            className={cn(
                'fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white backdrop-blur-md',
                headerClass,
            )}
        >
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
                {isInertiaHref(options.brand.href) ? (
                    <Link
                        href={options.brand.href}
                        className="flex min-w-0 items-center gap-2.5"
                    >
                        <BrandMark
                            brand={options.brand}
                            accentClass={accentClass}
                        />
                    </Link>
                ) : (
                    <a
                        href={getHref(options.brand.href)}
                        className="flex min-w-0 items-center gap-2.5"
                    >
                        <BrandMark
                            brand={options.brand}
                            accentClass={accentClass}
                        />
                    </a>
                )}

                <nav className="hidden flex-1 items-center justify-center gap-6 lg:flex">
                    {options.navItems.map((item) => (
                        <NavLink
                            key={`${item.label}-${getHref(item.href)}`}
                            item={item}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white"
                        />
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    {options.utilityItems?.map((item) => (
                        <NavLink
                            key={`${item.label}-${getHref(item.href)}`}
                            item={item}
                            className="hidden rounded-md px-3 py-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white md:inline-flex"
                        />
                    ))}
                    {options.cartHref && (
                        <Link
                            href={options.cartHref}
                            aria-label="Warenkorb"
                            className="flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
                        >
                            <ShoppingCart className="size-4" />
                            <span className="hidden sm:inline">
                                {itemCount > 0 ? subtotal : cartLabel}
                            </span>
                            {itemCount > 0 && (
                                <span className="flex size-5 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-ink">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    )}
                    {showAuthAction && options.auth ? (
                        auth.user ? (
                            <Button asChild variant="secondary" size="sm">
                                <Link href={options.auth.dashboardHref}>
                                    Dashboard
                                </Link>
                            </Button>
                        ) : (
                            <Button asChild variant="secondary" size="sm">
                                <Link href={options.auth.loginHref}>
                                    Anmelden
                                </Link>
                            </Button>
                        )
                    ) : null}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="inline-flex size-9 items-center justify-center rounded-md text-white/80 hover:text-white lg:hidden"
                        aria-label="Navigation öffnen"
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? (
                            <X className="size-5" />
                        ) : (
                            <Menu className="size-5" />
                        )}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 lg:hidden">
                    {[...options.navItems, ...(options.utilityItems ?? [])].map(
                        (item) => (
                            <NavLink
                                key={`${item.label}-${getHref(item.href)}`}
                                item={item}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="rounded-md px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                            />
                        ),
                    )}
                </nav>
            )}
        </header>
    );
}
