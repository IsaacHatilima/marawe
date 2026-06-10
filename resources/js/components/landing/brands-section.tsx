import { Link } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { brands } from '@/components/landing/landing-data';
import { goldanalytix, tifoo, tobolin } from '@/routes/brands';

const brandRoutes: Record<string, string> = {
    Tifoo: tifoo().url,
    Goldanalytix: goldanalytix().url,
    Tobolin: tobolin().url,
};

function BrandCard({ href, children }: { href?: string; children: ReactNode }) {
    const className =
        'group relative block overflow-hidden rounded-xl border bg-card';

    return href ? (
        <Link href={href} className={className}>
            {children}
        </Link>
    ) : (
        <article className={className}>{children}</article>
    );
}

export default function BrandsSection() {
    return (
        <section id="marken" className="bg-background py-24 lg:py-32">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
                <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div>
                        <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                            Unsere Marken
                        </p>
                        <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                            Drei Spezialisten. Ein Qualitätsversprechen.
                        </h2>
                    </div>
                    <p className="max-w-md text-muted-foreground">
                        Jede MARAWE-Marke ist auf ihr Fachgebiet fokussiert –
                        von der Galvanik über die Edelmetallprüfung bis zum
                        Bautenschutz.
                    </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {brands.map((brand) => (
                        <BrandCard
                            key={brand.name}
                            href={brandRoutes[brand.name]}
                        >
                            <div className="relative aspect-[16/9] overflow-hidden">
                                <img
                                    src={brand.image}
                                    alt={brand.imageAlt}
                                    loading="lazy"
                                    className="size-full object-contain p-6 pt-7 transition-transform duration-700 group-hover:scale-105"
                                />
                                <span
                                    className={`absolute top-0 left-0 h-1 w-full ${brand.accentClass}`}
                                />
                            </div>
                            <div className="p-6 lg:p-8">
                                <div className="mb-2 flex items-center justify-between">
                                    <h3 className="font-display text-2xl font-bold tracking-tight">
                                        {brand.name}
                                    </h3>
                                    <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand" />
                                </div>
                                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                                    {brand.field}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground">
                                    {brand.description}
                                </p>
                            </div>
                        </BrandCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
