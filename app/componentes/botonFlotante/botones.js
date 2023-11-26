import styles from "./botones.module.css";
import { Button } from "react-bootstrap";
import { TbArrowBigUpLine, TbBrandWhatsapp } from "react-icons/tb";

const Botones = () => {
  return (
    <div className={styles.botonContainer}>
      <Button
        className={styles.botonFlotante + " btn btn-primary rounded-circle"}
        href="#inicio"
        title="Subir"
      >
        <TbArrowBigUpLine />
      </Button>
      <Button
        className={styles.botonWhatsapp + " btn btn-success rounded-circle"}
        href="https://wa.me/message/HSTFQYH4HZBKP1"
        title="Whatsapp"
      >
        <TbBrandWhatsapp />
      </Button>
    </div>
  );
};

export default Botones;
