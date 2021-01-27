import styles from 'styles'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Introducción al desarrollo web | Miguel2351</title>

            </Head>
            <section>
                <h2>JavaScript y React</h2>
            </section>

            <section className="floating-menu" id="floating-men">
                <header className="header-floating-menu">
                    <h2>Temario</h2>
                    <button className="btn close" id="close">
                        X
                    </button>
                </header>
            </section>
            <div className="floating-button">
                <button className="btn" id="open-floating-menu"><i className="material-icons">menu</i></button>
            </div>
            <style jsx>
                { styles }
            </style>
        </>
    )
}