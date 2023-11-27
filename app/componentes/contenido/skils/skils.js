import { Col, Row } from "react-bootstrap";
import styles from "./skils.module.css";
import {
  TbBrandNextjs,
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
} from "react-icons/tb";
const skils = () => {
  return (
    <section id="habilidades" className={styles.skils}>
      <h2>Conocimientos técnicos</h2>
      <Row className={styles.row}>
        <Col>
          <TbBrandNextjs className={styles.skill} title="NextJS" />
        </Col>
        <Col>
          <TbBrandBootstrap className={styles.skill} title="Bootstrap" />
        </Col>
        <Col>
          <TbBrandJavascript className={styles.skill} title="Javascript" />
        </Col>
        <Col>
          <TbBrandCss3 className={styles.skill} title="CSS" />
        </Col>
        <Col>
          <TbBrandHtml5 className={styles.skill} title="HTML" />
        </Col>
      </Row>
    </section>
  );
};
export default skils;
