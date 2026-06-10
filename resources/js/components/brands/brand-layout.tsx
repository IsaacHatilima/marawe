import { Head } from '@inertiajs/react';
import type { ReactNode } from 'react';
import BrandFooter from '@/components/brands/brand-footer';
import type { BrandFooterConfig } from '@/components/brands/brand-footer';
import Topnav from '@/components/topnav/topnav';
import type { TopnavOptions } from '@/components/topnav/topnav-options';

interface BrandLayoutProps {
    title: string;
    description: string;
    headerClass: string;
    accentClass: string;
    topnav: TopnavOptions;
    footer: BrandFooterConfig;
    children: ReactNode;
}

export default function BrandLayout({
    title,
    description,
    headerClass,
    accentClass,
    topnav,
    footer,
    children,
}: BrandLayoutProps) {
    return (
        <>
            <Head title={title}>
                <meta name="description" content={description} />
            </Head>
            <div className="font-sans">
                <Topnav
                    options={topnav}
                    headerClass={headerClass}
                    accentClass={accentClass}
                />

                <main>{children}</main>
                <BrandFooter {...footer} />
            </div>
        </>
    );
}
