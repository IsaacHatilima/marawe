export interface BrandAccent {
    eyebrow: string;
    chip: string;
}

export const brandAccents: Record<string, BrandAccent> = {
    Tifoo: {
        eyebrow: 'text-tifoo dark:text-tifoo-accent',
        chip: 'bg-tifoo text-white',
    },
    Goldanalytix: {
        eyebrow: 'text-gold-deep dark:text-glx',
        chip: 'bg-glx text-ink',
    },
    Tobolin: {
        eyebrow: 'text-tobolin dark:text-tobolin-accent',
        chip: 'bg-tobolin text-white',
    },
};

export const defaultBrandAccent: BrandAccent = {
    eyebrow: 'text-brand',
    chip: 'bg-white text-ink',
};

export function getBrandAccent(brand: string): BrandAccent {
    return brandAccents[brand] ?? defaultBrandAccent;
}
