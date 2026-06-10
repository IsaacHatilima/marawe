import { Link } from '@inertiajs/react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { home, cart } from '@/routes';
import { index as productsIndex } from '@/routes/products';

export default function StorefrontHeader() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 text-white backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link
                    href={home()}
                    className="flex items-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                    <ArrowLeft className="size-4" aria-hidden />
                    MARAWE
                </Link>

                <Link
                    href={productsIndex()}
                    className="font-display text-xl font-bold tracking-tight"
                >
                    Produkte
                </Link>

                <Link
                    href={cart()}
                    aria-label="Warenkorb"
                    className="flex items-center gap-2 rounded-md border border-white/20 px-3 py-1.5 text-sm font-medium text-white/85 transition-colors hover:border-gold hover:text-gold"
                >
                    <ShoppingCart className="size-4" />
                    <span className="hidden sm:inline">Warenkorb</span>
                </Link>
            </div>
        </header>
    );
}
