import styles from 'styles'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Miguel2351 | Introducción al desarrollo web</title>

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