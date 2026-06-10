import { faqs } from '@/components/landing/landing-data';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqSection() {
    return (
        <section className="bg-background py-24 lg:py-32">
            <div className="mx-auto w-full max-w-3xl px-6 lg:px-8">
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-brand uppercase">
                        Häufige Fragen
                    </p>
                    <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                        Gut zu wissen.
                    </h2>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => (
                        <AccordionItem key={faq.question} value={faq.question}>
                            <AccordionTrigger className="text-left font-medium">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
