import Document, { Html, Head, NextScript, Main } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html lang="es">
                <Head>
                    <meta name="theme-color" content="#0099ff"/>
                    <script src="/index.js"></script>
                </Head>
                <body>
                    <Main />
                    <div id="modal"></div>
                    <NextScript />
                    <script src="https://kit.fontawesome.com/cd830bd1aa.js" crossorigin="anonymous"></script>
                </body>
            </Html>
        );
    }
}

export default MyDocument
