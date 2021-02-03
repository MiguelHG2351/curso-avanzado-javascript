import Link from "next/link";
import { useRef } from "react";
import styles from "styles/menu";

export default function Menu() {
    const ref = useRef();

    function toggleMenu() {
        ref.current.classList.toggle("active");
    }

    return (
        <>
            <section className="floating-menu" ref={ref}>
                <header className="header-floating-menu">
                    <h2>Temario</h2>
                    <button className="btn close" id="close" onClick={toggleMenu}>
                        X
                    </button>
                </header>
                <article>
                    <ul className="list-class-course">
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/history">
                                    Historia de JavaScript y la necesidad de la
                                    interacitividad en el navegador
                            </Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/html">HTML</Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/layout-html">
                                Importancia de la maquetación en HTML
                            </Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/esencial-html">
                                Etiquetas esenciales
                            </Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/tags">Etiquetas definitivas</Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/accessibility-user">
                                Accesibilidad al usuario
                            </Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/attribute">Atributos</Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/better-experience-acessibility">
                                Mejorando la accesibilidad con atributos
                            </Link>
                        </li>
                        <li className="list-class" onClick={toggleMenu}>
                            <Link href="/container-html">
                                Importancia de usar contenedores
                                &lt;div&gt;&lt;/div&gt; en HTML para diseño con
                                CSS
                            </Link>
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
