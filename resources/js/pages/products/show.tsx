import { Head, Link } from '@inertiajs/react';
import {
    ChevronLeft,
    ChevronRight,
    Heart,
    Minus,
    Plus,
    ShoppingCart,
} from 'lucide-react';
import { useState } from 'react';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { Button } from '@/components/ui/button';
import { cart } from '@/routes';
import { index as productsIndex, show as productShow } from '@/routes/products';
import type { StorefrontProduct } from '@/types/storefront';

interface ProductsShowProps {
    product: StorefrontProduct;
    similarProducts: StorefrontProduct[];
}

const tabs = ['Description', 'Downloads', 'Product safety', 'Reviews'] as const;
const relatedTabs = ['Accessories', 'Similar Products'] as const;

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
    const [activeTab, setActiveTab] = useState<ProductTab>('Description');
    const [activeRelatedTab, setActiveRelatedTab] =
        useState<RelatedTab>('Similar Products');
    const [quantity, setQuantity] = useState(1);

    const galleryImages = [
        product.image,
        ...similarProducts.map((similarProduct) => similarProduct.image),
    ].slice(0, 5);

    const activeImage = galleryImages[activeImageIndex] ?? product.image;
    const accessoryProducts = similarProducts
        .filter((similarProduct) => similarProduct.badge === 'Zubehör')
        .slice(0, 2);
    const visibleRelatedProducts =
        activeRelatedTab === 'Accessories'
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
                        Back to products
                    </Link>

                    <h1 className="font-display text-3xl font-bold tracking-tight text-foreground">
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
                                        className={`size-12 overflow-hidden rounded-none border bg-white p-1 transition-colors hover:border-foreground ${
                                            activeImageIndex === index
                                                ? 'border-foreground'
                                                : 'border-border'
                                        }`}
                                        aria-label={`View product image ${index + 1}`}
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
                                <div className="relative flex aspect-[16/9] items-center justify-center bg-white">
                                    <button
                                        type="button"
                                        aria-label="Previous image"
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
                                        aria-label="Next image"
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
                                            aria-label={`View product image ${index + 1}`}
                                            className={`size-3 rounded-full border border-foreground ${activeImageIndex === index ? 'bg-foreground' : 'bg-muted-foreground'}`}
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
                                Prices incl. VAT plus shipping costs
                            </p>
                            <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                                <span className="size-2 rounded-full bg-emerald-600" />
                                Available, delivery time:{' '}
                                {product.deliveryTime ?? '2-5 days'}
                            </p>

                            <div className="mt-6 grid gap-2 sm:grid-cols-[6.5rem_1fr]">
                                <div className="grid h-10 grid-cols-3 border">
                                    <button
                                        type="button"
                                        onClick={decreaseQuantity}
                                        className="flex items-center justify-center text-muted-foreground"
                                        aria-label="Decrease quantity"
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
                                        aria-label="Increase quantity"
                                    >
                                        <Plus className="size-3.5" />
                                    </button>
                                </div>
                                <Button
                                    asChild
                                    className="h-10 rounded-none bg-ink text-white hover:bg-ink-soft"
                                >
                                    <Link href={cart()}>
                                        <ShoppingCart data-icon="inline-start" />
                                        Add to cart
                                    </Link>
                                </Button>
                                <div className="hidden sm:block" />
                                <Button
                                    asChild
                                    className="h-10 rounded-none bg-gold text-ink hover:bg-gold/90"
                                >
                                    <Link href={cart()}>Checkout now</Link>
                                </Button>
                            </div>

                            <button
                                type="button"
                                className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
                            >
                                <Heart className="size-4" />
                                Add to wishlist
                            </button>
                            <p className="mt-3 text-xs font-semibold">
                                Product number:{' '}
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
                                    className={`border-b px-0 pb-3 text-sm ${
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
                            {activeTab === 'Description' && (
                                <>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        {product.name}
                                    </h2>
                                    <p className="mt-5">
                                        The product features at a glance:
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
                                        Scope of delivery:
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
                                                className="rounded-md border p-4 text-sm font-medium underline-offset-2 hover:underline"
                                            >
                                                {download}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'Product safety' && (
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
                                                Manufacturer / Responsible
                                                person for the EU
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

                            {activeTab === 'Reviews' && (
                                <div>
                                    <h2 className="font-display text-2xl font-bold tracking-tight">
                                        Reviews
                                    </h2>
                                    <div className="mt-5 rounded-md border p-5">
                                        <p className="font-semibold">
                                            0 of 0 reviews
                                        </p>
                                        <p className="mt-2 text-muted-foreground">
                                            {product.reviewNote ??
                                                'No reviews found. Share your insights with others.'}
                                        </p>
                                        <p className="mt-4 text-xs text-muted-foreground">
                                            Reviews are not verified as to the
                                            authenticity of purchases. Reviews
                                            may be from customers who have not
                                            purchased or used the products.
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
                                    className={`border-b pb-3 text-sm ${
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
                                {activeRelatedTab === 'Accessories'
                                    ? 'Compatible add-ons and helpful products for this item.'
                                    : `Products similar to ${product.name}, selected from the same brand, category, or adjacent use cases.`}
                            </p>
                        </div>

                        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                            {visibleRelatedProducts.map((similarProduct) => (
                                <article
                                    key={similarProduct.slug}
                                    className="relative flex min-h-[20rem] flex-col border bg-card p-3"
                                >
                                    <Link
                                        href={productShow(similarProduct.slug)}
                                        className="flex aspect-square items-center justify-center bg-white"
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
                                        className="absolute top-28 right-5 flex size-8 items-center justify-center rounded-full bg-white text-muted-foreground shadow-sm"
                                        aria-label="Add to wishlist"
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
                                        asChild
                                        size="sm"
                                        className="mt-3 rounded-none bg-ink text-white hover:bg-ink-soft"
                                    >
                                        <Link href={cart()}>Add to cart</Link>
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
