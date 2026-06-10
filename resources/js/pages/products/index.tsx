import { Head } from '@inertiajs/react';
import ProductCard from '@/components/storefront/product-card';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { Badge } from '@/components/ui/badge';
import type { StorefrontProduct } from '@/types/storefront';

interface ProductsIndexProps {
    products: StorefrontProduct[];
    filters: {
        brands: string[];
        categories: string[];
    };
}

export default function ProductsIndex({
    products,
    filters,
}: ProductsIndexProps) {
    return (
        <>
            <Head title="Produktliste">
                <meta
                    name="description"
                    content="Produktliste der MARAWE Marken Tifoo, Goldanalytix und Tobolin."
                />
            </Head>
            <div className="min-h-screen bg-background font-sans">
                <StorefrontHeader />

                <main>
                    <section className="bg-ink pt-40 pb-20 text-white lg:pb-28">
                        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                                MARAWE Shop
                            </p>
                            <h1 className="max-w-4xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                                Produktliste für Oberflächen, Edelmetallprüfung
                                und Bauwerksabdichtung.
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/75">
                                Eine kuratierte Produktübersicht über Tifoo,
                                Goldanalytix und Tobolin. Die Produkte sind als
                                Platzhalter-Shopdaten vorbereitet und können
                                später direkt an echte Shopdaten angebunden
                                werden.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-2">
                                {[...filters.brands, ...filters.categories].map(
                                    (filter) => (
                                        <Badge
                                            key={filter}
                                            variant="outline"
                                            className="border-white/20 text-white"
                                        >
                                            {filter}
                                        </Badge>
                                    ),
                                )}
                            </div>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32">
                        <div className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.slug}
                                    product={product}
                                />
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
