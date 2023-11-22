import Inicio from "./componentes/contenido/home/home";
import About from "./componentes/contenido/about/about";
import Proyects from "./componentes/contenido/proyects/proyects";
import Skils from "./componentes/contenido/skils/skils";
import Exp from "./componentes/contenido/exp/exp";
import Educacion from "./componentes/contenido/educacion/educacion";
import Blog from "./componentes/contenido/blog/blog";
import Contacto from "./componentes/contenido/contacto/contacto";
import styles from "./page.module.css";
export default function Home() {
  //Componente Home que devuelve una página con distintas secciones

  return (
    <div className={styles.container}>
      <Inicio />
      <About />
      <Proyects />
      <Skils />
      <Exp />
      <Educacion />
      {/*<Blog />*/}
      <Contacto />
    </div>
  );
}
