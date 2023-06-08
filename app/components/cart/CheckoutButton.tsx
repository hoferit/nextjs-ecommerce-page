'use client';
import { useRouter } from 'next/navigation';
import styles from '../../styles/cartpage.module.scss';

export default function CheckoutButton() {
  const router = useRouter();

  const handleClick = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/checkout');
  };
  return (
    <button
      className={styles.checkoutButton}
      onClick={handleClick}
      data-test-id="cart-checkout"
    >
      Checkout
    </button>
  );
}
