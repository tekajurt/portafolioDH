import Inicio from "./components/sections/home/home";
import About from "./components/sections/about/about";
import Proyects from "./components/sections/proyects/proyects";
import Skils from "./components/sections/skils/skils";
import Exp from "./components/sections/exp/exp";
import Educacion from "./components/sections/education/educacion";
import Blog from "./components/sections/blog/blog";
import Contacto from "./components/sections/contact/contacto";
import styles from "./page.module.css";
export default function Home() {
  //Componente Home que devuelve una página con distintas secciones

  return (
    <div className={styles.container}>
      <Inicio />
      <About />
      <Proyects />
      <Skils />
      {/*<Exp />
      <Educacion />
      {<Blog />*/}
      <Contacto />
    </div>
  );
}
