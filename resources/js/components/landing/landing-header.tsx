import { Link, usePage } from '@inertiajs/react';
import { Menu, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { dashboard, login } from '@/routes';

const navItems = [
    { label: 'Marken', href: '#marken' },
    { label: 'Über uns', href: '#ueber-uns' },
    { label: 'Karriere', href: '#karriere' },
    { label: 'Kontakt', href: '#kontakt' },
];

export default function LandingHeader() {
    const { auth } = usePage().props;
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 text-white backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
                <a href="#start" className="flex items-baseline gap-1.5">
                    <span className="font-display text-xl font-bold tracking-tight">
                        MARAWE
                    </span>
                    <span className="hidden text-[11px] font-medium tracking-[0.2em] text-brand uppercase sm:inline">
                        Regensburg
                    </span>
                </a>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-brand"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#marken"
                        aria-label="Warenkorb"
                        className="flex items-center gap-2 rounded-md border border-white/15 px-3 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-brand hover:text-brand"
                    >
                        <ShoppingCart className="size-4" />
                        <span className="hidden sm:inline">0,00 €</span>
                    </a>
                    {auth.user ? (
                        <Button asChild variant="secondary" size="sm">
                            <Link href={dashboard()}>Dashboard</Link>
                        </Button>
                    ) : (
                        <Button asChild variant="secondary" size="sm">
                            <Link href={login()}>Anmelden</Link>
                        </Button>
                    )}
                    <button
                        type="button"
                        onClick={() => setIsMobileMenuOpen((open) => !open)}
                        className="inline-flex size-9 items-center justify-center rounded-md text-white/80 hover:text-white md:hidden"
                        aria-label="Navigation öffnen"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <Menu className="size-5" />
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <nav className="flex flex-col gap-1 border-t border-white/10 px-6 py-4 md:hidden">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="rounded-md px-2 py-2 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-brand"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
