"use client";
import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styles from "./navbar.module.css";
import { useEffect, useState } from "react";
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
const navBar = () => {
  // const [stickyClass, setStickyClass] = useState("position-relative");
  // useEffect(() => {
  //   window.addEventListener("scroll", stickNavbar);

  //   return () => {
  //     window.removeEventListener("scroll", stickNavbar);
  //   };
  // }, []);

  // const stickNavbar = () => {
  //   if (window !== undefined) {
  //     let windowHeight = window.scrollY;
  //     windowHeight > 0
  //       ? setStickyClass("position-fixed ")
  //       : setStickyClass("position-relative");
  //   }
  // };

  return (
    <Navbar id="navbar" className={styles.navbar /*+ stickyClass*/}>
      <NavbarToggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse className={styles.menuContainer} id="basic-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  );
};

export default navBar;
