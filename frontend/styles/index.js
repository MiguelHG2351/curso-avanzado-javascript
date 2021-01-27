import css from "styled-jsx/css";

export default css`
    /* Mobiles styles | floating Menu */

    .floating-menu {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10;
        background-color: rgba(255, 255, 255, 1);
        padding: 12px;
        display: none;
    }

    .floating-menu.active {
        display: block;
    }

    /* Mobiles styles | floating Menu | Header */
    .header-floating-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Mobiles styles | floating Menu | Header | close */
    .close {
        height: 48px;
        width: 48px;
        text-align: center;
        cursor: pointer;
        color: #000;
        font-size: 18px;
    }

    /* Mobiles styles | floating Menu | close */
`;
