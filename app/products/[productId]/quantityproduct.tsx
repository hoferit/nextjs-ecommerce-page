'use client';

import { ChangeEvent, useState } from 'react';
import styles from '../../styles/quantity.module.scss';
import { addProductAmount } from './actions';

type Props = {
  productId: number;
};
export default function QuantityButtons(props: Props) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => {
    setQuantity((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <div className={styles.buttonsWrap}>
      <div className={styles.quantityWrap}>
        <button
          className={`${styles.quantityModifier} ${styles.left}`}
          data-test-id="product-decrement"
          onClick={handleDecrement}
        >
          &mdash;
        </button>
        <input
          className={styles.quantityInput}
          data-test-id="product-quantity"
          value={quantity}
          readOnly
        />
        <button
          className={`${styles.quantityModifier} ${styles.right}`}
          data-test-id="product-increment"
          onClick={handleIncrement}
        >
          &#xff0b;
        </button>
      </div>
      <div className={styles.break} />
      <form
        action={async () => {
          await addProductAmount(props.productId, quantity);
        }}
      >
        <button
          className={styles.cartButton}
          data-test-id="product-add-to-cart"
        >
          add to cart
        </button>
      </form>
    </div>
  );
}
