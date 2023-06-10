import '../styles/globals.scss';
import CartItems from '../components/cart/CartItems';
import TotalPrice from '../components/cart/TotalPrice';
import styles from '../styles/cartpage.module.scss';

export const metadata = {
  title: 'Shopping Cart',
  description: 'Shopping Cart overview before checkout',
};

export const dynamic = 'force-dynamic';

export default function ShoppingCartPage() {
  return (
    <main className={styles.main}>
      <section className={styles.itemsWrapper}>
        <h1>Shopping Cart</h1>

        <CartItems />

        <TotalPrice />
      </section>
    </main>
  );
}
