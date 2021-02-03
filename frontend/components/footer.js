import styles from "styles/footer";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="owner">
                    <h3>MiguelHG2351</h3>
                </div>
                <div className="social">
                    <img src="/icons/facebook-brands.svg" alt="facebook" />
                    <img src="/icons/twitter-brands.svg" alt="twitter" />
                    <img src="/icons/github-brands.svg" alt="github" />
                </div>
                <div className="reference">
                    <a
                        href="https://miguel2351.vercel.app"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Miguel2351
                    </a>
                    <a href="https://fontawesome.com/">font awesone</a>
                    <a href="https://material.io/resources/icons/">Material Icons</a>
                </div>
            </footer>
            <style jsx>{styles}</style>
        </>
    );
}
