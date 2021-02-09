import styles from "./styles/footer";
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer>
                <div className="owner">
                    <h3>MiguelHG2351</h3>
                </div>
                <div className="social">
                    <a href="https://www.facebook.com/miguelHG2351">
                        <img src="/icons/facebook-brands.svg" loading="lazy" alt="facebook" />
                    </a>
                    <a href="https://twitter.com/MiguelHG2351">
                        <img src="/icons/twitter-brands.svg" loading="lazy" alt="twitter" />
                    </a>
                    <a href="https://github.com/MiguelHG2351">
                        <img src="/icons/github-brands.svg" loading="lazy" alt="github" />
                    </a>
                </div>
                <div className="reference-container">
                    <div className="title-reference">
                        <h3>Iconos, Ilustraciones, etc.</h3>
                    </div>
                    <div className="reference">
                        <a
                            href="https://isometric.online/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Illustrations
                        </a>
                        <a href="https://fontawesome.com/">
                            <Image src="/images/font-awesome.webp" width={48} height={48} alt="font awesome"/>
                        </a>
                        <a href="https://material.io/resources/icons/">
                            <Image src="/images/material-icons.png" width={48} height={48} alt="material icons"/>
                        </a>
                    </div>
                </div>
                <div className="website-author">
                    <p>Creado por <a href="https://miguel2351.vercel.app" target="_blank">Miguel Hernández</a> para futuros Devs :)</p>
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
