'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../../styles/addtocart.module.scss';
import { createOrUpdateCart } from './actions';

export default function Quantity(props) {
  const [products, setProducts] = useState(1);
  const router = useRouter();

  return (
    <div>
      <div className={styles.quantityWrap}>
        <button
          className={`${styles.quantityModifier} ${styles.left}`}
          onClick={() => setProducts((prevCount) => Math.max(0, prevCount - 1))}
        >
          &mdash;
        </button>
        <input
          className={styles.quantityInput}
          data-test-id="product-quantity"
          readOnly
          value={products}
        />
        <button
          className={`${styles.quantityModifier} ${styles.right}`}
          onClick={() => setProducts((prevCount) => prevCount + 1)}
        >
          &#xff0b;
        </button>
      </div>
      <form
        action={async () => {
          router.refresh();
          await createOrUpdateCart(props.productId, products);
        }}
      >
        <button
          data-test-id="product-add-to-cart"
          onClick={() => setProducts((prevCount) => prevCount + 1)}
        >
          add to cart
        </button>
      </form>
    </div>
  );
}
