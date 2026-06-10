import { Facebook, Instagram, Youtube } from 'lucide-react';
import type { ComponentType } from 'react';
import { cn } from '@/lib/utils';

export function PinterestIcon({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
            className={className}
        >
            <path d="M12 2a10 10 0 0 0-3.64 19.31c-.05-.8-.1-2.03.02-2.9.11-.8.74-5.08.74-5.08s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.4.8.89 0 .54-.35 1.36-.53 2.11-.15.63.32 1.15.94 1.15 1.13 0 2-1.19 2-2.91 0-1.52-1.1-2.59-2.66-2.59a2.76 2.76 0 0 0-2.88 2.77c0 .55.21 1.14.48 1.46a.19.19 0 0 1 .04.18c-.05.2-.16.63-.18.72-.03.12-.1.15-.22.09-.83-.39-1.34-1.6-1.34-2.57 0-2.09 1.52-4.02 4.39-4.02 2.3 0 4.1 1.64 4.1 3.84 0 2.29-1.45 4.14-3.45 4.14-.68 0-1.31-.35-1.53-.77l-.41 1.58c-.15.58-.55 1.3-.82 1.74A10 10 0 1 0 12 2Z" />
        </svg>
    );
}

export interface SocialLink {
    icon: ComponentType<{ className?: string }>;
    label: string;
    href: string;
}

export const marawSocialLinks: SocialLink[] = [
    {
        icon: Facebook,
        label: "Facebook",
        href: "https://www.facebook.com/tifoo.galvanik/",
    },
    {
        icon: Instagram,
        label: "Instagram",
        href: "https://www.instagram.com/tifoogalvanik/",
    },
    {
        icon: PinterestIcon,
        label: "Pinterest",
        href: "https://de.pinterest.com/tifoogalvanik/",
    },
    {
        icon: Youtube,
        label: "YouTube",
        href: "https://www.youtube.com/user/TifooTech",
    },
];

export const socialLinks = marawSocialLinks;

export function SocialIconRow({
    hoverClass,
    links = marawSocialLinks,
}: {
    hoverClass: string;
    links?: SocialLink[];
}) {
    return (
        <div className="flex gap-2">
            {links.map((social) => (
                <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                        'inline-flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors',
                        hoverClass,
                    )}
                >
                    <social.icon className="size-4" />
                </a>
            ))}
        </div>
    );
}
