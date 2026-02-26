import styles from './Footer.module.scss';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.copyright}>© 2026</div>
          <div className={styles.links}>
            <NavLink to="/">Главная</NavLink>
            <span className={styles.dot}>·</span>
            <NavLink to="/works">Работы</NavLink>
            <span className={styles.dot}>·</span>
            <NavLink to="/about">Обо мне</NavLink>
          </div>
          <div className={styles.name}>Евгения Фаргер</div>
        </div>
      </div>
      <div className={styles.blobs}>
        <div className={`${styles.blob} ${styles.peach}`}></div>
        <div className={`${styles.blob} ${styles.blue}`}></div>
        <div className={`${styles.blob} ${styles.pink}`}></div>
      </div>
    </footer>
  );
}
