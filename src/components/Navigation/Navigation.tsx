import { useEffect, useState } from 'react';
import { NavLink } from 'react-router';

import { Footer } from '../Footer/Footer';

import styles from './Navigation.module.scss';
import { IconBurger, IconClose, ShapeAbout, ShapeGlavnaya, ShapeGlavnayaMobile, ShapeRaboty } from './NavShapes';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Desktop nav */}
            <nav className={styles.nav}>
                <NavLink to='/' className={styles.btnGlavnaya}>
                    <ShapeGlavnaya className={styles.shape} />
                    <span className={styles.label}>Главная</span>
                </NavLink>

                <NavLink to='/works' className={styles.btnRaboty}>
                    <ShapeRaboty className={styles.shape} />
                    <span className={styles.label}>Работы</span>
                </NavLink>

                <NavLink to='/about' className={styles.btnAbout}>
                    <ShapeAbout className={styles.shape} />
                    <span className={styles.label}>Обо мне</span>
                </NavLink>

                <button className={styles.burgerBtn} onClick={open} aria-label='Открыть меню'>
                    <IconBurger />
                </button>
            </nav>

            <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}>
                <button className={styles.closeBtn} onClick={close} aria-label='Закрыть меню'>
                    <IconClose />
                </button>

                <nav className={styles.mobileNav}>
                    <NavLink to='/' className={styles.mobileGlavnaya} onClick={close}>
                        <ShapeGlavnayaMobile className={styles.mobileShape} />
                        <span className={styles.mobileLabel}>Главная</span>
                    </NavLink>

                    <NavLink to='/works' className={styles.mobileRaboty} onClick={close}>
                        <ShapeRaboty className={styles.mobileShape} />
                        <span className={styles.mobileLabel}>Работы</span>
                    </NavLink>

                    <NavLink to='/about' className={styles.mobileAbout} onClick={close}>
                        <ShapeAbout className={styles.mobileShape} />
                        <span className={styles.mobileLabel}>Обо мне</span>
                    </NavLink>
                </nav>

                <Footer />
            </div>
        </>
    );
};
