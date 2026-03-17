import styles from "./blog.module.css";
const blog = () => {
  return (
    <div id="blog">
      <h2>Blog</h2>
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div>
            <img
              className={styles.image}
              src="/Images/blogs/1.png"
              alt="imagen de prueba"
            />
          </div>
          <h3>artículo</h3>
          <p>
            Este es un artículo de prueba para el blog. Este es un artículo de
            mipi
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <div>
            <img
              className={styles.image}
              src="/Images/blogs/1.png"
              alt="imagen de prueba"
            />
          </div>
          <h3>artículo</h3>
          <p>
            Este es un artículo de prueba para el blog. Este es un artículo de
            mipi
          </p>
        </div>
      </div>
    </div>
  );
};
export default blog;
