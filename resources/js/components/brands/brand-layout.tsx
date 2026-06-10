import { Head, Link } from '@inertiajs/react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import type { ReactNode } from 'react';
import BrandFooter from '@/components/brands/brand-footer';
import type { BrandFooterConfig } from '@/components/brands/brand-footer';
import { cn } from '@/lib/utils';
import { home } from '@/routes';

interface BrandLayoutProps {
    name: string;
    field: string;
    title: string;
    description: string;
    headerClass: string;
    accentClass: string;
    footer: BrandFooterConfig;
    children: ReactNode;
}

export default function BrandLayout({
    name,
    field,
    title,
    description,
    headerClass,
    accentClass,
    footer,
    children,
}: BrandLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>
            <div className="font-sans">
                <header
                    className={cn(
                        'fixed inset-x-0 top-0 z-50 border-b border-white/10 text-white backdrop-blur-md',
                        headerClass,
                    )}
                >
                    <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
                        <Link
                            href={home()}
                            className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                        >
                            <ArrowLeft className="size-4" aria-hidden />
                            <span className="hidden sm:inline">MARAWE</span>
                        </Link>

                        <div className="flex items-baseline gap-1.5">
                            <span className="font-display text-xl font-bold tracking-tight">
                                {name}
                            </span>
                            <span
                                className={cn(
                                    'hidden text-[11px] font-medium tracking-[0.2em] uppercase sm:inline',
                                    accentClass,
                                )}
                            >
                                {field}
                            </span>
                        </div>

                        <a
                            href="#sortiment"
                            aria-label="Warenkorb"
                            className="flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-white/50 hover:text-white"
                        >
                            <ShoppingCart className="size-4" />
                            <span className="hidden sm:inline">0,00 €</span>
                        </a>
                    </div>
                </header>

                <main>{children}</main>
                <BrandFooter {...footer} />
            </div>
        </>
    );
}
