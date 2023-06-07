import '../styles/globals.scss';
import styles from '../styles/aboutpage.module.scss';

export const metadata = {
  title: 'About',
  description: 'About our e-commerce Store selling speedy pals',
};
export default function AboutPage() {
  return (
    <main className={styles.main}>
      <h1>About Speedy Pals</h1>
      <article>
        <p>
          Welcome to our e-commerce store, where imagination meets cuddles! We
          take pride in introducing our delightful collection of plush baby
          animal toys, each one nestled comfortably in their own adorable toy
          car. These enchanting companions are designed to captivate the hearts
          of both children and adults alike, fostering endless hours of joy,
          creativity, and companionship.
        </p>
        <p>
          Crafted with meticulous attention to detail, our plush baby animals
          are exquisitely soft and irresistibly huggable. They are carefully
          selected to embody the innocence and charm of their real-life
          counterparts, bringing the wonders of the animal kingdom into the
          hands of your little ones. From playful puppies to mischievous
          kittens, from gentle bunnies to curious monkeys, our range offers a
          diverse menagerie of lovable characters.
        </p>
        <p>
          Each plush baby animal is thoughtfully paired with their very own toy
          car, providing an exciting mode of transportation through imaginative
          play. These miniature vehicles are designed to complement the charm
          and personality of their fluffy passengers, fostering a sense of
          adventure as children embark on imaginary journeys together. The
          attention to detail in both the plush animals and their cars ensures a
          seamless integration of fun and comfort, allowing children to explore
          their boundless creativity in a safe and engaging way.
        </p>

        <p>
          At our e-commerce store, we understand the importance of quality and
          safety when it comes to children's toys. That is why all our plush
          baby animals undergo rigorous testing to meet the highest standards of
          craftsmanship and child safety regulations. We prioritize the use of
          hypoallergenic materials that are both durable and gentle on delicate
          skin, ensuring a worry-free playtime experience for both children and
          parents.
        </p>
        <p>
          Whether you are seeking the perfect gift for a special occasion or
          simply looking to spark your child's imagination, our plush baby
          animal toys are designed to be cherished companions that will
          accompany your little ones on countless adventures. Their endearing
          presence and comforting softness offer not just a toy, but a trusted
          friend, encouraging emotional development and nurturing the power of
          imagination.
        </p>
        <p>
          We invite you to explore our enchanting collection and discover the
          magic that our plush baby animal toys can bring to your child's world.
          Let the smiles, giggles, and cuddles abound as you embark on a journey
          filled with warmth, love, and endless moments of joy.
        </p>
      </article>
    </main>
  );
}
