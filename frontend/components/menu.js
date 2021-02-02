import { useRef } from 'react'
import styles from 'styles/menu'

export default function Menu() {
    const ref = useRef()

    function openMenu() {
        ref.current.classList.toggle('active')
    }

    return (
        <>
            <section className="floating-menu" ref={ref}>
                <header className="header-floating-menu">
                    <h2>Temario</h2>
                    <button className="btn close" id="close" onClick={openMenu}>
                        X
                    </button>
                </header>
            </section>
            <div className="floating-button" onClick={openMenu}>
                <button className="btn" id="open-floating-menu"><i className="material-icons">menu</i></button>
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    );
}
