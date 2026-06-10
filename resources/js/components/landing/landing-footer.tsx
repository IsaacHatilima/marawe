import { ArrowUp, Mail } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import type { FormEvent, ReactNode } from 'react';
import { socialLinks } from '@/components/brands/social-icon-row';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const shopServiceLinks = [
    { label: 'Kontakt', href: '/#kontakt' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
    { label: 'Impressum', href: '#' },
];

const informationLinks = [
    { label: 'EU-Förderung', href: '#' },
    { label: 'Goldanalytix – Gold Tester', href: '/marken/goldanalytix' },
    { label: 'Tifoo – Galvanotechnik', href: '/marken/tifoo' },
    { label: 'Tobolin – Horizontalsperren', href: '/marken/tobolin' },
    { label: 'Vertriebspartnerschaft', href: '/#kontakt' },
    { label: 'MARAWE Gruppe', href: '/#ueber-uns' },
    { label: 'Jobs & Karriere', href: '/#karriere' },
];

interface FooterColumnProps {
    title: string;
    delay: number;
    children: ReactNode;
}

function FooterColumn({ title, delay, children }: FooterColumnProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <h3 className="mb-4 font-display text-base font-bold tracking-tight text-brand">
                {title}
            </h3>
            {children}
        </motion.div>
    );
}

export default function LandingFooter() {
    const shouldReduceMotion = useReducedMotion();
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (hasAcceptedPrivacy) {
            setIsSubscribed(true);
        }
    };

    return (
        <footer
            id="kontakt"
            aria-labelledby="footer-heading"
            className="relative w-full overflow-hidden border-t border-white/10 bg-ink text-white"
        >
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <motion.div
                    className="absolute -top-32 left-1/2 size-80 -translate-x-1/2 rounded-full bg-brand/30 blur-[160px]"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  opacity: [0.2, 0.45, 0.2],
                                  scale: [0.9, 1.05, 0.95],
                              }
                    }
                    transition={
                        shouldReduceMotion
                            ? undefined
                            : {
                                  duration: 12,
                                  repeat: Infinity,
                                  ease: 'easeInOut',
                              }
                    }
                />
                <motion.div
                    className="absolute right-0 -bottom-36 size-96 rounded-full bg-gold/20 blur-[200px]"
                    animate={
                        shouldReduceMotion
                            ? undefined
                            : { opacity: [0.18, 0.4, 0.18], rotate: [0, 25, 0] }
                    }
                    transition={
                        shouldReduceMotion
                            ? undefined
                            : { duration: 16, repeat: Infinity, ease: 'linear' }
                    }
                />
            </div>

            <h2 id="footer-heading" className="sr-only">
                Fußzeile
            </h2>

            <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-10"
                >
                    <span className="inline-flex h-12 items-center rounded-md bg-white px-3 py-2">
                        <img
                            src="/marawe/marawe_logo.jpg"
                            alt="MARAWE GmbH & Co. KG Logo"
                            className="h-full w-auto object-contain"
                        />
                    </span>
                </motion.div>
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1fr_0.8fr_1.1fr_1.3fr]">
                    <FooterColumn title="Service Hotline" delay={0}>
                        <p className="text-sm text-white/70">
                            MARAWE Service und Beratung:
                        </p>
                        <a
                            href="tel:+499413784720"
                            className="mt-3 block font-display text-xl font-bold tracking-tight transition-colors hover:text-brand"
                        >
                            0941 - 37847200
                        </a>
                        <p className="mt-2 text-sm text-white/70">
                            Mo – Do: 09:00 - 16:00 Uhr
                            <br />
                            Fr: 09:00 - 14:00 Uhr
                        </p>
                        <a
                            href="mailto:info@marawe.de"
                            className="mt-3 inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand"
                        >
                            <Mail className="size-4" aria-hidden />
                            info@marawe.de
                        </a>
                    </FooterColumn>

                    <FooterColumn title="Shop Service" delay={0.1}>
                        <ul className="flex flex-col gap-2.5">
                            {shopServiceLinks.map((link) => (
                                <li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={
                                            shouldReduceMotion
                                                ? undefined
                                                : { x: 5 }
                                        }
                                        className="inline-block text-sm text-white/70 transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Informationen" delay={0.2}>
                        <ul className="flex flex-col gap-2.5">
                            {informationLinks.map((link) => (
                                <li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={
                                            shouldReduceMotion
                                                ? undefined
                                                : { x: 5 }
                                        }
                                        className="inline-block text-sm text-white/70 transition-colors hover:text-brand"
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>

                    <FooterColumn title="Newsletter" delay={0.3}>
                        <p className="text-sm leading-relaxed text-white/70">
                            Abonnieren Sie den kostenlosen MARAWE-Newsletter und
                            erfahren Sie alle Neuigkeiten rund um unsere Marken.
                            Durch Eintragen Ihrer Anmelde-E-Mail-Adresse können
                            Sie sich hier auch vom Newsletter abmelden.
                        </p>
                        {isSubscribed ? (
                            <p className="mt-4 text-sm font-medium text-gold">
                                Vielen Dank! Bitte bestätigen Sie die Anmeldung
                                in Ihrem Postfach.
                            </p>
                        ) : (
                            <form
                                onSubmit={handleNewsletterSubmit}
                                className="mt-4 flex flex-col gap-3"
                            >
                                <div className="flex gap-2">
                                    <Input
                                        type="email"
                                        required
                                        placeholder="Ihre E-Mail-Adresse"
                                        aria-label="E-Mail-Adresse für den Newsletter"
                                        className="h-10 border-white/15 bg-white/5 text-white placeholder:text-white/40"
                                    />
                                    <Button
                                        type="submit"
                                        size="sm"
                                        className="h-10"
                                        disabled={!hasAcceptedPrivacy}
                                        aria-label="Newsletter abonnieren"
                                    >
                                        <Mail aria-hidden />
                                    </Button>
                                </div>
                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="newsletter-privacy"
                                        checked={hasAcceptedPrivacy}
                                        onCheckedChange={(checked) =>
                                            setHasAcceptedPrivacy(
                                                checked === true,
                                            )
                                        }
                                        className="mt-0.5 border-white/30"
                                    />
                                    <Label
                                        htmlFor="newsletter-privacy"
                                        className="text-xs leading-relaxed font-normal text-white/60"
                                    >
                                        <span>
                                            Ich habe die{' '}
                                            <a
                                                href="#"
                                                className="text-brand underline underline-offset-2 hover:text-brand-soft"
                                            >
                                                Datenschutzbestimmungen
                                            </a>{' '}
                                            zur Kenntnis genommen.
                                        </span>
                                    </Label>
                                </div>
                            </form>
                        )}
                    </FooterColumn>
                </div>

                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="my-10 h-px bg-white/10"
                />

                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="flex gap-2">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 20,
                                    delay: 0.3 + index * 0.05,
                                }}
                                className="inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-brand hover:text-brand"
                            >
                                <social.icon className="size-4" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="text-center text-xs text-white/40">
                        <p>
                            * Alle Preise verstehen sich zzgl.{' '}
                            <a
                                href="#"
                                className="underline underline-offset-2 hover:text-brand"
                            >
                                Versandkosten
                            </a>{' '}
                            und ggf. Nachnahmegebühren, wenn nicht anders
                            beschrieben.
                        </p>
                        <p className="mt-1">
                            Copyright © {new Date().getFullYear()} MARAWE GmbH
                            &amp; Co. KG – Alle Rechte vorbehalten. · Fotos:
                            Unsplash (Platzhalter)
                        </p>
                    </div>

                    <Button
                        size="icon"
                        variant="outline"
                        onClick={scrollToTop}
                        aria-label="Nach oben scrollen"
                        className="rounded-full border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-brand"
                    >
                        <motion.span
                            animate={
                                shouldReduceMotion
                                    ? undefined
                                    : { y: [0, -3, 0] }
                            }
                            transition={
                                shouldReduceMotion
                                    ? undefined
                                    : { repeat: Infinity, duration: 1.5 }
                            }
                            className="inline-flex"
                        >
                            <ArrowUp aria-hidden />
                        </motion.span>
                    </Button>
                </div>
            </div>
        </footer>
    );
}
