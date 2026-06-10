import Autoplay from 'embla-carousel-autoplay';
import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { heroSlides } from '@/components/landing/landing-data';
import { Button } from '@/components/ui/button';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import type { CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

export default function HeroCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [autoplay] = useState(() =>
        Autoplay({ delay: 6000, stopOnInteraction: false }),
    );

    useEffect(() => {
        if (!api) {
            return;
        }

        const onSelect = () => setSelectedIndex(api.selectedScrollSnap());

        onSelect();
        api.on('select', onSelect);

        return () => {
            api.off('select', onSelect);
        };
    }, [api]);

    return (
        <section id="start" className="relative bg-ink text-white">
            <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                plugins={[autoplay]}
                className="group"
            >
                <CarouselContent className="ml-0">
                    {heroSlides.map((slide) => (
                        <CarouselItem key={slide.title} className="pl-0">
                            <div className="relative flex min-h-[88svh] items-end">
                                <img
                                    src={slide.image}
                                    alt={slide.imageAlt}
                                    className="absolute inset-0 size-full"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
                                <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-transparent" />

                                <div className="relative mx-auto w-full max-w-7xl px-6 pt-40 pb-24 lg:px-8 lg:pb-32">
                                    {/*<p className="mb-4 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                                        {slide.eyebrow}
                                    </p>
                                    <h1 className="max-w-3xl font-display text-4xl leading-[1.05] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
                                        {slide.title}
                                    </h1>
                                    <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">
                                        {slide.description}
                                    </p>*/}
                                    <div className="mt-9 flex flex-wrap items-center gap-4">
                                        <Button asChild size="lg">
                                            <a href={slide.cta.href}>
                                                {slide.cta.label}
                                            </a>
                                        </Button>
                                        <Button
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
                                        >
                                            <a href="#kontakt">
                                                Kontakt aufnehmen
                                                <ArrowDown data-icon="inline-end" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="left-6 hidden border-white/20 bg-white/10 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white/20 hover:text-white lg:inline-flex" />
                <CarouselNext className="right-6 hidden border-white/20 bg-white/10 text-white opacity-0 transition-opacity group-hover:opacity-100 hover:bg-white/20 hover:text-white lg:inline-flex" />
            </Carousel>

            <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-2.5">
                {heroSlides.map((slide, index) => (
                    <button
                        key={slide.title}
                        type="button"
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Slide ${index + 1} anzeigen`}
                        className={cn(
                            'h-1.5 rounded-full transition-all duration-300',
                            index === selectedIndex
                                ? 'w-8 bg-gold'
                                : 'w-3 bg-white/30 hover:bg-white/50',
                        )}
                    />
                ))}
            </div>
        </section>
    );
}
