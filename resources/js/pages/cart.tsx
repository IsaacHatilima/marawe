import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    CircleCheck,
    Minus,
    Plus,
    ShoppingBag,
    Trash2,
} from 'lucide-react';
import { useState } from 'react';
import StorefrontHeader from '@/components/storefront/storefront-header';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { formatPriceCents, useCart } from '@/hooks/use-cart';
import { index as productsIndex, show as productShow } from '@/routes/products';

export default function Cart() {
    const {
        entries,
        itemCount,
        subtotal,
        setQuantity,
        removeFromCart,
        clearCart,
    } = useCart();
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    const handleCheckout = () => {
        setIsOrderPlaced(true);
    };

    const handleOrderDialogChange = (open: boolean) => {
        setIsOrderPlaced(open);

        if (!open) {
            clearCart();
        }
    };

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
                    <section className="border-b border-border/60 pt-32 pb-12 lg:pb-16">
                        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                            <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                                Warenkorb
                            </p>
                            <h1 className="max-w-3xl font-display text-3xl font-bold tracking-tight text-balance text-foreground sm:text-4xl">
                                {entries.length > 0
                                    ? 'Ihre Produktauswahl ist bereit zur Prüfung.'
                                    : 'Ihr Warenkorb ist noch leer.'}
                            </h1>
                            <p className="mt-4 max-w-2xl text-muted-foreground">
                                {entries.length > 0
                                    ? 'Mengen anpassen, Artikel entfernen und zur Kasse gehen – die Bestellung ist eine Demo ohne echte Zahlung.'
                                    : 'Legen Sie Produkte aus der Produktliste in den Warenkorb, um sie hier zu sehen.'}
                            </p>
                        </div>
                    </section>

                    <section className="py-16">
                        {entries.length === 0 ? (
                            <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-6 lg:px-8">
                                <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-muted-foreground">
                                    <ShoppingBag
                                        className="size-6"
                                        aria-hidden
                                    />
                                </span>
                                <Button
                                    asChild
                                    size="lg"
                                    className="bg-brand hover:bg-brand-soft"
                                >
                                    <Link href={productsIndex()}>
                                        Zur Produktliste
                                        <ArrowRight data-icon="inline-end" />
                                    </Link>
                                </Button>
                            </div>
                        ) : (
                            <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_24rem] lg:px-8">
                                <div className="grid gap-4 self-start">
                                    {entries.map((entry) => (
                                        <article
                                            key={entry.product.slug}
                                            className="grid gap-5 rounded-xl border border-border/80 bg-card p-5 transition-shadow hover:shadow-float sm:grid-cols-[8rem_1fr] lg:p-6"
                                        >
                                            <Link
                                                href={productShow(
                                                    entry.product.slug,
                                                )}
                                                className="overflow-hidden rounded-lg bg-secondary"
                                            >
                                                <img
                                                    src={entry.product.image}
                                                    alt={entry.product.name}
                                                    className="aspect-square size-full object-cover"
                                                    loading="lazy"
                                                />
                                            </Link>
                                            <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
                                                <div>
                                                    <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                                                        {entry.product.brand}
                                                    </p>
                                                    <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
                                                        {entry.product.name}
                                                    </h2>
                                                    <p className="mt-2 text-sm text-muted-foreground">
                                                        {entry.product.excerpt}
                                                    </p>
                                                </div>
                                                <div className="flex flex-col gap-4 lg:items-end">
                                                    <p className="font-display text-lg font-semibold">
                                                        {formatPriceCents(
                                                            entry.product
                                                                .priceCents *
                                                                entry.quantity,
                                                        )}
                                                    </p>
                                                    <div className="flex items-center gap-2">
                                                        <div className="flex items-center rounded-full border border-border">
                                                            <button
                                                                type="button"
                                                                aria-label="Menge reduzieren"
                                                                onClick={() =>
                                                                    setQuantity(
                                                                        entry
                                                                            .product
                                                                            .slug,
                                                                        entry.quantity -
                                                                            1,
                                                                    )
                                                                }
                                                                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                                                            >
                                                                <Minus className="size-4" />
                                                            </button>
                                                            <span className="min-w-8 text-center text-sm font-semibold">
                                                                {entry.quantity}
                                                            </span>
                                                            <button
                                                                type="button"
                                                                aria-label="Menge erhöhen"
                                                                onClick={() =>
                                                                    setQuantity(
                                                                        entry
                                                                            .product
                                                                            .slug,
                                                                        entry.quantity +
                                                                            1,
                                                                    )
                                                                }
                                                                className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                                                            >
                                                                <Plus className="size-4" />
                                                            </button>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            aria-label="Artikel entfernen"
                                                            onClick={() =>
                                                                removeFromCart(
                                                                    entry
                                                                        .product
                                                                        .slug,
                                                                )
                                                            }
                                                            className="flex size-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                                                        >
                                                            <Trash2 className="size-4" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                <aside className="h-fit rounded-xl border border-border/80 bg-card p-6 shadow-float lg:sticky lg:top-24">
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-11 items-center justify-center rounded-full bg-brand text-white">
                                            <ShoppingBag
                                                className="size-5"
                                                aria-hidden
                                            />
                                        </span>
                                        <div>
                                            <h2 className="font-display text-xl font-semibold tracking-tight">
                                                Zusammenfassung
                                            </h2>
                                            <p className="text-sm text-muted-foreground">
                                                {itemCount} Artikel im Warenkorb
                                            </p>
                                        </div>
                                    </div>
                                    <dl className="mt-8 grid gap-4 text-sm">
                                        <div className="flex justify-between gap-4">
                                            <dt className="text-muted-foreground">
                                                Zwischensumme
                                            </dt>
                                            <dd className="font-semibold">
                                                {subtotal}
                                            </dd>
                                        </div>
                                        <div className="flex justify-between gap-4">
                                            <dt className="text-muted-foreground">
                                                Versand
                                            </dt>
                                            <dd className="font-semibold">
                                                Kostenlos
                                            </dd>
                                        </div>
                                        <div className="border-t border-border/80 pt-4">
                                            <div className="flex justify-between gap-4">
                                                <dt className="font-semibold">
                                                    Gesamt
                                                </dt>
                                                <dd className="font-display text-2xl font-semibold">
                                                    {subtotal}
                                                </dd>
                                            </div>
                                            <p className="mt-2 text-xs text-muted-foreground">
                                                Alle Preise inkl. gesetzlicher
                                                Mehrwertsteuer.
                                            </p>
                                        </div>
                                    </dl>
                                    <Button
                                        size="lg"
                                        onClick={handleCheckout}
                                        className="mt-8 w-full bg-brand hover:bg-brand-soft"
                                    >
                                        Zur Kasse gehen
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
                        )}
                    </section>
                </main>

                <Dialog
                    open={isOrderPlaced}
                    onOpenChange={handleOrderDialogChange}
                >
                    <DialogContent>
                        <DialogHeader>
                            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand/10 text-brand sm:mx-0">
                                <CircleCheck className="size-7" aria-hidden />
                            </span>
                            <DialogTitle className="pt-2">
                                Bestellung aufgegeben!
                            </DialogTitle>
                            <DialogDescription>
                                Vielen Dank! Ihre Bestellung über {subtotal}{' '}
                                wurde erfolgreich aufgegeben. Dies ist eine Demo
                                – es wurde keine echte Bestellung ausgelöst.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                            <Button
                                asChild
                                className="bg-brand hover:bg-brand-soft"
                                onClick={() => handleOrderDialogChange(false)}
                            >
                                <Link href={productsIndex()}>
                                    Weiter einkaufen
                                </Link>
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}
