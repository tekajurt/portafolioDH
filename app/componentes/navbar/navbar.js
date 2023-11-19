"use client";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
const navBar = () => {
  const [stickyClass, setStickyClass] = useState("position-relative");
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 0
        ? setStickyClass("position-fixed ")
        : setStickyClass("position-relative");
    }
  };

  return (
    <>
      <Navbar
        id="navbar"
        className={styles.navbar + " align-items-center " + stickyClass}
        expand="md"
      >
        <Container>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarBrand href="/" title="Back">
            <img
              className={styles.logo}
              src="/favicon.ico"
              alt="favicon"
              title="favicon"
            ></img>
          </NavbarBrand>
          <div className="text-dark"></div>
          <Navbar.Collapse className="" id="basic-navbar-nav">
            <Nav className=" justify-content-center text-dark bg-lightgreen">
              <Nav.Link
                className={styles.link + " rounded"}
                href="#inicio"
                title="Inicio"
              >
                Inicio
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#about"
                title="Sobre mi"
              >
                Sobre mi
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#proyectos"
                title="Proyectos"
              >
                Proyectos
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#habilidades"
                title="Habilidades"
              >
                Habilidades
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#experiencia"
                title="Experiencia"
              >
                Experiencia
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#educacion"
                title="Educación"
              >
                Educación
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#blog"
                title="Blog"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className={styles.link + " rounded"}
                href="#contacto"
                title="Contacto"
              >
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default navBar;
