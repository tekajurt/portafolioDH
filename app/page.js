
import { Col, Row } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  //Componente Home que devuelve una página con distintas secciones

  return (
    <>
      <section className={styles.section}>
        <Row>
          <Col sm={12} md={6} className={styles.datosYo}>
            <h1>Daniel Hurtado</h1>
            <h2>Desarrollador web</h2>
          </Col>
          <Col sm={12} md={6} className={styles.inicioImagen}>
            <p>Imagen con bordes difuminados y redondeados</p>
          </Col>
        </Row>
      </section>
    </>
  );
}
