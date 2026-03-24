import { NavLink } from 'react-router';

import styles from './Footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.footerContainer}>
            <div className={styles.footerContent}>
                <div className={styles.copyright}>© 2026</div>
                <div className={styles.links}>
                    <NavLink to='/'>Главная</NavLink>
                    <div className={styles.dot}></div>
                    <NavLink to='/works'>Работы</NavLink>
                    <div className={styles.dot}></div>
                    <NavLink to='/about'>Обо мне</NavLink>
                </div>
                <div className={styles.name}>Евгения Фаргер</div>
            </div>
            <div className={styles.blobs}>
                <div className={`${styles.blob} ${styles.peach}`}></div>
                <div className={`${styles.blob} ${styles.blue}`}></div>
                <div className={`${styles.blob} ${styles.pink}`}></div>
            </div>
        </div>
    </footer>
);
