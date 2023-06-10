import '../../styles/globals.scss';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/cartpage.module.scss';
import DeleteItemButton from './DeleteItemButton';
import { getCartItemsWithPrice } from './getCartItemsWithPrice';
import QuantityButtonsCart from './QuantityButtonsCart';

export default async function CartItems() {
  const cartItems = await getCartItemsWithPrice();
  return (
    <>
      {cartItems.map((item) => (
        <div className={styles.items} key={`item-div-${item.id}`}>
          <div
            className={styles.itemBox}
            data-test-id={`cart-product-${item.id}`}
          >
            <Link
              href={`/../products/${String(item.id)}`}
              className={styles.itemPictureLink}
            >
              <Image
                alt={`${item.name} the ${item.type} sitting in a toy car`}
                src={`/images/${item.type}.jpeg`}
                data-test-id="product-image"
                width={128}
                height={128}
              />
            </Link>
            <h4>
              {item.name} the {item.type}
            </h4>

            <h4 data-test-id={`cart-product-quantity-${item.id}`}>
              Quantity: {item.quantity}
            </h4>
            <QuantityButtonsCart productId={item.id} quantity={item.quantity} />
            <h4>Subtotal: {item.price * item.quantity} €</h4>
            <DeleteItemButton productId={item.id} />
          </div>
        </div>
      ))}
    </>
  );
}
