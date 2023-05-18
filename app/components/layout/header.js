import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link href="/" className={styles.headerLogo}>
          <Image src="/splogo.jpg" width="200" height="200" />
        </Link>
        <ul>
          <li className={styles.headerLinkWrap}>
            <Link className={styles.headerLink} href="/products">
              Products
            </Link>
          </li>
          <li className={styles.headerCartWrap}>
            <Link className={styles.headerCartLink} href="/ShoppingCartPage">
              Shopping Cart
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
