import { ArrowRight, Handshake } from 'lucide-react';

export default function PartnerBanner() {
    return (
        <section className="border-y-4 border-gold bg-brand-deep text-white">
            <a
                href="#kontakt"
                className="group mx-auto flex w-full max-w-7xl flex-col items-center gap-6 px-6 py-10 sm:flex-row lg:px-8"
            >
                <span className="flex size-16 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                    <Handshake className="size-8" aria-hidden />
                </span>
                <span className="flex-1 text-center sm:text-left">
                    <span className="block font-display text-2xl font-bold tracking-tight text-gold sm:text-3xl">
                        Werden Sie unser Vertriebspartner!
                    </span>
                    <span className="mt-1 block text-sm text-white/85 sm:text-base">
                        Erfahren Sie mehr über eine Zusammenarbeit mit uns.
                    </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-md border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    Jetzt anfragen
                    <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                    />
                </span>
            </a>
        </section>
    );
}
