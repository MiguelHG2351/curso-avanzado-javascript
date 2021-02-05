import css from 'styled-jsx/css'

export default css`
    footer {
        background-color: #03091e;
        color: #fff;
        padding: 15px;
    }
    
    .social {
        display: flex;
        justify-content: space-around;
    }

    .owner h3, .title-reference h3 {
        text-align: center;
    }

    .social a img {
        width: 48px;
        cursor: pointer;
        vertical-align: bottom;
    }

    .reference {
        margin: 15px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .reference a:first-child {
        color: #fff;
        background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        font-weight: 700;
        font-size: 22px;
    }

    .website-author {
        font-size: 12px;
    }
`