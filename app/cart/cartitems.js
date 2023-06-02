import '../styles/globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import DeleteItemButton from './deleteitembutton';
import { getCartItems } from './getcartitemsactions';
import QuantityButtonsCart from './quantitybuttonscart';

export default async function CartItems() {
  const cartItems = await getCartItems();
  return (
    <>
      {cartItems.map((item) => (
        <div
          key={`item-div-${item.id}`}
          data-test-id={`cart-product-${item.id}`}
        >
          <h3>
            {item.name} the {item.type}
          </h3>
          <Link href={`/../products/${String(item.id)}`}>
            <Image
              alt={item.name}
              src={`/images/${item.type}.jpeg`}
              data-test-id="product-image"
              width={128}
              height={128}
            />
          </Link>
          <h3 data-test-id={`cart-product-quantity-${item.quantity}`}>
            Quantity: {item.quantity}
          </h3>
          <DeleteItemButton />
          <QuantityButtonsCart productId={item.id} quantity={item.quantity} />
        </div>
      ))}
    </>
  );
}
