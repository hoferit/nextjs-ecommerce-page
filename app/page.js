import './styles/globals.scss';
import styles from './styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to my Shop</h1>
      <section>
        <h1>Buy your own Speedy Pal! Toy Car included!</h1>
      </section>
    </main>
  );
}
