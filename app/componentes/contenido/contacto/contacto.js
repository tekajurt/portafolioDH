import { Col, Row } from "react-bootstrap";

const contacto = () => {
  return (
    <div id="contacto">
      <h2>Contacto</h2>

      <Row>
        <Col xs={12} md={6}>
          <h3>Información de contacto</h3>
          <p>
            <strong>Correo Electrónico</strong>{" "}
            <a href="mailto:dhurtado@cencotel.cl">dhurtado@cencotel.cl</a>
          </p>
        </Col>
        <Col xs={12} md={6}>
          <h3>Redes Sociales</h3>
          <p>
            <strong>LinkedIn</strong>{" "}
            <a href="https://www.linkedin.com/in/daniel-hurtado-medina-1a048b8a/">
              Daniel Hurtado Medina
            </a>
          </p>

          <p>
            <strong>GitHub</strong>{" "}
            <a href="https://github.com/tekajurt">tekajurt</a>
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default contacto;
