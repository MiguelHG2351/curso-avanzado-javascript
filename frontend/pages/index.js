import styles from "styles";
import Head from "next/head";
import Link from "next/link";
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <>
            <Head>
                <title>Miguel2351 | Introducción al desarrollo web</title>
            </Head>
                <motion.div exit={{opacity: 0}} className="xd" initial='initial' animate='animate'>
                    <section className="content">
                        <h1>JavaScript y React</h1>
                        <div className="intro">
                            <div align="center">
                                <img
                                    src="/images/Coding_SVG.svg"
                                    alt="Ilustración de código"
                                />
                            </div>
                            <div className="theme-intro">
                                <h3>Bienvenido a este proyecto sobre desarrollo Web :)</h3>
                                <p>
                                    Esta página web contiene una documentación
                                    enfoncada principalmente sobre desarrollo
                                    web y tecnologías relacionadas que tiene
                                    como objetivo ayudar a otros con dificultad
                                    para comprender las herramientas de
                                    desarrollo web
                                </p>
                                <button className="btn get-started">
                                    <Link href="/docs">
                                        <a>
                                            Get Started
                                        </a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                        <article className="theme-summary">
                            <h3>De que se trata esta página web?.</h3>
                            <p>
                                Es una pequeña documentación sobre las
                                tecnologías como: HTML, CSS y JavaScript que
                                enseña no solo las etiquetas, estilos o las
                                API's básicas sino también las herramientas que
                                son realmente útil en el desarrollo web:
                            </p>
                            <ul className="some-theme">
                                <li>Accesibilidad web</li>
                                <li>Performance</li>
                                <li>Dev Tools de Chrome y Firefox</li>
                                <li>Manejo de errores HTML</li>
                                <li>
                                    Que es el DOM exactamente?
                                </li>
                                <li>
                                    Patrones de diseño: Observer, Prototype,
                                    Singleton, etc
                                </li>
                                <li>
                                    Hoisting y el Event Loop
                                </li>
                                <li>
                                    POO en JavaScript, Añadiendo tipado con TypeScript
                                </li>
                                <li>
                                    Promesas, asincronismo y performance.
                                </li>
                                <li>
                                    API como: Navigator, Uso Fetch en
                                    profundidad, PWA, SPA
                                </li>
                                <li>
                                    Como elegir las herramientas correctas para
                                    crear una aplicación o página web
                                </li>
                                <li>etc v:</li>
                            </ul>
                        </article>
                        <article className="theme">
                            <h2>Temas de desarrollo web.</h2>
                            <p>
                                Esta página esta más enfocada principalmente a
                                desarrollo web por lo que la página principal
                                puede tener más temas de desarrollo web.
                            </p>
                            <p>
                                Pero también puede tener otros temas que la
                                comunidad puede compartir para ayudar a otros a
                                resolver sus problemas.
                            </p>
                            <p>
                                En esta página se puede contribuir contactando
                                por{" "}
                                <a href="mailto:miguelhernandezgaitan13@gmail.com">
                                    correo
                                </a>{" "}
                                para agregar la información que desea compartir.
                            </p>
                            <p>Algunos temas definidos por el momento son:</p>
                            <div className="themes">
                                <div className="theme-1">
                                    <div className="title-theme">HTML</div>
                                    <div className="cantidad">5 clases</div>
                                </div>
                                <div className="theme-2">
                                    <div className="title-theme">CSS</div>
                                    <div className="cantidad">12 clases</div>
                                </div>
                                <div className="theme-3">
                                    <div className="title-theme">
                                        JavaScript
                                    </div>
                                    <div className="cantidad">20 clases</div>
                                </div>
                                <div className="theme-4">
                                    <div className="title-theme">
                                        Algoritmos
                                    </div>
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
                </motion.div>
            <style jsx>{styles}</style>
        </>
    );
}
