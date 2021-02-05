import css from "styled-jsx/css";

const styles = css.global`
    /* vietnamese */
    @font-face {
        font-family: "Be Vietnam";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/bevietnam/v2/FBVzdDflz-iPfoPuIC2iIqkn6H9k.woff2)
            format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: "Be Vietnam";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/bevietnam/v2/FBVzdDflz-iPfoPuIC2iIqgn6H9k.woff2)
            format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Be Vietnam";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/bevietnam/v2/FBVzdDflz-iPfoPuIC2iIqYn6A.woff2)
            format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }

    /* cyrillic-ext */
    @font-face {
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu72xKOzY.woff2) format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu5mxKOzY.woff2) format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu7mxKOzY.woff2) format("woff2");
        unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu4WxKOzY.woff2) format("woff2");
        unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu7WxKOzY.woff2) format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu7GxKOzY.woff2) format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(/fonts/KFOmCnqEu92Fr1Mu4mxK.woff2) format("woff2");
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193,
            U+2212, U+2215, U+FEFF, U+FFFD;
    }
    /* cyrillic-ext */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfCRc4EsA.woff2) format("woff2");
        unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF,
            U+A640-A69F, U+FE2E-FE2F;
    }
    /* cyrillic */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfABc4EsA.woff2) format("woff2");
        unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
    }
    /* greek-ext */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfCBc4EsA.woff2) format("woff2");
        unicode-range: U+1F00-1FFF;
    }
    /* greek */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfBxc4EsA.woff2) format("woff2");
        unicode-range: U+0370-03FF;
    }
    /* vietnamese */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfCxc4EsA.woff2) format("woff2");
        unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169,
            U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
    }
    /* latin-ext */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfChc4EsA.woff2) format("woff2");
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
            U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
    }
    /* latin */
    @font-face {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(/fonts/KFOlCnqEu92Fr1MmWUlfBBc4.woff2) format("woff2");
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
        font-family: "Roboto";
    }

    .xd {
        transition: all ease 0.3s;
    }

    a {
        text-decoration: none;
    }

    body {
        background-color: #0c1633;
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
`;

export default styles;
