import { NavLink, useLocation } from 'react-router';
import styles from './Navigation.module.scss';

export default function Navigation() {
  const location = useLocation();
  
  const isHome = location.pathname === '/';
  const isWorks = location.pathname.startsWith('/works');
  const isAbout = location.pathname === '/about';

  return (
    <nav className={styles.nav}>
      <NavLink 
        to="/" 
        className={`${styles.btnGlavnaya} ${isHome ? styles.active : ''}`}
      >
        <svg className={styles.shape} viewBox="0 0 88 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Peanut/blob shape: two overlapping pills */}
          <rect x="0" y="0" width="88" height="44" rx="22" fill="currentColor"/>
          <rect x="0" y="36" width="88" height="44" rx="22" fill="currentColor"/>
        </svg>
        <span className={styles.label}>Главная</span>
      </NavLink>

      <NavLink 
        to="/works" 
        className={`${styles.btnRaboty} ${isWorks ? styles.active : ''}`}
      >
        <svg className={styles.shape} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Rounded square */}
          <rect width="80" height="80" rx="16" fill="currentColor"/>
        </svg>
        <span className={styles.label}>Работы</span>
      </NavLink>

      <NavLink 
        to="/about" 
        className={`${styles.btnAbout} ${isAbout ? styles.active : ''}`}
      >
        <svg className={styles.shape} viewBox="0 0 87 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Circle / pill */}
          <rect width="87" height="80" rx="40" fill="currentColor"/>
        </svg>
        <span className={styles.label}>Обо мне</span>
      </NavLink>
    </nav>
  );
}
