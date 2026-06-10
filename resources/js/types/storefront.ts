export interface StorefrontProduct {
    slug: string;
    name: string;
    brand: string;
    category: string;
    price: string;
    priceCents: number;
    image: string;
    productNumber?: string;
    deliveryTime?: string;
    badge: string;
    excerpt: string;
    description: string;
    descriptionBody?: string[];
    highlights: string[];
    scopeOfDelivery?: string[];
    downloads?: string[];
    safetyInfo?: string[];
    manufacturer?: {
        name: string;
        address: string[];
        phone: string;
        email: string;
    };
    reviewNote?: string;
    specifications: Record<string, string>;
}

export interface CartItem {
    product: StorefrontProduct;
    quantity: number;
    lineTotal: string;
}

export interface CartSummary {
    subtotal: string;
    shipping: string;
    taxNote: string;
    total: string;
}
