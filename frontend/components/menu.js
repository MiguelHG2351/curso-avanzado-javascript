import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles, { linkStyle } from "./styles/menu";

function OldRoute({ to, text, currentRoute }) {
    return (
        <>
            <Link href={to}>
                <a className={currentRoute === to ? "active" : null}>{text}</a>
            </Link>
            <style jsx>{linkStyle}</style>
        </>
    );
}

export default function Menu() {
    const router = useRouter();
    const currentRoute = router.pathname;

    const ref = useRef();

    function toggleMenu() {
        ref.current.classList.toggle("active");
    }

    return (
        <>
            <section className="floating-menu" ref={ref}>
                <div className="container-floating-menu">
                    <header className="header-floating-menu">
                        <button className="btn backward">
                            <i className="fas fa-arrow-left"></i>
                            <span>
                                Temario actual
                            </span>
                        </button>
                        <button
                            className="btn close"
                            id="close"
                            onClick={toggleMenu}
                        >
                            X
                        </button>
                    </header>
                    <article>
                        <ul className="list-class-course">
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/history"
                                    currentRoute={currentRoute}
                                    text="Historia de JavaScript y la necesidad de la interacitividad en el navegador"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/terminal"
                                    currentRoute={currentRoute}
                                    text="Introducción a la terminal y línea de comandos"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html"
                                    currentRoute={currentRoute}
                                    text="HTML"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/layout-html"
                                    currentRoute={currentRoute}
                                    text="Importancia de la maquetación en HTML"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/esencial-html"
                                    currentRoute={currentRoute}
                                    text="Etiquetas esenciales"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/tags"
                                    currentRoute={currentRoute}
                                    text="Etiquetas definitivas"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/accessibility-user"
                                    currentRoute={currentRoute}
                                    text="Accesibilidad al usuario"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/attribute"
                                    currentRoute={currentRoute}
                                    text="Atributos"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/better-experience-acessibility"
                                    currentRoute={currentRoute}
                                    text="Mejorando la accesibilidad con atributos"
                                />
                            </li>
                            <li className="list-class" onClick={toggleMenu}>
                                <OldRoute
                                    to="/docs/html/container-html"
                                    currentRoute={currentRoute}
                                    text="Importancia de usar contenedores
                                &lt;div&gt;&lt;/div&gt; en HTML para diseño
                                con CSS"
                                />
                            </li>
                        </ul>
                    </article>
                </div>
            </section>
            <div className="floating-button" onClick={toggleMenu}>
                <button className="btn" id="open-floating-menu">
                    <i className="material-icons">menu</i>
                </button>
            </div>
            <style jsx>{styles}</style>
        </>
    );
}
