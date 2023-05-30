import '../../styles/globals.scss';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import styles from '../../styles/productPage.module.scss';
import AddToCart from './addtocart';

// define type of params productId = string because it's from the URL
type Props = {
  params: { productId: string };
};

export default async function ProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId)); // calling function from database to get productId with url params
  if (!singleProduct) {
    notFound();
  }

  return (
    <main className={styles.main}>
      <section className={styles.product}>
        <div className={styles.productCard}>
          <h1>{singleProduct.name}</h1>
          <figure className={styles.productImage}>
            <Image
              alt={singleProduct.name}
              src={`/images/${singleProduct.type}.jpeg`}
              data-test-id="product-image"
              width={512}
              height={512}
            />
          </figure>
          <figcaption className={styles.productInfo}>
            Meet {singleProduct.name} the {singleProduct.type}, a plush baby
            animal in it's very own toy car.
            <br /> Cuteness and adventure await!
          </figcaption>
          <p>
            Price:{' '}
            <span data-test-id="product-price">{singleProduct.price}</span> €
          </p>
          <AddToCart productId={singleProduct.id} />
        </div>
      </section>
    </main>
  );
}
