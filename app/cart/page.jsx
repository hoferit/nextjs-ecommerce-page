import '../styles/globals.scss';
import Link from 'next/link';
import styles from '../styles/cartPage.module.scss';
import CartItems from './cartitems';
import TotalPrice from './totalprice';

export default function ShoppingCartPage() {
  return (
    <main className={styles.main}>
      <h1>Basket</h1>
      <section className={styles.items}>
        <div className={styles.itemsWrapper}>
          {/* @ts-expect-error Server Component */}
          <CartItems />
        </div>
      </section>
      <section className={styles.total}>
        <TotalPrice />
        <Link
          className={styles.checkoutButton}
          href="/checkout"
          data-test-id="cart-checkout"
        >
          Checkout
        </Link>
      </section>
    </main>
  );
}
