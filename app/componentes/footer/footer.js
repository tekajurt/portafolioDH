import Image from "next/image";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__links}>
          <div className={styles.footer__container__links__item}>
            <h3>Productos</h3>
            <ul>
              <li>Productos</li>
              <li>Productos</li>
              <li>Productos</li>
              <li>Productos</li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__container__logo}>
          <Image fill src="/vercel.svg" alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
