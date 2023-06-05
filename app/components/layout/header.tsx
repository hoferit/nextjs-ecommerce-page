import '../../styles/globals.scss';
import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import { getCartItemsWithPrice } from '../cart/getcartitemspriceactions';

export default async function Header() {
  const cartItems = await getCartItemsWithPrice();
  const totalQuantity = cartItems
    .map((cartItem) => {
      return cartItem.quantity;
    })
    .reduce((total, singleItemQuantity) => total + singleItemQuantity, 0);

  return (
    <header>
      <nav className={styles.headerNav}>
        <Link href="/" className={styles.headerLogo}>
          <Image
            priority={true}
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
              {totalQuantity !== 0 ? (
                <div className={styles.circle}>{totalQuantity}</div>
              ) : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
