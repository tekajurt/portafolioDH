import Image from "next/image";
import styles from "./footer.module.css";
import { Row } from "react-bootstrap";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__container__links}>
          <div className={styles.footer__container__links__item}>
            <Row className="text-start">
              <h3>Productos</h3>
              <li>Inicio</li>
              <li>Sobre mi</li>
              <li>Proyectos</li>
              <li>Habilidades</li>
              <li>Experiencia</li>
              <li>Educación</li>
              <li>Blog</li>
              <li>Contacto</li>
            </Row>
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
