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

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__container + " flex flex-wrap"}>
        <div className={styles.footer__container__links + " w-full md:w-1/2"}>
          <nav
            id="navbar"
            className={
              styles.footer__container__links_menu +
              " bg-gray-800 text-white p-4"
            }
          >
            <ul className={styles.menu + " flex space-x-4"}>
              <a
                className={
                  styles.link + " hover:text-blue-500 transition rounded"
                }
                href="#inicio"
                title="Inicio"
              >
                <TbHome />
                <h6 className={styles.text}>Inicio</h6>
              </a>
              <a
                className={
                  styles.link + " hover:text-blue-500 transition rounded"
                }
                href="#about"
                title="Sobre mi"
              >
                <TbUser />
                <h6 className={styles.text}>Sobre mi</h6>
              </a>
              <a
                className={
                  styles.link + " hover:text-blue-500 transition rounded"
                }
                href="#proyectos"
                title="Proyectos"
              >
                <TbBriefcase />
                <h6 className={styles.text}>Proyectos</h6>
              </a>
              <a
                className={
                  styles.link + " hover:text-blue-500 transition rounded"
                }
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
                className={
                  styles.link + " hover:text-blue-500 transition rounded"
                }
                href="#contacto"
                title="Contacto"
              >
                <TbMail />
                <h6 className={styles.text}>Contacto</h6>
              </a>
            </ul>
          </nav>
        </div>
        <div className={styles.footer__container__logo + " w-full md:w-5/6"}>
          <Image fill className={styles.logo} src="/logo.png" alt="logo" />
        </div>
      </div>
    </div>
  );
};
export default Footer;
