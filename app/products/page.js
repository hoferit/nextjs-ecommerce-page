import '../styles/globals.scss';
import Image from 'next/image';
import styles from '../styles/products.module.scss';

export default function ProductsPage() {
  return (
    <main className={styles.productsBox}>
      <section className={styles.products}>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/alpaca.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Millie the Alpaca</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/bunny.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Petey the Bunny</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/cow.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Selma the Cow</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/donkey.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Poochie the Donkey</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/elephant.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Buttercup the Elephant</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/fox.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Cookie the Fox</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/hippo.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Henry the Hippo</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/Owl.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Judy the Owl</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
        <div className={styles.productCard}>
          <figure className={styles.productImage}>
            <Image src="/images/raccoon.jpeg" width="350" height="350" />
          </figure>
          <figcaption className={styles.productInfo}>
            <h4>Wilbert the Raccoon</h4>
            <h6>42€</h6>
          </figcaption>
        </div>
      </section>
    </main>
  );
}
