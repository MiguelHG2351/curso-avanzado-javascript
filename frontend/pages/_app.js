import Head from 'next/head'
import dynamic from 'next/dynamic'

//Components
import Layout from 'components/Layout'
import Header from 'components/header'
import Menu from 'components/menu'
import Footer from 'components/footer'
const ScrollUp = dynamic(import('components/scrollToTop'), {ssr: false})

function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="/images/favicon.ico" type="image/x-icon"/>
            </Head>
            <Layout>
                <Header />
                <Menu />
                <Component {...pageProps} />
                <ScrollUp />
                <Footer />
            </Layout>
        </>
    )
}

export default App