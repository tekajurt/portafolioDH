import Image from "next/image";
import styles from "./home.module.css";
const home = () => {
  return (
    <section id="inicio" className={styles.container}>
      <div className={styles.row + " flex flex-wrap"}>
        <div
          className={
            styles.contenedorImagen + " w-full md:w-1/2 lg:w-5/12 xl:w-1/3"
          }
        >
          <Image
            fill
            className={styles.imagen}
            alt="Home Image"
            src={"/yo.png"}
          />
        </div>
        <div
          className={
            styles.datosYo + " w-full sm:w-full md:w-1/2 lg:w-7/12 xl:w-2/3"
          }
        >
          <h1 className="animate-fade-in-left">
            ¡Hola! soy <strong>Daniel Hurtado</strong>
          </h1>
          <h4 className="animate-fade-in-left my-5">
            Desarrollador web <strong>Fullstack</strong> con experiencia en el
            desarrollo de distintos proyectos, utilizando tecnologías como
            React, Node, MongoDB, entre otras.
          </h4>
        </div>
      </div>
    </section>
  );
};
export default home;
