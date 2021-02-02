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
            <style jsx>
                { styles }
            </style>
        </>
    )
}