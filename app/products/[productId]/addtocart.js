'use client';

import { useState } from 'react';
import styles from '../../styles/addtocart.module.scss';
import { createOrUpdateCart } from './actions';

export default function AddToCart(props) {
  const [products, setProducts] = useState(1);

  return (
    <form
      action={async () => {
        await createOrUpdateCart(props.productId, products);
      }}
    >
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
          value={products}
        />
        <button
          className={`${styles.quantityModifier} ${styles.right}`}
          onClick={() => setProducts((prevCount) => prevCount + 1)}
        >
          &#xff0b;
        </button>
      </div>

      <button
        data-test-id="product-add-to-cart"
        onClick={() => setProducts((prevCount) => prevCount + 1)}
      >
        add to cart
      </button>
    </form>
  );
}
