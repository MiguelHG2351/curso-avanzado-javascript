import Head from 'next/head'
import { motion } from 'framer-motion'

export default function History() {
    
    return (
        <>
            <Head>
                <title>Historia de JavaScript y la necesidad de la interacitividad en el navegador</title>
            </Head>
            <motion.section exit={{opacity: 0}}>
                <h2>JavaScript y React</h2>
            </motion.section>
        </>
    );
}
