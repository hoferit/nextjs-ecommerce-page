'use client';
import { useState } from 'react';
import styles from '../../styles/quantity.module.scss';
import { changeCartQuantity } from './changeCartQuantity';

type Props = {
  productId: number;
  quantity: number;
};

export default function QuantityButtonsCart(props: Props) {
  const [amount, setAmount] = useState(props.quantity);

  const handleIncrement = () => {
    setAmount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setAmount((prevCount) => Math.max(1, prevCount - 1));
  };

  return (
    <div>
      <form
        action={async () => {
          await changeCartQuantity(props.productId, amount);
        }}
      >
        <button
          className={`${styles.quantityModifier} ${styles.left}`}
          data-test-id="product-decrement"
          onClick={handleDecrement}
        >
          &mdash;
        </button>
        <button
          className={`${styles.quantityModifier} ${styles.right}`}
          data-test-id="product-increment"
          onClick={handleIncrement}
        >
          &#xff0b;
        </button>
      </form>
    </div>
  );
}
