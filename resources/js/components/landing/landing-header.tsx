import Topnav from '@/components/topnav/topnav';
import { maraweTopnavOptions } from '@/components/topnav/topnav-options';

export default function LandingHeader() {
    return (
        <Topnav
            options={maraweTopnavOptions}
            headerClass="bg-ink/80"
            accentClass="text-brand"
            showAuthAction
        />
    );
}
