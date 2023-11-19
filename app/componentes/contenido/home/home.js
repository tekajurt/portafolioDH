import { Col, Row } from "react-bootstrap";
import styles from "./home.module.css";
const home = () => {
  return (
    <section id="inicio" className={styles.section}>
      <Row className={styles.row}>
        <Col sm={12} md={6} lg={4} className={styles.datosYo}>
          <h1>¡Hola! Daniel Hurtado</h1>
          <h2>Desarrollador web con experiencia en blablabla</h2>
        </Col>
        <Col sm={12} md={6} lg={8} className={styles.contenedorImagen}>
          <svg
            width={200}
            height={200}
            className={styles.imagen}
            alt="Home Image"
            href={"/next.svg"}
          />
        </Col>
      </Row>
    </section>
  );
};
export default home;
