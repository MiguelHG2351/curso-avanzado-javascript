import css from "styled-jsx/css";

const styles = css.global`
    html {
        scroll-behavior: smooth;
    }

    :root {
        --font-secondary: "Rubik", sans-serif;
        --font-primary: "Montserrat", sans-serif;
        --secondary-background: #060b18;
    }

    /* Rubik Font */

    /* cyrillic-ext */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWkU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFU0U1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* hebrew */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
    }
    /* latin-ext */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FWkU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FU0U1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* hebrew */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FVUU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0590-05FF, U+20AA, U+25CC, U+FB1D-FB4F;
    }
    /* latin-ext */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FWUU1Z4Y.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-4I-FV0U1.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* vietnamese */
    @font-face {
        font-family: "Rubik";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Rubik/FBVzdDflz-iPfoPuIC2iIqkn6H9k.woff2)
            format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }

    /* Montserrat Font */

    /* cyrillic-ext */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Montserrat/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2)
            format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Montserrat/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2)
            format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Montserrat/JTUSjIg1_i6t8kCHKm459WZhyzbi.woff2)
            format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Montserrat/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/Montserrat/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Montserrat/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2)
            format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Montserrat/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2)
            format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* vietnamese */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Montserrat/JTURjIg1_i6t8kCHKm45_dJE3gbD_u50.woff2)
            format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Montserrat/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/Montserrat/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* fallback */
    @font-face {
        font-family: "Material Icons";
        font-style: normal;
        font-weight: 400;
        src: url(https://fonts.gstatic.com/s/materialicons/v70/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
            format("woff2");
        font-display: swap;
    }

    .material-icons {
        font-family: "Material Icons";
        font-weight: normal;
        font-style: normal;
        font-size: 24px;
        line-height: 1;
        letter-spacing: normal;
        text-transform: none;
        display: inline-block;
        white-space: nowrap;
        word-wrap: normal;
        direction: ltr;
        -webkit-font-feature-settings: "liga";
        -webkit-font-smoothing: antialiased;
        font-display: Arial, Helvetica;
    }

    :root {
        --spacing: 12px;
    }

    * {
        box-sizing: border-box;
    }

    h1,
    p,
    h3,
    h2,
    a,
    li {
        font-family: var(--font-primary);
    }

    p {
        line-height: 1.75em;
    }

    .xd {
        transition: all ease 0.3s;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: var(--secondary-background);
        margin: 0;
    }

    .btn {
        background-color: transparent;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
    }

    .btn-menu {
        margin: auto 0;
        display: flex;
        transition: transform 0.21s ease;
    }

    .btn-menu:hover {
        transform: scale(0.9);
    }

    .btn i {
        font-size: 2.2rem;
    }

    .content {
        color: #eee;
        width: 90%;
        margin: 15px auto;
    }


    @media screen and (min-width: 1260px) {
        .content {
            width: 1260px;
        }
        .main {
            max-width: 1190px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 30% 70%;
        }
    }
`;

export default styles;
