import { Clock, Mail, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { SocialIconRow } from '@/components/brands/social-icon-row';
import type { SocialLink } from '@/components/brands/social-icon-row';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export interface FooterLink {
    label: string;
    href: string;
}

export interface BrandFooterConfig {
    brandName: string;
    logo?: string;
    bgClass: string;
    accentClass: string;
    consultTitle: string;
    consultIntro: string;
    phone: string;
    email?: string;
    contactFormUrl?: string;
    whatsapp?: string;
    socials?: SocialLink[];
    serviceLinks: FooterLink[];
    infoLinks: FooterLink[];
    showNewsletter?: boolean;
}

interface PaymentBadge {
    name: string;
    src?: string;
    imgClass?: string;
}

const paymentBadges: PaymentBadge[] = [
    { name: 'PayPal', src: '/footer/paypal-3.svg' },
    { name: 'Rechnung' },
    { name: 'Mastercard', src: '/footer/mastercard.svg', imgClass: 'h-8' },
    { name: 'Visa', src: '/footer/visa-logo.svg', imgClass: 'h-7' },
    { name: 'SEPA', src: '/footer/sepa.svg', imgClass: 'h-9 scale-[1.7]' },
    { name: 'Vorkasse' },
    { name: 'Nachnahme' },
    { name: 'DHL', src: '/footer/dhl.svg' },
];

function NewsletterForm({ accentClass }: { accentClass: string }) {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [hasAcceptedPrivacy, setHasAcceptedPrivacy] = useState(false);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (hasAcceptedPrivacy) {
            setIsSubscribed(true);
        }
    };

    if (isSubscribed) {
        return (
            <p className={cn('text-sm font-medium', accentClass)}>
                Vielen Dank! Bitte bestätigen Sie die Anmeldung in Ihrem
                Postfach.
            </p>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                    id="brand-newsletter-privacy"
                    checked={hasAcceptedPrivacy}
                    onCheckedChange={(checked) =>
                        setHasAcceptedPrivacy(checked === true)
                    }
                    className="mt-0.5 border-white/30"
                />
                <Label
                    htmlFor="brand-newsletter-privacy"
                    className="text-xs leading-relaxed font-normal text-white/60"
                >
                    <span>
                        Ich habe die{' '}
                        <a
                            href="#"
                            className={cn(
                                'underline underline-offset-2',
                                accentClass,
                            )}
                        >
                            Datenschutzbestimmungen
                        </a>{' '}
                        zur Kenntnis genommen.
                    </span>
                </Label>
            </div>
        </form>
    );
}

export default function BrandFooter({
    brandName,
    logo,
    bgClass,
    accentClass,
    consultTitle,
    consultIntro,
    phone,
    email,
    contactFormUrl,
    whatsapp,
    socials,
    serviceLinks,
    infoLinks,
    showNewsletter = false,
}: BrandFooterConfig) {
    return (
        <footer
            id="kontakt"
            className={cn('border-t border-white/10 text-white', bgClass)}
        >
            <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
                {logo && (
                    <div className="mb-10">
                        <span className="inline-flex h-12 items-center rounded-md bg-white px-2 py-1.5">
                            <img
                                src={logo}
                                alt={`${brandName} Logo`}
                                className="h-full w-auto object-contain"
                            />
                        </span>
                    </div>
                )}
                <div
                    className={cn(
                        'grid gap-10 md:grid-cols-2',
                        showNewsletter
                            ? 'lg:grid-cols-[1.1fr_0.9fr_1fr_1.2fr]'
                            : 'lg:grid-cols-3',
                    )}
                >
                    <div>
                        <h3
                            className={cn(
                                'mb-4 font-display text-base font-bold tracking-tight',
                                accentClass,
                            )}
                        >
                            {consultTitle}
                        </h3>
                        <p className="text-sm text-white/70">{consultIntro}</p>
                        <div className="mt-4 flex flex-col gap-2.5 text-sm text-white/80">
                            <a
                                href={`tel:${phone.replace(/[^+\d]/g, '')}`}
                                className="flex items-center gap-2 transition-colors hover:text-white"
                            >
                                <Phone className="size-4" aria-hidden />
                                {phone}
                            </a>
                            {whatsapp && (
                                <p className="flex items-center gap-2">
                                    <MessageCircle
                                        className="size-4"
                                        aria-hidden
                                    />
                                    WhatsApp: {whatsapp}
                                </p>
                            )}
                            {email && (
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-2 transition-colors hover:text-white"
                                >
                                    <Mail className="size-4" aria-hidden />
                                    {email}
                                </a>
                            )}
                            {contactFormUrl && (
                                <a
                                    href={contactFormUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 underline underline-offset-2 transition-colors hover:text-white"
                                >
                                    <Mail className="size-4" aria-hidden />
                                    Oder über unser Kontaktformular
                                </a>
                            )}
                            <p className="flex items-center gap-2">
                                <Clock className="size-4" aria-hidden />
                                Mo – Do: 09:00 - 16:00 Uhr · Fr: 09:00 - 14:00
                                Uhr
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3
                            className={cn(
                                'mb-4 font-display text-base font-bold tracking-tight',
                                accentClass,
                            )}
                        >
                            Service
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {serviceLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3
                            className={cn(
                                'mb-4 font-display text-base font-bold tracking-tight',
                                accentClass,
                            )}
                        >
                            Informationen
                        </h3>
                        <ul className="flex flex-col gap-2.5">
                            {infoLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-white/70 transition-colors hover:text-white"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {showNewsletter && (
                        <div>
                            <h3
                                className={cn(
                                    'mb-4 font-display text-base font-bold tracking-tight',
                                    accentClass,
                                )}
                            >
                                Newsletter abonnieren
                            </h3>
                            <NewsletterForm accentClass={accentClass} />
                        </div>
                    )}
                </div>

                <div className="mt-12 border-t border-white/10 pt-8">
                    <h3
                        className={cn(
                            'mb-4 font-display text-base font-bold tracking-tight',
                            accentClass,
                        )}
                    >
                        Zahlung &amp; Versand
                    </h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {paymentBadges.map((badge) => (
                            <span
                                key={badge.name}
                                className="flex h-9 items-center overflow-hidden rounded-md bg-white px-2.5"
                            >
                                {badge.src ? (
                                    <img
                                        src={badge.src}
                                        alt={badge.name}
                                        loading="lazy"
                                        className={cn(
                                            'h-5 w-auto object-contain',
                                            badge.imgClass,
                                        )}
                                    />
                                ) : (
                                    <span className="text-[11px] font-bold tracking-wide text-ink uppercase">
                                        {badge.name}
                                    </span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-8">
                    <p className="text-sm font-medium text-white/80">
                        Finde mehr Inspiration auf:
                    </p>
                    <SocialIconRow
                        links={socials}
                        hoverClass="hover:border-white/60 hover:text-white"
                    />
                    <div className="text-center text-xs text-white/40">
                        <p>
                            * Alle Preise verstehen sich zzgl.{' '}
                            <a
                                href="#"
                                className="underline underline-offset-2 hover:text-white"
                            >
                                Versandkosten
                            </a>{' '}
                            und ggf. Nachnahmegebühren, wenn nicht anders
                            beschrieben.
                        </p>
                        <p className="mt-1">
                            Copyright © {new Date().getFullYear()} {brandName} –
                            eine Marke der MARAWE GmbH &amp; Co. KG. Alle Rechte
                            vorbehalten.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
