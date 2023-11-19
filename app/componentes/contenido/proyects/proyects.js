import Image from "next/image";
import styles from "./proyects.module.css";
const proyects = () => {
  return (
    <section id="proyectos">
      <h2>Proyectos en los que he trabajado</h2>

      <div className={styles.proyect}>
        <h3>Cencotel EIRL</h3>
        <p>Página web de Cencotel</p>
        <div className={styles.containerImage}>
          <img
            className={styles.image}
            src="/images/Cencotel.png"
            alt="Página web de Cencotel EIRL"
          />
        </div>
        <p>Tecnologías: Next.js, React, Boostrap, etc.</p>
        <p>
          Enlace:{" "}
          <a
            href="https://cencotel.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cencotel EIRL
          </a>
        </p>
        <p>
          Trabajé como desarrollador principal en el Proyecto A, liderando el
          desarrollo del front-end y colaborando estrechamente con el equipo de
          back-end. Enfrentamos el desafío de...
        </p>
      </div>
    </section>
  );
};
export default proyects;
