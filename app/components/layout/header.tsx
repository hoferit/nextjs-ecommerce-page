import '../../styles/globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <Link href="/" className={styles.headerLogo}>
          <Image
            src="/splogo.jpg"
            alt="speedypals logo"
            width="300"
            height="300"
          />
        </Link>
        <div className={styles.headerLinkBox}>
          <div className={styles.headerLinkWrap}>
            <Link className={styles.headerLink} href="/about">
              About
            </Link>
          </div>
          <div className={styles.headerLinkWrap}>
            <Link
              className={styles.headerLink}
              href="/products"
              data-test-id="products-link"
            >
              Products
            </Link>
          </div>
          <div className={styles.headerCartWrap}>
            <Link className={styles.headerCartLink} href="/cart">
              <Image
                src="/carticonblue.svg"
                alt="cart icon"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
