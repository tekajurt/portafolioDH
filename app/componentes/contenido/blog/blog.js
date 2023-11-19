import { Row, Col } from "react-bootstrap";
import styles from "./blog.module.css";
const blog = () => {
  return (
    <div id="blog">
      <h2>Blog</h2>
      <Row>
        <Col xs={12} md={6}>
          <div>
            <img
              className={styles.image}
              src="/Images/blogs/1.png"
              alt="imagen de prueba"
            />
          </div>
          <h3>artículo</h3>
          <p>
            Este es un artículo de prueba para el blog. Este es un artículo de
            mipi
          </p>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <img
              className={styles.image}
              src="/Images/blogs/1.png"
              alt="imagen de prueba"
            />
          </div>
          <h3>artículo</h3>
          <p>
            Este es un artículo de prueba para el blog. Este es un artículo de
            mipi
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default blog;
