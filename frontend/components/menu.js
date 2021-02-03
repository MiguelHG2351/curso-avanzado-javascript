import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import styles, { linkStyle } from "styles/menu";

function OldRoute({ to, text, currentRoute }) {
    return (
        <>
            <Link href={to}>
                <a className={currentRoute === to ? "active" : null}>{text}</a>
            </Link>
            <style jsx>{ linkStyle }</style>
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
                <header className="header-floating-menu">
                    <h2>Temario</h2>
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
                                to="/history"
                                currentRoute={currentRoute}
                                text="Historia de JavaScript y la necesidad de la interacitividad en el navegador"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/html"
                                currentRoute={currentRoute}
                                text="HTML"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/layout-html"
                                currentRoute={currentRoute}
                                text="Importancia de la maquetación en HTML"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/esencial-html"
                                currentRoute={currentRoute}
                                text="Etiquetas esenciales"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/tags"
                                currentRoute={currentRoute}
                                text="Etiquetas definitivas"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/accessibility-user"
                                currentRoute={currentRoute}
                                text="Accesibilidad al usuario"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/attribute"
                                currentRoute={currentRoute}
                                text="Atributos"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/better-experience-acessibility"
                                currentRoute={currentRoute}
                                text="Mejorando la accesibilidad con atributos"
                            />
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <OldRoute
                                to="/container-html"
                                currentRoute={currentRoute}
                                text="Importancia de usar contenedores
                                &lt;div&gt;&lt;/div&gt; en HTML para diseño
                                con CSS"
                            />
                        </li>
                    </ul>
                </article>
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
