'use client';

import styles from '../../styles/cartpage.module.scss';
import { deleteCartItem } from './deleteCartItem';

type Props = {
  productId: number;
};

export default function DeleteItemButton(props: Props) {
  return (
    <form
      action={async () => {
        await deleteCartItem(props.productId);
      }}
    >
      <button
        className={styles.deleteButton}
        data-test-id={`cart-product-remove-${props.productId}`}
      >
        Delete Item
      </button>
    </form>
  );
}
