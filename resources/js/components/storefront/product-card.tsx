import { Link } from '@inertiajs/react';
import { ArrowRight, Check, ShoppingCart } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getBrandAccent } from '@/components/storefront/brand-accents';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { show as productShow } from '@/routes/products';
import type { StorefrontProduct } from '@/types/storefront';

interface ProductCardProps {
    product: StorefrontProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    const accent = getBrandAccent(product.brand);
    const { addToCart } = useCart();
    const [justAdded, setJustAdded] = useState(false);
    const resetTimer = useRef<ReturnType<typeof setTimeout>>(null);

    useEffect(() => {
        return () => {
            if (resetTimer.current) {
                clearTimeout(resetTimer.current);
            }
        };
    }, []);

    const handleAddToCart = () => {
        addToCart(product);
        setJustAdded(true);

        if (resetTimer.current) {
            clearTimeout(resetTimer.current);
        }

        resetTimer.current = setTimeout(() => setJustAdded(false), 1500);
    };

    return (
        <article className="group flex flex-col overflow-hidden rounded-xl border border-border/80 bg-card transition-shadow hover:shadow-float">
            <Link
                href={productShow(product.slug)}
                className="relative block aspect-[4/3] overflow-hidden bg-secondary"
            >
                <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-[11px] font-semibold shadow-float ${accent.chip}`}
                >
                    {product.badge}
                </span>
            </Link>
            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p
                            className={`text-xs font-semibold tracking-[0.18em] uppercase ${accent.eyebrow}`}
                        >
                            {product.brand}
                        </p>
                        <h2 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                            {product.name}
                        </h2>
                    </div>
                    <p className="font-display text-base font-semibold whitespace-nowrap text-foreground">
                        {product.price}
                    </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {product.excerpt}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                    <Button asChild className="bg-brand hover:bg-brand-soft">
                        <Link href={productShow(product.slug)}>
                            Details
                            <ArrowRight data-icon="inline-end" />
                        </Link>
                    </Button>
                    <Button variant="outline" onClick={handleAddToCart}>
                        {justAdded ? (
                            <>
                                <Check data-icon="inline-start" />
                                Hinzugefügt
                            </>
                        ) : (
                            <>
                                <ShoppingCart data-icon="inline-start" />
                                In den Warenkorb
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </article>
    );
}
