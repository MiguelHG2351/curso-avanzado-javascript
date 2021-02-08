import Head from "next/head";

export default function Terminal() {
    return (
        <>
            <Head>
                <title>Introducción a la terminal y Línea de Comandos</title>
            </Head>
            <section>
                <h1>Introducción a la terminal y la Línea de comandos</h1>
                <article>
                    <h2>Comandos para trabajar desde nuestra ubicación</h2>
                    <p>ls: lista todos los archivos de la ubicación (en windows lista hasta los que estan ocultos)</p>
                    <p>. -&gt; directorio actual (por eso ./ indica la ubicación actual para importar un archivo)</p>
                    <p>.. -&gt; directorio anterior</p>
                    <p>ls -t -&gt; Ordena los elementos listados por fecha de modificación</p>
                    <p>ls -x -&gt; Ordena los elementos listados en la consola o terminal por nombre y después por extensión</p>
                    <p>ls -X -&gt; Ordena los elementos listados en la consola o terminal por extensión y después por nombre</p>
                    <p>ls -lh -&gt; Muestra toda la información de: Permisos, usuarios, tamaño, fecha y hora de creación</p>
                    <p>ls -R -&gt; Muestra los archivos y carpetas de todos los subdirectorios</p>
                    <p>ls -S -&gt; Ordena los resultados listados por tamaño de archivos</p>
                    <h2>Comandos para cambiar la ubicación</h2>
                    <p>pwd -&gt; Print Working directory Muestra la ruta del directorio actual</p>
                    <p>cd -&gt; Change directory Se utiliza para cambiar de directorio</p>
                    <p>cd /home/user</p>
                    
                </article>
            </section>
        </>
    );
}
