import styles from "./about.module.css";
const about = () => {
  return (
    <section id="about" className={styles.container}>
      <h2>Acerca de mí</h2>
      <p>
        Soy Daniel Hurtado, un apasionado desarrollador de software con más de 4
        años de experiencia. Mi enfoque es crear soluciones eficientes y
        centradas en el usuario utilizando tecnologías como Next.js, JavaScript,
        HTML, CSS y Bootstrap. Destaco por mi proyecto de la página web de
        Cencotel y actualmente estoy en proceso de titulación como Ingeniero
        Civil en Informática. Fuera del trabajo, disfruto de la música, los
        videojuegos y el amor por los animales. Siempre estoy listo para nuevos
        desafíos en el mundo del desarrollo de software.
      </p>
    </section>
  );
};
export default about;
