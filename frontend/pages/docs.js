import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Docs() {
    return (
    <>
        <Head>
            <title>Docs | JavaScript</title>
        </Head>
        <motion.div exit={{opacity: 0, transition: 'all ease 0.3s'}}>
            <h2>Aquí va la documentación :)</h2>
        </motion.div>
    </>
    )
}