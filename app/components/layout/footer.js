import styles from '../../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <h5>SPEEDY PALS</h5>
        <p>&copy; {new Date().getFullYear()} Speedy Pals</p>
        <div className={styles.footerContainerWrap}>
          Developed by{' '}
          <a
            className={styles.footerLink}
            href="https://github.com/hoferit/"
            rel="noreferrer"
            target="_blank"
          >
            MH
          </a>
        </div>
      </div>
    </footer>
  );
}
