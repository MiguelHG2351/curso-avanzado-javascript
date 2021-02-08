import { useRef } from 'react'
import Link from "next/link";
import styles from "./styles/header";

export default function Header() {
    const overlayRef = useRef()
    const sidenavRef = useRef()

    function toggleMenu() {
        const sidenav = sidenavRef.current
        const overlay = overlayRef.current

        sidenav.classList.toggle('active')
        overlay.classList.toggle('active')
    }

    return (
        <>
            <header
                className="header-site"
                style={{ position: "sticky", top: 0 }}
            >
                <div className="header-title">
                    <button className="btn btn-menu" onClick={toggleMenu}>
                        <i className="material-icons">menu</i>
                    </button>
                    <Link href="/">
                        <a>
                            <picture>
                                <img
                                    src="/images/header_logo.svg"
                                    alt="Logo de React Native"
                                />
                                <h2>JavaScript React</h2>
                            </picture>
                        </a>
                    </Link>
                </div>
                <div className="sidenav" ref={sidenavRef}>
                    <div className="container">
                        <div className="header-sidenav">
                            <Link href="/">
                                <a onClick={toggleMenu}>
                                    <picture>
                                        <img src="/images/header_logo.svg" alt="React LOGO" width="45px"/>
                                    </picture>
                                    <h2>JavaScript React</h2>
                                </a>
                            </Link>
                        </div>
                        <ul className="list-overlay">
                            <li onClick={toggleMenu}>
                                <Link href="/docs">
                                    <a>Docs</a>
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/components">
                                    <a>Components</a>
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/API">
                                    <a>API</a>
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/community">
                                    <a>Community</a>
                                </Link>
                            </li>
                            <li onClick={toggleMenu}>
                                <Link href="/blog">
                                    <a>Blog</a>
                                </Link>
                            </li>
                            <li>
                                <a href="https://github.com/MiguelHG2351/curso-avanzado-javascript">GITHUB</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="search">
                    <form className="form-search">
                        <input type="text" placeholder="CTR+K" />
                    </form>
                    <button className="btn btn-search">
                        <i className="material-icons">search</i>
                    </button>
                </div>
                <div className="overlay" ref={overlayRef} onClick={toggleMenu}></div>
            </header>
            <style jsx>{styles}</style>
        </>
    );
}
