import '../styles/globals.scss';
import styles from '../styles/cartPage.module.scss';

export default function ShoppingCartPage() {
  return (
    <main className={styles.main}>
      <h1>Basket</h1>
      <section className={styles.items}>
        <div className={styles.itemsWrapper}></div>
      </section>
      <section className={styles.total}>
        <div className={styles.totalWrapper}></div>
      </section>
    </main>
  );
}
