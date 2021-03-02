import Head from "next/head";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import styles from "styles/terminal";
import Image from "next/image";

export default function Terminal() {
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 250,
    };
    
    // const [isComplete, setIsComplete] = useState(false);
    // const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

    // const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });
    // useEffect(() => {
    //     yRange.onChange(v => setIsComplete(v >= 1))
    // }, [yRange]);

    return (
        <>
            <Head>
                <title>Introducción a la terminal y Línea de Comandos</title>
            </Head>
            <motion.div
                transition={spring}
                exit={{ opacity: 0, scrollBehavior: "smooth"}}
            >
                <section className="content-docs" style={{}}>
                    <h1>Introducción a la terminal y la Línea de comandos</h1>
                    <article>
                        <div align="center">
                            <Image
                                src="/images/terminal.svg"
                                width={550}
                                height={250}
                                alt="Illustración de una terminal"
                                layout="responsive"
                            />
                        </div>
                        <p>
                            Los comandos desde la terminal son realmente imporantes
                            dentro de la tecnología por que permiten manipular
                            información o realizar alguna acción básica.
                        </p>
                        <p>
                            A veces se muestran los comandos pero no nos enseñan
                            para que pueden ser útiles, y eso hace pensar que solo
                            hay que aprenderlos pero realmente son muy importantes
                            para ciertas acciones.
                        </p>
                        <p>
                            Si quieres analizar los logs de un servidor ese archivo
                            puede tener miles o millones de líneas y no creo que el
                            editor de código siempre pueda ayudarnos a procesar todo
                            ese texto, también mover ciertos archivos que tienen
                            diferentes extensiones es muy complicado de realizar.
                            Con la terminal o línea de comandos puedes facilitarte
                            el trabajo
                        </p>
                        <p>
                            Por cierto, facilitar el trabajo no sinonimo de ser
                            perezoso, es por que no siempre hay que reinventar la
                            rueda, hay que ser más ágiles para realizar un trabajo.
                            Por ejemplo, el control remoto fue creado para evitar
                            cambiar de uno en uno el canal por que con el tiempo hay
                            más canales y esto se hace más complicado ademas que los
                            botones del dispositivo se dañan con el tiempo
                            provocando que el dispositivo sea inservible si no tiene
                            la opción de un control.
                        </p>
                        <h2>Comandos para trabajar desde nuestra ubicación</h2>
                        <p>
                            ls: lista todos los archivos de la ubicación (en windows
                            lista hasta los que estan ocultos)
                        </p>
                        <p>
                            . -&gt; directorio actual (por eso ./ indica la
                            ubicación actual para importar un archivo)
                        </p>
                        <p>.. -&gt; directorio anterior</p>
                        <p>
                            ls -t -&gt; Ordena los elementos listados por fecha de
                            modificación
                        </p>
                        <p>
                            ls -x -&gt; Ordena los elementos listados en la consola
                            o terminal por nombre y después por extensión
                        </p>
                        <p>
                            ls -X -&gt; Ordena los elementos listados en la consola
                            o terminal por extensión y después por nombre
                        </p>
                        <p>
                            ls -lh -&gt; Muestra toda la información de: Permisos,
                            usuarios, tamaño, fecha y hora de creación
                        </p>
                        <p>
                            ls -R -&gt; Muestra los archivos y de todos los
                            subdirectorios
                        </p>
                        <p>
                            ls -S -&gt; Ordena los resultados listados por tamaño de
                            archivos
                        </p>
                        <h2>Comandos para cambiar la ubicación</h2>
                        <p>
                            pwd -&gt; Print Working directory Muestra la ruta del
                            directorio actual
                        </p>
                        <p>
                            cd -&gt; Change directory Se utiliza para cambiar de
                            directorio
                        </p>
                        <p>cd /home/user</p>
                        <h2>Analizando la ubicación</h2>
                        <p>
                            tree -&gt; Crea un diagrama de árbol de todos los
                            directorios y sub directorios, en el cmd de Windows no
                            esta disponible pero puedes instalar un{" "}
                            <a
                                href="https://docs.microsoft.com/en-us/windows/wsl/install-win10"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                wsl
                            </a>{" "}
                            (Windows Subsystem for Linux) para ejecutar comandos de
                            Linux desde windows
                        </p>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>   
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </article>
                </section>
            </motion.div>
            <style jsx>{styles}</style>
        </>
    );
}
