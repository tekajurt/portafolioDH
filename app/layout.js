import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';

import Navbar from './components/layout/navbar/navbar';
import Footer from './components/layout/footer/footer';
import Botones from './components/UI/botonFlotante/botones';
import BotonLogo from './components/UI/botonFlotante/botonLogo';
export const metadata = {
    title: 'Portafolio Daniel Hurtado',
    description:
        'Portafolio de Daniel Hurtado, el cual muestra sus proyectos y habilidades',
    keywords: [
        'portafolio',
        'desarrollador web',
        'Next.js',
        'React',
        'JavaScript',
    ],
    authors: [{ name: 'Daniel Hurtado' }],
    creator: 'Daniel Hurtado',
    publisher: 'Daniel Hurtado',
    openGraph: {
        title: 'Portafolio Daniel Hurtado',
        description:
            'Portafolio de Daniel Hurtado, el cual muestra sus proyectos y habilidades',
        url: 'www.danielhurtado.cl', // Reemplaza con tu URL real
        siteName: 'Portafolio Daniel Hurtado',
        /* images: [
            {
                url: '/Images/og-image.jpg', // Asegúrate de tener esta imagen en public/Images/
                width: 1200,
                height: 630,
                alt: 'Portafolio Daniel Hurtado',
            },
        ], */
        locale: 'es_ES',
        type: 'website',
    },
    /* twitter: {
        card: 'summary_large_image',
        title: 'Portafolio Daniel Hurtado',
        description:
            'Portafolio de Daniel Hurtado, el cual muestra sus proyectos y habilidades',
        creator: '@tu-usuario-twitter', // Reemplaza con tu usuario de Twitter
        images: ['/Images/twitter-image.jpg'], // Asegúrate de tener esta imagen
    }, */
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="es">
            <body>
                <Navbar />
                <BotonLogo />
                {children}
                <Botones />
                <Footer />
            </body>
            <GoogleAnalytics gaId="G-KTS11MXLS8" />
        </html>
    );
}
