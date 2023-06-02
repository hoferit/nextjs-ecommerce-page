'use client';
import { deleteCartItem } from './deletecartitemactions';

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
      <button data-test-id={`cart-product-remove-${props.productId}`}>
        Delete Item
      </button>
    </form>
  );
}
