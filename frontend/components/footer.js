import styles from "styles/footer";

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
                <div className="title-reference">
                    <h3>Iconos, Ilustraciones, etc.</h3>
                </div>
                <div className="reference">
                    <a
                        href="https://isometric.online/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Isometric Illustrations
                    </a>
                    <a href="https://fontawesome.com/">font awesone</a>
                    <a href="https://material.io/resources/icons/">Material Icons</a>

                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
