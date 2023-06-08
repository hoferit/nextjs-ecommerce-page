import '../../styles/globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import { getCartItemsWithPrice } from '../cart/getCartItemsWithPrice';

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
        <Link href="/">
          <Image
            priority={true}
            src="/splogo.jpg"
            alt="speedypals logo"
            width="358"
            height="325"
          />
        </Link>
        <div className={styles.headerLinkBox}>
          <div>
            <Link href="/about">About</Link>
          </div>
          <div>
            <Link href="/products" data-test-id="products-link">
              Products
            </Link>
          </div>
          <div>
            <Link
              className={styles.headerCartLink}
              href="/cart"
              data-test-id="cart-link"
            >
              <Image
                className={styles.headerCartLogo}
                src="/carticonblue.svg"
                alt="cart icon"
                width="100"
                height="100"
              />
              {totalQuantity !== 0 ? (
                <div className={styles.circle} data-test-id="cart-count">
                  {totalQuantity}
                </div>
              ) : null}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
