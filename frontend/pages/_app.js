import Head from 'next/head'

//Components
import Layout from 'components/Layout'
import Header from 'components/header'

function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="icon" href="/images/favicon.ico"/>
            </Head>
            <Layout>
                <Header />
                <Component {...pageProps} />
            </Layout>
        </>
    )
}

export default App