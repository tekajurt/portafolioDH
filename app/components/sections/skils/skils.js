import styles from "./skils.module.css";
import {
  TbBrandNextjs,
  TbBrandBootstrap,
  TbBrandJavascript,
  TbBrandCss3,
  TbBrandHtml5,
} from "react-icons/tb";
const skils = () => {
  return (
    <section id="habilidades" className={styles.skils}>
      <h2>Conocimientos técnicos</h2>
      <div className={styles.row + " flex flex-wrap"}>
        <div className="flex-1">
          <TbBrandNextjs className={styles.skill} title="NextJS" />
        </div>
        <div className="flex-1">
          <TbBrandBootstrap className={styles.skill} title="Bootstrap" />
        </div>
        <div className="flex-1">
          <TbBrandJavascript className={styles.skill} title="Javascript" />
        </div>
        <div className="flex-1">
          <TbBrandCss3 className={styles.skill} title="CSS" />
        </div>
        <div className="flex-1">
          <TbBrandHtml5 className={styles.skill} title="HTML" />
        </div>
      </div>
    </section>
  );
};
export default skils;
