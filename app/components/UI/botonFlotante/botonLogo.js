"use client";
import styles from "./botonLogo.module.css";
const botonLogo = () => {
  return (
    <a href="/" className={styles.botonContainer}>
      <img
        className={styles.logo}
        src="/favicon.ico"
        alt="favicon"
        title="favicon"
      ></img>
    </a>
  );
};
export default botonLogo;
