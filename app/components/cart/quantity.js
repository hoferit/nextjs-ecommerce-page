'use client';
import { useState } from 'react';
import styles from '../../styles/quantity.module.scss';

export default function Quantity() {
  const [products, setProducts] = useState(1);

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
    </div>
  );
}
