"use client";
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
    <nav
      id="navbar"
      className={
        styles.navbar +
        " bg-white shadow-md p-4 flex justify-between items-center" /*+ stickyClass*/
      }
    >
      <button
        className="md:hidden text-gray-500"
        aria-controls="basic-navbar-nav"
      >
        Toggle
      </button>

      <div
        className={styles.menuContainer + " hidden md:flex"}
        id="basic-navbar-nav"
      >
        <ul className={styles.menu + " flex space-x-4"}>
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#inicio"
            title="Inicio"
          >
            <TbHome />
            <h6 className={styles.text}>Inicio</h6>
          </a>
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#about"
            title="Sobre mi"
          >
            <TbUser />
            <h6 className={styles.text}>Sobre mi</h6>
          </a>
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#proyectos"
            title="Proyectos"
          >
            <TbBriefcase />
            <h6 className={styles.text}>Proyectos</h6>
          </a>
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#habilidades"
            title="Habilidades"
          >
            <TbPlayFootball />
            <h6 className={styles.text}>Habilidades</h6>
          </a>
          {/*
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#experiencia"
            title="Experiencia"
          >
            <TbExposurePlus1 />
            <h6 className={styles.text}>Experiencia</h6>
          </a>
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#educacion"
            title="Educación"
          >
            <TbSchool />
            <h6 className={styles.text}>Educación</h6>
          </a>

              
            <a
              className={styles.link + " hover:text-blue-500 transition rounded"}
              href="#blog"
              title="Blog"
            >
            
              <TbBrandBlogger />
              <h6 className={styles.text}>Blog</h6>
            </a>
            */}
          <a
            className={styles.link + " hover:text-blue-500 transition rounded"}
            href="#contacto"
            title="Contacto"
          >
            <TbMail />
            <h6 className={styles.text}>Contacto</h6>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default navBar;
