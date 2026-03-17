import styles from "./botones.module.css";
import { TbArrowBigUpLine, TbBrandWhatsapp } from "react-icons/tb";

const Botones = () => {
  return (
    <div className={styles.botonContainer}>
      <a
        className={
          styles.botonFlotante +
          " bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        }
        href="#inicio"
        title="Subir"
      >
        <TbArrowBigUpLine />
      </a>
      <a
        className={
          styles.botonWhatsapp +
          " bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        }
        href="https://wa.me/message/HSTFQYH4HZBKP1"
        title="Whatsapp"
      >
        <TbBrandWhatsapp />
      </a>
    </div>
  );
};

export default Botones;
