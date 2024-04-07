"use client";
import Image from "next/image";
import styles from "./footer.module.css";
import {
  TbHome,
  TbUser,
  TbBriefcase,
  TbPlayFootball,
  TbExposurePlus1,
  TbSchool,
  TbBrandBlogger,
  TbMail,
} from "react-icons/tb";
import {
  Col,
  Nav,
  Navbar,
  NavbarToggle,
  NavbarBrand,
  Row,
} from "react-bootstrap";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Row className={styles.footer__container}>
        <Col className={styles.footer__container__links}>
          <Navbar
            id="navbar"
            className={styles.footer__container__links_menu /*+ stickyClass*/}
          >
            {" "}
            <Nav className={styles.menu}>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#inicio"
                title="Inicio"
              >
                <TbHome />
                <h6 className={styles.text}>Inicio</h6>
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#about"
                title="Sobre mi"
              >
                <TbUser />
                <h6 className={styles.text}>Sobre mi</h6>
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#proyectos"
                title="Proyectos"
              >
                <TbBriefcase />
                <h6 className={styles.text}>Proyectos</h6>
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#habilidades"
                title="Habilidades"
              >
                <TbPlayFootball />
                <h6 className={styles.text}>Habilidades</h6>
              </Nav.Link>
              {/*
              <Nav.Link
                className={styles.link + " rounded"}
                href="#experiencia"
                title="Experiencia"
              >
                <TbExposurePlus1 />
                <h6 className={styles.text}>Experiencia</h6>
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#educacion"
                title="Educación"
              >
                <TbSchool />
                <h6 className={styles.text}>Educación</h6>
              </Nav.Link>

              
            <Nav.Link
              className={styles.link + " rounded"}
              href="#blog"
              title="Blog"
            >
            
              <TbBrandBlogger />
              <h6 className={styles.text}>Blog</h6>
            </Nav.Link>
            */}
              <Nav.Link
                className={styles.link + " rounded"}
                href="#contacto"
                title="Contacto"
              >
                <TbMail />
                <h6 className={styles.text}>Contacto</h6>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
        <Col sm={12} md={10} className={styles.footer__container__logo}>
          <Image fill className={styles.logo} src="/logo.png" alt="logo" />
        </Col>
      </Row>
    </div>
  );
};
export default Footer;
