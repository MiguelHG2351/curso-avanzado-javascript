import styles from "styles";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>Miguel2351 | Introducción al desarrollo web</title>
            </Head>
            <section className="content">
                <h1>JavaScript y React</h1>
                <div align="center">
                    <img
                        src="/images/Coding_SVG.svg"
                        alt="Ilustración de código"
                    />
                </div>
                <article>
                    <h3>De que se trata esta página web?.</h3>
                    <p>
                        Es una pequeña documentación sobre las tecnologías como:
                        HTML, CSS y JavaScript que enseña no enseña solo las
                        etiquetas, estilos o las API's bássicas sino también las herramientas que pocos sitios enseñan como:
                    </p>
                    <ul>
                        <li>Accesibilidad web</li>
                        <li>Performance</li>
                        <li>Dev Tools de Chrome y Firefox</li>
                        <li>Manejo de errores HTML</li>
                        <li>El DOM no es lo que se mira en las Dev Tools o un mapa 1-1 de los elementos HTML</li>
                        <li>Patrones de diseño: Observer, Prototype, Singleton, etc</li>
                        <li>API como: Navigator, Uso Fetch en profundidad, PWA, SPA</li>
                        <li>Como elegir las herramientas correctas para crear una aplicación o página web</li>
                    </ul>
                </article>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
