import { Head } from '@inertiajs/react';
import AboutSection from '@/components/landing/about-section';
import BrandsSection from '@/components/landing/brands-section';
import CareerSection from '@/components/landing/career-section';
import FaqSection from '@/components/landing/faq-section';
import HeroCarousel from '@/components/landing/hero-carousel';
import InfoSection from '@/components/landing/info-section';
import LandingFooter from '@/components/landing/landing-footer';
import LandingHeader from '@/components/landing/landing-header';
import PartnerBanner from '@/components/landing/partner-banner';

export default function Welcome() {
    return (
        <>
            <Head title="MARAWE – Oberflächentechnik, Edelmetallprüfung & Bautenschutz">
                <meta
                    name="description"
                    content="MARAWE GmbH & Co. KG aus Regensburg: Vier Spezialmarken für Galvanik, Edelmetallprüfung, Bauwerksabdichtung und Spezialchemie – Tifoo, Goldanalytix, Tobolin und Walhalla-Chemie."
                />
            </Head>
            <div className="font-sans">
                <LandingHeader />
                <main>
                    <HeroCarousel />
                    <BrandsSection />
                    <InfoSection />
                    <PartnerBanner />
                    <AboutSection />
                    <CareerSection />
                    <FaqSection />
                </main>
                <LandingFooter />
            </div>
        </>
    );
}
