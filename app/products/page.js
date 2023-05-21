import '../styles/globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '../../database/products';
import styles from '../styles/productsPage.module.scss';

export default function ProductsPage() {
  return (
    <main className={styles.main}>
      <h1>Our Products</h1>
      <section className={styles.products}>
        {products.map((product) => {
          // map through product database and return all products
          return (
            <div
              key={`product-div-${product.id}`}
              className={styles.productCard}
            >
              <figure className={styles.productImage}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    src={`/images/${product.type}.jpeg`}
                    width="350"
                    height="350"
                  />
                </Link>
              </figure>
              <figcaption className={styles.productInfo}>
                <h4>
                  {product.name} the {product.type}
                </h4>
                <h6>{product.price} €</h6>
              </figcaption>
            </div>
          );
        })}
      </section>
    </main>
  );
}
