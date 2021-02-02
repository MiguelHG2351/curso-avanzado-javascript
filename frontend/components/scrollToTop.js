import css from 'styled-jsx/css'

const styles = css`
    .scroll-top {
        position: fixed;
        bottom: 100px;
        right: var(--spacing);
        /* left: unset; */
        background-color: rgba(17, 153, 219, 0.84);
        color: #fff;
        padding: 8px;
        cursor: pointer;
    }
`

export default function ScrollToTop() {
    function scrollTop() {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <>
            <div className="scroll-top" onClick={scrollTop}><i className="material-icons">keyboard_arrow_up</i></div>
            <style jsx>
                {styles}
            </style>
        </>   
    )
}