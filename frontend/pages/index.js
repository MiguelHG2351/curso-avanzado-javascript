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
                <div className="intro">
                    <div align="center">
                        <img
                            src="/images/Coding_SVG.svg"
                            alt="Ilustración de código"
                        />
                    </div>
                    <article className="theme-intro">
                        <h3>De que se trata esta página web?.</h3>
                        <p>
                            Es una pequeña documentación sobre las tecnologías como:
                            HTML, CSS y JavaScript que enseña no solo las etiquetas,
                            estilos o las API's básicas sino también las
                            herramientas que son poco conocidas pero realmente útil:
                        </p>
                        <ul className="some-theme">
                            <li>Accesibilidad web</li>
                            <li>Performance</li>
                            <li>Dev Tools de Chrome y Firefox</li>
                            <li>Manejo de errores HTML</li>
                            <li>
                                El DOM no es lo que se mira en las Dev Tools o un
                                mapa 1-1 de los elementos HTML
                            </li>
                            <li>
                                Patrones de diseño: Observer, Prototype, Singleton,
                                etc
                            </li>
                            <li>
                                API como: Navigator, Uso Fetch en profundidad, PWA,
                                SPA
                            </li>
                            <li>
                                Como elegir las herramientas correctas para crear
                                una aplicación o página web
                            </li>
                        </ul>
                    </article>

                </div>
                <article className="theme">
                    <h2>Temas de desarrollo web.</h2>
                    <p>
                        Esta página esta más enfocada principalmente a
                        desarrollo web por lo que la página principal puede
                        tener más temas de desarrollo web.
                    </p>
                    <p>
                        Pero también puede tener otros temas que la comunidad
                        puede compartir para ayudar a otros a resolver sus
                        problemas.
                    </p>
                    <p>
                        En esta página se puede contribuir contactando por{" "}
                        <a href="mailto:miguelhernandezgaitan13@gmail.com">
                            correo
                        </a>{" "}
                        para agregar la información que desea compartir.
                    </p>
                    <p>Algunos temas definidos por el momento son:</p>
                    <div className="themes">
                        <div className="theme-1">
                            <div className="title-theme">
                                HTML
                            </div>
                            <div className="cantidad">5 clases</div>
                        </div>
                        <div className="theme-2">
                            <div className="title-theme">CSS</div>
                            <div className="cantidad">12 clases</div>
                        </div>
                        <div className="theme-3">
                            <div className="title-theme">JavaScript</div>
                            <div className="cantidad">
                                20 clases
                            </div>
                        </div>
                        <div className="theme-4">
                            <div className="title-theme">Algoritmos</div>
                            <div className="cantidad">8 clases</div>
                        </div>
                        <div className="theme-5">
                            <div className="title-theme">NodeJS</div>
                            <div className="cantidad">5 clases</div>
                        </div>
                        <div className="theme-6">
                            <div className="title-theme">MongoDB</div>
                            <div className="cantidad">3 clases</div>
                        </div>
                    </div>
                </article>
            </section>
            <style jsx>{styles}</style>
        </>
    );
}
