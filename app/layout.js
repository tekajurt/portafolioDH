import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./componentes/navbar";
import Footer from "./componentes/footer/footer";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portafolio Daniel Hurtado",
  description:
    "Portafolio de Daniel Hurtado, el cual muestra sus proyectos y habilidades",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
