import { Link } from '@inertiajs/react';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { home, cart } from '@/routes';
import { index as productsIndex } from '@/routes/products';

export default function StorefrontHeader() {
    const { itemCount, subtotal } = useCart();

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:px-8">
                <Link
                    href={home()}
                    className="flex items-center gap-2.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                    <ArrowLeft className="size-4" aria-hidden />
                    <img
                        src="/marawe/marawe_icon.png"
                        alt=""
                        className="size-8 object-contain"
                    />
                    <span className="font-display text-lg font-bold tracking-tight text-foreground">
                        MARAWE
                    </span>
                </Link>

                <Link
                    href={productsIndex()}
                    className="font-display text-base font-semibold tracking-tight text-foreground"
                >
                    Produkte
                </Link>

                <Link
                    href={cart()}
                    aria-label="Warenkorb"
                    className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-shadow hover:shadow-float"
                >
                    <ShoppingCart className="size-4" />
                    <span className="hidden sm:inline">
                        {itemCount > 0 ? subtotal : 'Warenkorb'}
                    </span>
                    {itemCount > 0 && (
                        <span className="flex size-5 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white">
                            {itemCount}
                        </span>
                    )}
                </Link>
            </div>
        </header>
    );
}
