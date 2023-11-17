import { Col, Row } from "react-bootstrap";
import styles from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Row>
        <Col>Home</Col>
        <Col>Contacto</Col>
        <Col>Mipi</Col>
      </Row>
    </nav>
  );
};
export default Navbar;
