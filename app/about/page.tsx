import '../styles/globals.scss';
import styles from '../styles/aboutpage.module.scss';

export const metadata = {
  title: 'About',
  description: 'About our e-commerce Store selling speedy pals',
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <section>
        <article>
          <h2>About Speedy Pals:</h2>
          <p>
            Welcome to our e-commerce store, where imagination and playfulness
            come to life! Explore our enchanting collection of plush baby
            animals sitting in toy cars. Each toy is meticulously designed to
            bring joy, comfort, and endless fun to children.
          </p>
        </article>
        <article>
          <h2>Premium Craftsmanship:</h2>
          <p>
            Crafted with love and care, our plush baby animals feature exquisite
            details and are made from premium materials. From the velvety touch
            of their fur to the carefully stitched accents, these toys are
            perfect for cuddling and companionship.
          </p>
        </article>
        <article>
          <h2>Imaginative Play:</h2>
          <p>
            Paired with vibrant toy cars, our plush baby animals offer more than
            just a ride. They inspire imaginative play and promote the
            development of fine motor skills. Choose from charming characters
            like the adorable Alpaca, majestic Elephant, and playful Panda.
          </p>
        </article>
        <article>
          <h2>Safety First:</h2>
          <p>
            We prioritize your child's safety. Our toys adhere to the highest
            safety standards, ensuring they are free from harmful substances and
            designed without any choking hazards. You can have peace of mind
            while your child explores and plays.
          </p>
        </article>
        <article>
          <h2>Delightful Childhood Memories:</h2>
          <p>
            Join us in cultivating wonder, creativity, and joy in the lives of
            children. Let their imagination soar as they embark on exciting
            adventures with our plush baby animals sitting in toy cars.
          </p>
          <p>
            Thank you for choosing our e-commerce store as your partner in
            creating cherished childhood memories. Start your journey today!
          </p>
        </article>
      </section>
    </main>
  );
}
