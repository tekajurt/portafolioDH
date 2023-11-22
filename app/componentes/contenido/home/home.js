import { Col, Row } from "react-bootstrap";
import styles from "./home.module.css";
const home = () => {
  return (
    <section id="inicio" className={styles.section}>
      <Row className={styles.row}>
        <Col sm={12} md={6} lg={5} className={styles.datosYo}>
          <h1 className="fade-in-left">
            ¡Hola! soy <strong>Daniel Hurtado</strong>
          </h1>
          <h3 className="fade-in-left">
            Desarrollador web <strong>Fullstack</strong> con experiencia en el
            desarrollo de distintos proyectos, utilizando tecnologías como
            React, Node, MongoDB, entre otras.
          </h3>
        </Col>
        <Col sm={12} md={6} lg={7} className={styles.contenedorImagen}>
          <img
            width={200}
            height={200}
            className={styles.imagen}
            alt="Home Image"
            src={"/next.svg"}
          />
        </Col>
      </Row>
    </section>
  );
};
export default home;
