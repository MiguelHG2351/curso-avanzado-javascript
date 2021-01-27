import styles from 'styles/header'

export default function Header() {
    return (
        <header className="header-site" style={{position: 'sticky', top: 0}}>
            <div className="header-title">
                <button className="btn btn-menu">
                    <i className="material-icons">menu</i>
                </button>
                <picture>
                    <img
                        src="/images/header_logo.svg"
                        alt="Logo de React Native"
                    />
                    <h1>JavaScript React</h1>
                </picture>
            </div>
            <div className="search">
                <form className="form-search">
                    <input type="text" placeholder="CTR+K" />
                </form>
                <button className="btn btn-search"><i className="material-icons">search</i></button>
            </div>
            <style jsx>
                {styles}
            </style>
        </header>
    )
}