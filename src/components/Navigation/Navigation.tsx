import { NavLink } from 'react-router';
import styles from './Navigation.module.scss';

const navItems = [
  { to: '/', label: 'Главная', color: 'pink' as const },
  { to: '/works', label: 'Работы', color: 'blue' as const },
  { to: '/about', label: 'Обо мне', color: 'salmon' as const },
];

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      {navItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `${styles.pill} ${styles[item.color]} ${isActive ? styles.active : ''}`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}
