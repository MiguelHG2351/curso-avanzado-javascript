import Head from "next/head";
import App from 'next/app'
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { nanoid } from 'nanoid'

//Components
import Layout from "components/Layout";
import Header from "components/header";
import Menu from "components/menu";
import Footer from "components/footer";
const ScrollUp = dynamic(import("components/scrollToTop"), { ssr: false });

class MyApp extends App {
    render() {
        const {Component, pageProps} = this.props
        return (
            <>
            <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="shortcut icon"
                        href="/images/favicon.ico"
                        type="image/x-icon"
                    />
                </Head>
                <AnimatePresence exitBeforeEnter>
                    <Layout>
                        <Header />
                        <Menu />
                        <Component {...pageProps} key={nanoid()} />
                        <ScrollUp />
                        <Footer />
                    </Layout>
                </AnimatePresence>
            </>
        );
    }
}

export default MyApp;
