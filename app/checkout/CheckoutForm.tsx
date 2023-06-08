'use client';
import '../styles/globals.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from '../styles/checkout.module.scss';

export default function CheckoutForm() {
  const router = useRouter();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    router.push('/thankyou');
  };
  return (
    <main className={styles.main}>
      <div className={styles.wrapperCheckout}>
        <section className={styles.checkoutFormContainer}>
          <h1>Checkout</h1>

          <form className={styles.checkoutForm} onSubmit={handleSubmit}>
            <fieldset className={styles.name}>
              <legend>Customer Info</legend>
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
            </fieldset>
            <fieldset>
              <label className={styles.inputLabel}>
                Street
                <input
                  className={styles.input}
                  data-test-id="checkout-address"
                  required
                />
              </label>

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
            </fieldset>

            <fieldset className={styles.ccNum}>
              <legend>Payment Info</legend>

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
            </fieldset>
            <fieldset className={styles.ccInfo}>
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
            </fieldset>

            <div className={styles.buttons}>
              <button
                className={styles.confirmOrderButton}
                data-test-id="checkout-confirm-order"
              >
                Confirm Order
              </button>
              <Link href="/cart" role="button">
                <span className={styles.backToCartLinkButton}>
                  Back to Cart
                </span>
              </Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
