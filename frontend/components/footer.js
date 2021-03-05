import styles from "./styles/footer";
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">

                    <div className="footer-description">
                        <div className="principal-info">
                            <div className="owner">
                                <h3>
                                    <a href="https://miguel2351.vercel.app/" target="_blank">
                                        MiguelHG2351
                                    </a>
                                </h3>
                            </div>
                            <div className="social">
                                <a href="https://www.facebook.com/miguelHG2351">
                                    <img src="/icons/facebook-brands.svg" loading="lazy" alt="facebook" />
                                </a>
                                <a href="https://twitter.com/MiguelHG2351">
                                    <img src="/icons/twitter-brands.svg" loading="lazy" alt="twitter" />
                                </a>
                                <a href="https://github.com/MiguelHG2351">
                                    <img src="/icons/github-brands.svg" loading="lazy" alt="github" />
                                </a>
                            </div>
                        </div>
                        <div className="reference-container">
                            <div className="title-reference">
                                <h3>Iconos, Ilustraciones, etc.</h3>
                            </div>
                            <div className="reference">
                                <a
                                    href="https://isometric.online/"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Illustrations
                                </a>
                                <a href="https://fontawesome.com/">
                                    <Image src="/images/font-awesome.webp" width={48} height={48} alt="font awesome"/>
                                </a>
                                <a href="https://material.io/resources/icons/">
                                    <Image src="/images/material-icons.png" width={48} height={48} alt="material icons"/>
                                </a>
                            </div>
                        </div>
                        <div className="menu-footer-container">
                            <div className="title-menu-footer">
                                <h3>Tecnologías</h3>
                            </div>
                            <ul className="menu-footer">
                                <li>
                                    <Link href="/html">
                                        <a>
                                            HTML
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/css">
                                        <a>
                                            CSS
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/js">
                                        <a>
                                            JavaScript
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/nodejs">
                                        <a>
                                            NodeJS
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="website-author">
                        <p>Creado por <a href="https://miguel2351.vercel.app" target="_blank">Miguel Hernández</a> para futuros Devs :)</p>
                    </div>
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
