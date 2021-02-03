import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: #03091e;
        color: #fff;
        padding: 15px;
        position: relative;
        z-index: 111;
    }
    
    .social {
        display: flex;
        justify-content: space-around;
    }

    .owner h3 {
        text-align: center;
    }

    .social img {
        width: 48px;
        cursor: pointer;
    }

    .reference {
        margin: 15px 0;
        display: flex;
        justify-content: space-between;
    }
`