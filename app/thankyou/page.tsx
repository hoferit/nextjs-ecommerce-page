import '../styles/globals.scss';
import styles from '../styles/thankyou.module.scss';

export const metadata = {
  title: 'Thank you for your order',
  description: 'Your purchase has been confirmed',
};

export default function ThankYouPage() {
  return (
    <main className={styles.main}>
      <section>
        <h1>Thank you for Shopping at SpeedyPals!</h1>
        <p>
          Thank you for your order! We appreciate your trust in our store. Our
          team is carefully preparing your items for a safe and swift delivery.
          If you have any questions, feel free to reach out to our friendly
          customer support. We value your support and look forward to bringing
          joy with our toys!
        </p>
      </section>
    </main>
  );
}
