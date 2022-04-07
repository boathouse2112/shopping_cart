import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Circular</h1>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/shop" className={styles.link}>
          Shop
        </Link>
      </nav>
    </header>
  );
};

export default Header;
