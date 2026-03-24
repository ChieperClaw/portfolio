import { Outlet } from 'react-router';

import { ContactSection } from '../ContactSection/ContactSection';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';

export const Layout = () => (
    <>
        <Navigation />
        <Outlet />
        <ContactSection />
        <Footer />
    </>
);
