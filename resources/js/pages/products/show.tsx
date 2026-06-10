import { Head, Link, router } from '@inertiajs/react';
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    ShoppingCart,
} from 'lucide-react';
import { useState } from 'react';
import { getBrandAccent } from '@/components/storefront/brand-accents';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { cart } from '@/routes';
import { index as productsIndex, show as productShow } from '@/routes/products';
import type { StorefrontProduct } from '@/types/storefront';

interface ProductsShowProps {
    product: StorefrontProduct;
    similarProducts: StorefrontProduct[];
}

const tabs = ['Beschreibung', 'Downloads', 'Produktsicherheit', 'Bewertungen'] as const;
const relatedTabs = ['Zubehör', 'Ähnliche Produkte'] as const;

type ProductTab = (typeof tabs)[number];
type RelatedTab = (typeof relatedTabs)[number];

const defaultBody = [
    'Would you like to know how much your item is really worth? Are you sure that the material is genuine? This product page is structured for fast evaluation, clear purchasing decisions, and later checkout integration.',
    'The device or system is designed for reliable use in everyday buying, testing, restoration, or maintenance workflows. It combines practical handling with product information that can later be replaced by live catalog data.',
    'For commercial and private users, the product offers a focused application range and a clear scope of delivery. The layout keeps technical content readable while purchase actions remain easy to reach.',
];

const scopeOfDelivery = [
    'Main product unit',
    'Measuring or application accessory',
    'USB-C charger or setup accessory',
    'Instruction manual',
    'Practical storage or shipping carton',
];

const defaultSafetyInfo = [
    'Safety information is organized by use case, supplied accessories, and correct handling.',
    'Always follow the instruction manual and the information on the product label before first use.',
];

export default function ProductsShow({
    product,
    similarProducts,
}: ProductsShowProps) {
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [activeTab, setActiveTab] = useState<ProductTab>('Beschreibung');
    const [activeRelatedTab, setActiveRelatedTab] =
        useState<RelatedTab>('Ähnliche Produkte');
    const [quantity, setQuantity] = useState(1);
    const accent = getBrandAccent(product.brand);
    const { addToCart } = useCart();
    const [justAdded, setJustAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart(product, quantity);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 1500);
    };

    const handleCheckout = () => {
        addToCart(product, quantity);
        router.visit(cart());
    };

    const galleryImages = [
        product.image,
        ...similarProducts.map((similarProduct) => similarProduct.image),
    ].slice(0, 5);

    const activeImage = galleryImages[activeImageIndex] ?? product.image;
    const accessoryProducts = similarProducts
        .filter((similarProduct) => similarProduct.badge === 'Zubehör')
        .slice(0, 2);
    const visibleRelatedProducts =
        activeRelatedTab === 'Zubehör'
            ? accessoryProducts.length > 0
                ? accessoryProducts
                : similarProducts.slice(0, 2)
            : similarProducts;
    const productBody = product.descriptionBody ?? defaultBody;
    const productScope = product.scopeOfDelivery ?? scopeOfDelivery;
    const productDownloads = product.downloads ?? [
        `Instruction Manual ${product.name}`,
        `${product.name} product data sheet`,
        `${product.brand} application guide`,
        'Shipping and returns information',
    ];
    const productSafetyInfo = product.safetyInfo ?? defaultSafetyInfo;

    const showPreviousImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1,
        );
    };

    const showNextImage = () => {
        setActiveImageIndex((currentIndex) =>
            currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1,
        );
    };

    const decreaseQuantity = () => {
        setQuantity((currentQuantity) => Math.max(1, currentQuantity - 1));
    };

    const increaseQuantity = () => {
        setQuantity((currentQuantity) => currentQuantity + 1);
    };

    return (
        <>
            <Head title={product.name}>
                <meta name="description" content={product.excerpt} />
            </Head>
            <div className="min-h-screen bg-background font-sans">
                <StorefrontHeader />

                <main className="mx-auto w-full max-w-7xl px-6 pt-24 pb-20 lg:px-8">
                    <Link
                        href={productsIndex()}
                        className="mb-6 inline-flex text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Zurück zur Produktliste
                    </Link>

                    <p
                        className={`text-xs font-semibold tracking-[0.25em] uppercase ${accent.eyebrow}`}
                    >
                        {product.brand} · {product.category}
                    </p>
                    <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-foreground">
                        {product.name}
                    </h1>

                    <section className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_25rem]">
                        <div className="grid gap-5 sm:grid-cols-[3.25rem_minmax(0,1fr)]">
                            <div className="order-2 flex gap-2 sm:order-1 sm:flex-col">
                                {galleryImages.map((image, index) => (
                                    <button
                                        key={`${image}-${index}`}
                                        type="button"
                                        onClick={() =>
                                            setActiveImageIndex(index)
                                        }
                                        className={`size-12 overflow-hidden rounded-md border bg-white p-1 transition-colors hover:border-foreground ${
                                            activeImageIndex === index
                                                ? 'border-foreground'
                                                : 'border-border'
                                        }`}
                                        aria-label={`Produktbild ${index + 1} anzeigen`}
                                        aria-pressed={
                                            activeImageIndex === index
                                        }
                                    >
                                        <img
                                            src={image}
                                            alt=""
                                            className="size-full object-cover"
                                            loading="lazy"
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="order-1 sm:order-2">
                                <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-white">
                                    <button
                                        type="button"
                                        aria-label="Vorheriges Bild"
                                        onClick={showPreviousImage}
                                        className="absolute left-0 z-10 flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
                                    >
                                        <ChevronLeft className="size-5" />
                                    </button>
                                    <img
                                        src={activeImage}
                                        alt={product.name}
                                        className="max-h-full max-w-full object-contain"
                                    />
                                    <button
                                        type="button"
                                        aria-label="Nächstes Bild"
                                        onClick={showNextImage}
                                        className="absolute right-0 z-10 flex size-9 items-center justify-center text-muted-foreground hover:text-foreground"
                                    >
                                        <ChevronRight className="size-5" />
                                    </button>
                                </div>
                                <div className="mt-5 flex justify-center gap-2">
                                    {galleryImages.map((image, index) => (
                                        <button
                                            key={`${image}-dot-${index}`}
                                            type="button"
                                            onClick={() =>
                                                setActiveImageIndex(index)
                                            }
                                            aria-label={`Produktbild ${index + 1} anzeigen`}
                                            className={`size-2.5 rounded-full transition-colors ${activeImageIndex === index ? 'bg-foreground' : 'bg-border hover:bg-muted-foreground'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <aside className="pt-2">
                            <p className="font-display text-2xl font-bold tracking-tight">
                                {product.price}
                            </p>
                            <p className="mt-3 text-xs text-muted-foreground">
                                Preise inkl. MwSt. zzgl. Versandkosten
                            </p>
                            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="size-2 rounded-full bg-emerald-600" />
                                Verfügbar, Lieferzeit:{' '}
                                {product.deliveryTime ?? '2–5 Tage'}
                            </p>

                            <div className="mt-6 grid gap-2 sm:grid-cols-[6.5rem_1fr]">
                                <div className="grid h-10 grid-cols-3 rounded-full border border-border">
                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        className="flex items-center justify-center text-muted-foreground"
                                        aria-label="Menge reduzieren"
                                    >
                                        <Minus className="size-3.5" />
                                    </button>
                                    <span className="flex items-center justify-center text-sm">
                                        {quantity}
                                    </span>
                                    <button
                                        type="button"
                                        onClick={increaseQuantity}
                                        className="flex items-center justify-center text-muted-foreground"
                                        aria-label="Menge erhöhen"
                                    >
                                        <Plus className="size-3.5" />
                                    </button>
                                </div>
                                <Button
                                    onClick={handleAddToCart}
                                    className="h-10 bg-brand text-white hover:bg-brand-soft"
                                >
                                    <ShoppingCart data-icon="inline-start" />
                                    {justAdded ? 'Hinzugefügt' : 'In den Warenkorb'}
                                </Button>
                                <div className="hidden sm:block" />
                                <Button
                                    onClick={handleCheckout}
                                    className="h-10 bg-gold text-ink hover:bg-gold/90"
                                >
                                    Zur Kasse
                                </Button>
                            </div>

                            <button
                                type="button"
                                className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                            >
                                <Heart className="size-4" />
                                Auf den Merkzettel
                            </button>
                            <p className="mt-3 text-xs font-semibold">
                                Artikelnummer:{' '}
                                <span className="font-normal text-muted-foreground">
                                    {product.productNumber ?? product.slug}
                                </span>
                            </p>
                        </aside>
                    </section>

                    <section className="mt-16 max-w-5xl">
                        <div className="flex flex-wrap gap-4 border-b">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveTab(tab)}
                                    className={`-mb-px border-b-2 px-0 pb-3 text-sm font-medium transition-colors ${
                                        activeTab === tab
                                            ? 'border-foreground text-foreground'
                                            : 'border-transparent text-muted-foreground hover:text-foreground'
                                    }`}
                                    aria-pressed={activeTab === tab}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="pt-6 text-sm leading-relaxed text-foreground">
                            {activeTab === 'Beschreibung' && (
                                <>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        {product.name}
                                    </h2>
                                    <p className="mt-5">
                                        Die Produktvorteile auf einen Blick:
                                    </p>
                                    <ul className="mt-4 list-disc space-y-1 pl-5">
                                        {product.highlights.map((highlight) => (
                                            <li key={highlight}>{highlight}</li>
                                        ))}
                                    </ul>

                                    <div className="mt-8 space-y-5 text-muted-foreground">
                                        {productBody.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>

                                    <h3 className="mt-10 font-semibold">
                                        Lieferumfang:
                                    </h3>
                                    <ul className="mt-3 list-disc space-y-1 pl-5">
                                        {productScope.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {activeTab === 'Downloads' && (
                                <div>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        Downloads
                                    </h2>
                                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                        {productDownloads.map((download) => (
                                            <a
                                                key={download}
                                                href="#"
                                                className="rounded-lg border border-border/80 p-4 text-sm font-medium transition-shadow hover:shadow-float"
                                            >
                                                {download}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Produktsicherheit' && (
                                <div>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        Product safety
                                    </h2>
                                    <div className="mt-5 space-y-3 text-muted-foreground">
                                        {productSafetyInfo.map((item) => (
                                            <p key={item}>{item}</p>
                                        ))}
                                    </div>
                                    <dl className="mt-6 grid gap-3">
                                        {Object.entries(
                                            product.specifications,
                                        ).map(([label, value]) => (
                                            <div
                                                key={label}
                                                className="grid gap-2 rounded-md border p-4 sm:grid-cols-[12rem_1fr]"
                                            >
                                                <dt className="font-semibold">
                                                    {label}
                                                </dt>
                                                <dd className="text-muted-foreground">
                                                    {value}
                                                </dd>
                                            </div>
                                        ))}
                                    </dl>
                                    {product.manufacturer && (
                                        <div className="mt-6 rounded-md border p-4">
                                            <h3 className="font-semibold">
                                                Hersteller / Verantwortliche
                                                Person in der EU
                                            </h3>
                                            <p className="mt-3 text-muted-foreground">
                                                {product.manufacturer.name}
                                            </p>
                                            {product.manufacturer.address.map(
                                                (line) => (
                                                    <p
                                                        key={line}
                                                        className="text-muted-foreground"
                                                    >
                                                        {line}
                                                    </p>
                                                ),
                                            )}
                                            <p className="mt-3 text-muted-foreground">
                                                {product.manufacturer.phone} ·{' '}
                                                {product.manufacturer.email}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            )}

                            {activeTab === 'Bewertungen' && (
                                <div>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        Reviews
                                    </h2>
                                    <div className="mt-5 rounded-md border p-5">
                                        <p className="font-semibold">
                                            0 von 0 Bewertungen
                                        </p>
                                        <p className="mt-2 text-muted-foreground">
                                            {product.reviewNote ??
                                                'Noch keine Bewertungen vorhanden. Teilen Sie Ihre Erfahrungen mit anderen.'}
                                        </p>
                                        <p className="mt-4 text-xs text-muted-foreground">
                                            Bewertungen werden nicht auf die
                                            Echtheit der Käufe geprüft. Sie
                                            können auch von Kundinnen und Kunden
                                            stammen, die das Produkt nicht
                                            erworben haben.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    <section className="mt-20 max-w-5xl">
                        <div className="flex gap-5 border-b">
                            {relatedTabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setActiveRelatedTab(tab)}
                                    className={`-mb-px border-b-2 pb-3 text-sm font-medium transition-colors ${
                                        activeRelatedTab === tab
                                            ? 'border-foreground text-foreground'
                                            : 'border-transparent text-muted-foreground hover:text-foreground'
                                    }`}
                                    aria-pressed={activeRelatedTab === tab}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="mt-5">
                            <h2 className="font-display text-2xl font-bold tracking-tight">
                                {activeRelatedTab}
                            </h2>
                            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                                {activeRelatedTab === 'Zubehör'
                                    ? 'Passendes Zubehör und hilfreiche Ergänzungen zu diesem Produkt.'
                                    : `Produkte ähnlich zu ${product.name} – ausgewählt aus derselben Marke, Kategorie oder verwandten Anwendungen.`}
                            </p>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {visibleRelatedProducts.map((similarProduct) => (
                                <article
                                    key={similarProduct.slug}
                                    className="group relative flex min-h-[20rem] flex-col rounded-xl border border-border/80 bg-card p-3 transition-shadow hover:shadow-float"
                                >
                                    <Link
                                        href={productShow(similarProduct.slug)}
                                        className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-white"
                                    >
                                        <img
                                            src={similarProduct.image}
                                            alt={similarProduct.name}
                                            className="max-h-full max-w-full object-contain"
                                            loading="lazy"
                                        />
                                    </Link>
                                    <button
                                        type="button"
                                        className="absolute top-28 right-5 flex size-8 items-center justify-center rounded-full bg-white text-muted-foreground shadow-float transition-colors hover:text-brand"
                                        aria-label="Auf den Merkzettel"
                                    >
                                        <Heart className="size-4" />
                                    </button>
                                    <h3 className="mt-4 line-clamp-2 text-sm leading-snug font-semibold">
                                        {similarProduct.name}
                                    </h3>
                                    <p className="mt-1 line-clamp-3 text-xs text-muted-foreground">
                                        {similarProduct.excerpt}
                                    </p>
                                    <p className="mt-auto pt-4 text-sm font-bold">
                                        {similarProduct.price} *
                                    </p>
                                    <Button
                                        size="sm"
                                        onClick={() =>
                                            addToCart(similarProduct)
                                        }
                                        className="mt-3 bg-brand text-white hover:bg-brand-soft"
                                    >
                                        In den Warenkorb
                                    </Button>
                                </article>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
