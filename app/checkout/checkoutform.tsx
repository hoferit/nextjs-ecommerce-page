'use client';
import '../styles/globals.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/checkout.module.scss';

export default function CheckoutForm() {
  const router = useRouter();
  const handleSubmit = (element: React.FormEvent) => {
    element.preventDefault();
    router.push('/thankyou');
  };
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <section className={styles.checkoutFormContainer}>
          <h1>Checkout</h1>
          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <h3>Customer Info</h3>
            <div className={styles.name}>
              <label className={styles.inputLabel}>
                First Name
                <input
                  className={styles.input}
                  data-test-id="checkout-first-name"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Last Name
                <input
                  className={styles.input}
                  data-test-id="checkout-last-name"
                  required
                />
              </label>
            </div>
            <div className={styles.street}>
              <label className={styles.inputLabel}>
                Street
                <input
                  className={styles.input}
                  data-test-id="checkout-address"
                  required
                />
              </label>
            </div>
            <div className={styles.adressInfo}>
              <label className={styles.inputLabel}>
                City
                <input
                  className={styles.input}
                  data-test-id="checkout-city"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Postal Code
                <input
                  className={styles.input}
                  data-test-id="checkout-postal-code"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Country
                <input
                  className={styles.input}
                  data-test-id="checkout-country"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                E-Mail
                <input
                  type="email"
                  className={styles.input}
                  data-test-id="checkout-email"
                  required
                />
              </label>
            </div>

            <h3>Payment Info</h3>
            <div className={styles.ccNum}>
              <label className={styles.inputLabel}>
                Credit Card Number
                <input
                  className={styles.input}
                  data-test-id="checkout-credit-card"
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9\s]{13,19}"
                  required
                />
              </label>
            </div>
            <div className={styles.ccInfo}>
              <label className={styles.inputLabel}>
                Expiration Date
                <input
                  className={styles.input}
                  data-test-id="checkout-expiration-date"
                  required
                />
              </label>
              <label className={styles.inputLabel}>
                Security Code
                <input
                  className={styles.input}
                  data-test-id="checkout-security-code"
                  required
                />
              </label>
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.confirmOrderButton}
                data-test-id="checkout-confirm-order"
              >
                Confirm Order
              </button>
              <Link className={styles.backToCartLinkButton} href="/cart">
                Back to Cart
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
