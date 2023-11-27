import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./home.module.css";
const home = () => {
  return (
    <section id="inicio" className={styles.container}>
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
          <Image
            fill
            className={styles.imagen}
            alt="Home Image"
            src={"/yo.jpg"}
          />
        </Col>
      </Row>
    </section>
  );
};
export default home;
