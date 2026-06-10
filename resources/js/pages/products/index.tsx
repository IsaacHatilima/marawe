import { Head } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import ProductCard from '@/components/storefront/product-card';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { cn } from '@/lib/utils';
import type { StorefrontProduct } from '@/types/storefront';

const PAGE_SIZE = 12;

interface ProductsIndexProps {
    products: StorefrontProduct[];
    filters: {
        brands: string[];
        categories: Record<string, string[]>;
    };
}

function FilterChip({
    label,
    isActive,
    onClick,
}: {
    label: string;
    isActive: boolean;
    onClick: () => void;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={isActive}
            className={cn(
                'rounded-full border px-4 py-1.5 text-sm font-medium transition-colors',
                isActive
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border text-muted-foreground hover:border-foreground hover:text-foreground',
            )}
        >
            {label}
        </button>
    );
}

export default function ProductsIndex({
    products,
    filters,
}: ProductsIndexProps) {
    const [activeBrand, setActiveBrand] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);
    const [page, setPage] = useState(1);

    const selectBrand = (brand: string | null) => {
        setActiveBrand(brand);
        setActiveCategory(null);
        setPage(1);
    };

    const selectCategory = (category: string | null) => {
        setActiveCategory(category);
        setPage(1);
    };

    const goToPage = (nextPage: number) => {
        setPage(nextPage);
        document
            .getElementById('produktliste')
            ?.scrollIntoView({ behavior: 'smooth' });
    };

    const categories = activeBrand
        ? (filters.categories[activeBrand] ?? [])
        : [];

    const filteredProducts = products.filter(
        (product) =>
            (activeBrand === null || product.brand === activeBrand) &&
            (activeCategory === null || product.category === activeCategory),
    );

    const pageCount = Math.max(
        1,
        Math.ceil(filteredProducts.length / PAGE_SIZE),
    );
    const currentPage = Math.min(page, pageCount);
    const visibleProducts = filteredProducts.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE,
    );

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
                    <section className="border-b border-border/60 pt-32 pb-12 lg:pb-16">
                        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                                MARAWE Shop
                            </p>
                            <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                                Produktliste für Oberflächen, Edelmetallprüfung
                                und Bauwerksabdichtung.
                            </h1>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                Eine kuratierte Produktübersicht über Tifoo,
                                Goldanalytix und Tobolin. Namen, Preise und
                                Bilder stammen aus den Live-Shops und können
                                später direkt an echte Shopdaten angebunden
                                werden.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-2">
                                <FilterChip
                                    label="Alle"
                                    isActive={activeBrand === null}
                                    onClick={() => selectBrand(null)}
                                />
                                {filters.brands.map((brand) => (
                                    <FilterChip
                                        key={brand}
                                        label={brand}
                                        isActive={activeBrand === brand}
                                        onClick={() => selectBrand(brand)}
                                    />
                                ))}
                            </div>
                            {categories.length > 0 && (
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {categories.map((category) => (
                                        <FilterChip
                                            key={category}
                                            label={category}
                                            isActive={
                                                activeCategory === category
                                            }
                                            onClick={() =>
                                                selectCategory(
                                                    activeCategory === category
                                                        ? null
                                                        : category,
                                                )
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>

                    <section id="produktliste" className="scroll-mt-20 py-16">
                        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                            <p className="mb-6 text-sm text-muted-foreground">
                                {filteredProducts.length} Produkte
                                {pageCount > 1 &&
                                    ` · Seite ${currentPage} von ${pageCount}`}
                            </p>
                            <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                                {visibleProducts.map((product) => (
                                    <ProductCard
                                        key={product.slug}
                                        product={product}
                                    />
                                ))}
                            </div>
                            {pageCount > 1 && (
                                <nav
                                    aria-label="Seitennavigation"
                                    className="mt-12 flex items-center justify-center gap-2"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            goToPage(currentPage - 1)
                                        }
                                        disabled={currentPage === 1}
                                        aria-label="Vorherige Seite"
                                        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors not-disabled:hover:border-foreground not-disabled:hover:text-foreground disabled:opacity-40"
                                    >
                                        <ChevronLeft className="size-4" />
                                    </button>
                                    {Array.from(
                                        { length: pageCount },
                                        (_, index) => index + 1,
                                    ).map((pageNumber) => (
                                        <button
                                            key={pageNumber}
                                            type="button"
                                            onClick={() => goToPage(pageNumber)}
                                            aria-label={`Seite ${pageNumber}`}
                                            aria-current={
                                                pageNumber === currentPage
                                                    ? 'page'
                                                    : undefined
                                            }
                                            className={cn(
                                                'flex size-9 items-center justify-center rounded-full text-sm font-medium transition-colors',
                                                pageNumber === currentPage
                                                    ? 'bg-foreground text-background'
                                                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                                            )}
                                        >
                                            {pageNumber}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() =>
                                            goToPage(currentPage + 1)
                                        }
                                        disabled={currentPage === pageCount}
                                        aria-label="Nächste Seite"
                                        className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors not-disabled:hover:border-foreground not-disabled:hover:text-foreground disabled:opacity-40"
                                    >
                                        <ChevronRight className="size-4" />
                                    </button>
                                </nav>
                            )}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
