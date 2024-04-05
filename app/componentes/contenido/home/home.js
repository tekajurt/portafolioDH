import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "./home.module.css";
const home = () => {
  return (
    <section id="inicio" className={styles.container}>
      <Row className={styles.row}>
        <Col sm={12} md={6} lg={7} xl={8} className={styles.datosYo}>
          <h1 className="fade-in-left">
            ¡Hola! soy <strong>Daniel Hurtado</strong>
          </h1>
          <h4 className="fade-in-left my-5">
            Desarrollador web <strong>Fullstack</strong> con experiencia en el
            desarrollo de distintos proyectos, utilizando tecnologías como
            React, Node, MongoDB, entre otras.
          </h4>
        </Col>
        <Col md={6} lg={5} xl={4} className={styles.contenedorImagen}>
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
