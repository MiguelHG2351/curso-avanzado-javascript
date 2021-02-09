import Head from "next/head";
import dynamic from "next/dynamic";
import { AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";

//Components
import Layout from "components/Layout/Layout";
import Header from "components/header";
import Menu from "components/menu";
import Footer from "components/footer";
const ScrollUp = dynamic(import("components/scrollToTop"), { ssr: false });

Router.events.on("routeChangeStart", (_) => {
    NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp(props) {
    const { Component, pageProps } = props;
    const router = useRouter();

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
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
                />
            </Head>
            <Layout>
                <Header />
                <div className={router.route !== "/" ? "main" : null}>
                    {router.route !== "/" && <Menu />}
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Component {...pageProps} key={nanoid()} />
                    </AnimatePresence>
                </div>
                <ScrollUp />
                <Footer />
            </Layout>
        </>
    );
}

export default MyApp;
