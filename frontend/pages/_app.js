import { Fragment } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import {
    motion,
    AnimatePresence,
    useTransform,
    useViewportScroll,
} from "framer-motion";
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

    const { scrollYProgress } = useViewportScroll();
    const widthElement = useTransform(
        scrollYProgress,
        (value) => `${value * 100}%`
    );

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
                    href="/css/nprogress.css"
                />
                <link rel="manifest" href="/manifest.json" />
            </Head>
            <Layout>
                <Header />
                <div className={router.route !== "/" ? "main" : null}>
                    {router.route.includes("/docs") && (
                        <Fragment>
                            <Menu />
                            <div className="progress-icon">
                                <motion.div
                                    style={{
                                        width: widthElement,
                                        height: "5px",
                                        backgroundColor: "#09f",
                                    }}
                                ></motion.div>
                            </div>
                        </Fragment>
                    )}
                    <AnimatePresence exitBeforeEnter initial={false}>
                        <Component {...pageProps} key={router.route} />
                    </AnimatePresence>
                </div>
                <ScrollUp />
                <Footer />
            </Layout>
        </>
    );
}

export default MyApp;
