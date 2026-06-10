import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { Button } from '@/components/ui/button';
import { index as productsIndex, show as productShow } from '@/routes/products';
import type { CartItem, CartSummary } from '@/types/storefront';

interface CartProps {
    items: CartItem[];
    summary: CartSummary;
}

export default function Cart({ items, summary }: CartProps) {
    return (
        <>
            <Head title="Warenkorb">
                <meta
                    name="description"
                    content="Warenkorb für MARAWE Produkte."
                />
            </Head>
            <div className="min-h-screen bg-background font-sans">
                <StorefrontHeader />

                <main>
                    <section className="bg-ink pt-40 pb-20 text-white lg:pb-28">
                        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold uppercase">
                                Warenkorb
                            </p>
                            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl">
                                Ihre Produktauswahl ist bereit zur Prüfung.
                            </h1>
                            <p className="mt-6 max-w-2xl text-white/75">
                                Diese Cart-Seite ist als vollständige
                                Platzhalter-Oberfläche vorbereitet. Mengen,
                                Entfernen und Checkout können später direkt an
                                echte Warenkorb-Logik angeschlossen werden.
                            </p>
                        </div>
                    </section>

                    <section className="py-24 lg:py-32">
                        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_24rem] lg:px-8">
                            <div className="grid gap-4">
                                {items.map((item) => (
                                    <article
                                        key={item.product.slug}
                                        className="grid gap-5 rounded-lg border bg-card p-5 shadow-sm sm:grid-cols-[8rem_1fr] lg:p-6"
                                    >
                                        <Link
                                            href={productShow(
                                                item.product.slug,
                                            )}
                                            className="overflow-hidden rounded-md bg-secondary"
                                        >
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="aspect-square size-full object-cover"
                                                loading="lazy"
                                            />
                                        </Link>
                                        <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
                                            <div>
                                                <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                                                    {item.product.brand}
                                                </p>
                                                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight">
                                                    {item.product.name}
                                                </h2>
                                                <p className="mt-2 text-sm text-muted-foreground">
                                                    {item.product.excerpt}
                                                </p>
                                            </div>
                                            <div className="flex flex-col gap-4 lg:items-end">
                                                <p className="font-display text-xl font-bold">
                                                    {item.lineTotal}
                                                </p>
                                                <div className="flex items-center gap-2">
                                                    <Button
                                                        size="icon"
                                                        variant="outline"
                                                        aria-label="Menge reduzieren"
                                                    >
                                                        <Minus className="size-4" />
                                                    </Button>
                                                    <span className="flex h-9 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-semibold">
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        size="icon"
                                                        variant="outline"
                                                        aria-label="Menge erhöhen"
                                                    >
                                                        <Plus className="size-4" />
                                                    </Button>
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        aria-label="Artikel entfernen"
                                                    >
                                                        <Trash2 className="size-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            <aside className="h-fit rounded-lg border bg-card p-6 shadow-sm lg:sticky lg:top-24">
                                <div className="flex items-center gap-3">
                                    <span className="flex size-11 items-center justify-center rounded-md bg-brand text-white">
                                        <ShoppingBag
                                            className="size-5"
                                            aria-hidden
                                        />
                                    </span>
                                    <div>
                                        <h2 className="font-display text-2xl font-bold tracking-tight">
                                            Zusammenfassung
                                        </h2>
                                        <p className="text-sm text-muted-foreground">
                                            {items.length} Artikel im Warenkorb
                                        </p>
                                    </div>
                                </div>
                                <dl className="mt-8 grid gap-4 text-sm">
                                    <div className="flex justify-between gap-4">
                                        <dt className="text-muted-foreground">
                                            Zwischensumme
                                        </dt>
                                        <dd className="font-semibold">
                                            {summary.subtotal}
                                        </dd>
                                    </div>
                                    <div className="flex justify-between gap-4">
                                        <dt className="text-muted-foreground">
                                            Versand
                                        </dt>
                                        <dd className="font-semibold">
                                            {summary.shipping}
                                        </dd>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex justify-between gap-4">
                                            <dt className="font-semibold">
                                                Gesamt
                                            </dt>
                                            <dd className="font-display text-2xl font-bold">
                                                {summary.total}
                                            </dd>
                                        </div>
                                        <p className="mt-2 text-xs text-muted-foreground">
                                            {summary.taxNote}
                                        </p>
                                    </div>
                                </dl>
                                <Button
                                    size="lg"
                                    className="mt-8 w-full bg-brand hover:bg-brand-soft"
                                >
                                    Checkout now
                                    <ArrowRight data-icon="inline-end" />
                                </Button>
                                <Button
                                    asChild
                                    size="lg"
                                    variant="outline"
                                    className="mt-3 w-full"
                                >
                                    <Link href={productsIndex()}>
                                        Weiter einkaufen
                                    </Link>
                                </Button>
                            </aside>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}
