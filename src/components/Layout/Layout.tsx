import { Outlet } from 'react-router';

import { ContactSection } from '../ContactSection/ContactSection';
import { Footer } from '../Footer/Footer';
import { Navigation } from '../Navigation/Navigation';
import { ScrollToTopOnNavigate } from '../ScrollToTopOnNavigate/ScrollToTopOnNavigate';

export const Layout = () => (
    <>
        <ScrollToTopOnNavigate />
        <Navigation />
        <Outlet />
        <ContactSection />
        <Footer />
    </>
);
