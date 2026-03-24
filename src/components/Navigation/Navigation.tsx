import { useEffect, useState } from 'react';
import { NavLink, useMatch, useNavigate } from 'react-router';

import { Footer } from '../Footer/Footer';

import { LeftArrowIcon } from '@assets/icons';

import styles from './Navigation.module.scss';
import { IconBurger, IconClose, ShapeAbout, ShapeGlavnaya, ShapeGlavnayaMobile, ShapeRaboty } from './NavShapes';

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const projectDetailMatch = useMatch({ path: '/works/:projectId', end: true });

    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);

    const goBackFromProject = () => {
        navigate(-1);
    };

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
                {projectDetailMatch ? (
                    <button type='button' className={styles.projectBack} onClick={goBackFromProject}>
                        <span className={styles.projectBackIcon} aria-hidden>
                            <LeftArrowIcon width={14} height={21} />
                        </span>
                        <span>Назад</span>
                    </button>
                ) : null}
                <div className={styles.navTrailing}>
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
                </div>
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
