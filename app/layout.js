import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componentes/navbar/navbar";
import Footer from "./componentes/footer/footer";
import Botones from "./componentes/botonFlotante/botones";
export const metadata = {
  title: "Portafolio Daniel Hurtado",
  description:
    "Portafolio de Daniel Hurtado, el cual muestra sus proyectos y habilidades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        {children}
        <Botones />
        <Footer />
      </body>
    </html>
  );
}
