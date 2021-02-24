import Head from "next/head";
import { motion } from 'framer-motion'

export default function Community() {
    return (
        <>
            <Head>
                <title>Comunidades a las que puedes entrar</title>
            </Head>
            <motion.section exit={{opacity: 0}} className="community">
                <h1>Leonidas Esteban</h1>
                <h1>Carlos Azaustre</h1>
                <h1>Guillermo Rodas</h1>
                <h1>Guillermo Rodas</h1>
                <h1>Midudev</h1>
            </motion.section>
        </>
    );
}
