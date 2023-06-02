'use client';
import { useState } from 'react';
import styles from '../../styles/quantity.module.scss';
import { changeCartQuantity } from './changequantityactions';

type Props = {
  productId: number;
  quantity: number;
};

export default function QuantityButtonsCart(props: Props) {
  const [amount, setAmount] = useState(props.quantity);

  // what to do? i need to stop setting the cookies by state and set them by form confirmation. the counter should be separate
  const handleIncrement = () => {
    setAmount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setAmount((prevCount) => Math.max(1, prevCount - 1));
  };

  return (
    <div className={styles.quantityWrap}>
      <form
        action={async () => {
          await changeCartQuantity(props.productId, amount);
        }}
      >
        <button
          className={`${styles.quantityModifier} ${styles.left}`}
          onClick={handleDecrement}
        >
          &mdash;
        </button>
        <button
          className={`${styles.quantityModifier} ${styles.right}`}
          onClick={handleIncrement}
        >
          &#xff0b;
        </button>
      </form>
    </div>
  );
}
