import { Link } from '@inertiajs/react';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cart } from '@/routes';
import { show as productShow } from '@/routes/products';
import type { StorefrontProduct } from '@/types/storefront';

interface ProductCardProps {
    product: StorefrontProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <article className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-xl">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/65 to-transparent" />
                <Badge className="absolute bottom-4 left-4 bg-white text-ink hover:bg-white">
                    {product.badge}
                </Badge>
            </Link>
            <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                            {product.brand}
                        </p>
                        <h2 className="mt-2 font-display text-xl font-bold tracking-tight">
                            {product.name}
                        </h2>
                    </div>
                    <p className="font-display text-lg font-bold text-foreground">
                        {product.price}
                    </p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {product.excerpt}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild className="bg-brand hover:bg-brand-soft">
                        <Link href={productShow(product.slug)}>
                            Details
                            <ArrowRight data-icon="inline-end" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <Link href={cart()}>
                            <ShoppingCart data-icon="inline-start" />
                            In den Warenkorb
                        </Link>
                    </Button>
                </div>
            </div>
        </article>
    );
}
