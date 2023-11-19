import { Col, Row } from "react-bootstrap";
import styles from "./skils.module.css";
const skils = () => {
  return (
    <div id="habilidades" className={styles.skils}>
      <h2>Conocimientos técnicos</h2>
      <Row className={styles.row}>
        <Col>NextJS</Col>
        <Col>Boostrap</Col>
        <Col>JavaScript</Col>
        <Col>CSS</Col>
        <Col>HTML</Col>
      </Row>
    </div>
  );
};
export default skils;
