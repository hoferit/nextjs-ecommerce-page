import './styles/globals.scss';
import styles from './styles/page.module.scss';

export default function Home() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Welcome to Speedy Pals!</h1>
        <h1>Buy your own Speedy Pal!</h1>
        <h1>Toy Car included!</h1>
      </section>
    </main>
  );
}
