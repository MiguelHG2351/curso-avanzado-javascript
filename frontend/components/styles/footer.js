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

    .owner h3, .title-reference h3, .title-menu-footer h3 {
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

    .menu-footer {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 22px;
        padding-left: 0;
    }

    .menu-footer li {
        list-style: none;
        text-align: center;
    }
    
    .menu-footer li a {
        color: #09f;
    }

    .website-author {
        font-size: 12px;
        text-align: center;
        margin-top: 52px;
    }

    .website-author p {
        margin-bottom: 0;
    }

    @media screen and (min-width: 1024px) {
        footer {
            display: grid;
            grid-template-columns: 25% 50% 25%;
            grid-template-rows: repeat(3, 1fr);
            grid-template-areas: "owner menu reference" "social menu reference" "end-title end-title end-title";
            align-items: center;
        }

        .owner {
            grid-area: owner;
        }

        .social {
            grid-area: social;
        }

        .reference-container {
            grid-area: reference;
        }

        .menu-footer-container {
            grid-area: menu;
        }

        .website-author {
            grid-area: end-title;
        }

    }
`