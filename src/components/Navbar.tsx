import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href='/'>
          <img className={styles.logoWrapper} src={`/logo.png`} alt="logo"/>
          </Link>
        </div>
        <div className={styles.linkWrapper}>
          <ul>
            <li>
              <Link href='#services'>SERVICES</Link>
            </li>
            <li>
              <Link href='#about'>ABOUT</Link>
            </li>
            <li>
              <Link href='#contact'>CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
