import { useCallback, useEffect, useState } from 'react';
import type { StorefrontProduct } from '@/types/storefront';

export interface CartEntry {
    product: StorefrontProduct;
    quantity: number;
}

const STORAGE_KEY = 'marawe-cart';
const CART_EVENT = 'marawe-cart-updated';

function readEntries(): CartEntry[] {
    if (typeof window === 'undefined') {
        return [];
    }

    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        const parsed: unknown = raw ? JSON.parse(raw) : [];

        return Array.isArray(parsed) ? (parsed as CartEntry[]) : [];
    } catch {
        return [];
    }
}

function writeEntries(entries: CartEntry[]): void {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    window.dispatchEvent(new Event(CART_EVENT));
}

export function formatPriceCents(cents: number): string {
    return `${(cents / 100).toLocaleString('de-DE', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })} €`;
}

export function useCart() {
    const [entries, setEntries] = useState<CartEntry[]>([]);

    useEffect(() => {
        const sync = () => setEntries(readEntries());

        sync();
        window.addEventListener(CART_EVENT, sync);
        window.addEventListener('storage', sync);

        return () => {
            window.removeEventListener(CART_EVENT, sync);
            window.removeEventListener('storage', sync);
        };
    }, []);

    const addToCart = useCallback(
        (product: StorefrontProduct, quantity: number = 1) => {
            const current = readEntries();
            const existing = current.find(
                (entry) => entry.product.slug === product.slug,
            );
            const next = existing
                ? current.map((entry) =>
                      entry.product.slug === product.slug
                          ? { ...entry, quantity: entry.quantity + quantity }
                          : entry,
                  )
                : [...current, { product, quantity }];

            writeEntries(next);
        },
        [],
    );

    const setQuantity = useCallback((slug: string, quantity: number) => {
        const next = readEntries()
            .map((entry) =>
                entry.product.slug === slug ? { ...entry, quantity } : entry,
            )
            .filter((entry) => entry.quantity > 0);

        writeEntries(next);
    }, []);

    const removeFromCart = useCallback((slug: string) => {
        writeEntries(
            readEntries().filter((entry) => entry.product.slug !== slug),
        );
    }, []);

    const clearCart = useCallback(() => {
        writeEntries([]);
    }, []);

    const itemCount = entries.reduce((sum, entry) => sum + entry.quantity, 0);
    const subtotalCents = entries.reduce(
        (sum, entry) => sum + entry.product.priceCents * entry.quantity,
        0,
    );

    return {
        entries,
        itemCount,
        subtotalCents,
        subtotal: formatPriceCents(subtotalCents),
        addToCart,
        setQuantity,
        removeFromCart,
        clearCart,
    };
}
