import css from "styled-jsx/css";

export default css`
    /* Mobile styles | floating button */
    .floating-button {
        position: fixed;
        z-index: 10;
        bottom: var(--spacing);
        right: var(--spacing);
        background-color: #09f;
        border-radius: 12px;
        overflow: hidden;
        padding: 8px;
        cursor: pointer;
        user-select: none;
        transition: transform 0.2s ease;
    }

    .floating-button:hover {
        transform: scale(0.9);
    }

    /* Mobiles styles | floating Menu | Header */
    .header-floating-menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    /* Mobiles styles | floating Menu | Header | h2 */
    .header-floating-menu h2 {
        cursor: pointer;
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

    /* Mobiles styles | floating Menu */

    .floating-menu {
        position: fixed;
        z-index: 11;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(255, 255, 255, 1);
        padding: 12px;
        display: none;
    }

    .floating-menu.active {
        display: block;
    }

    /* Mobiles styles | floating Menu | List Class */

    .list-class-course {
        padding: 0;
    }

    .list-class {
        list-style: none;
        list-style-position: inside;
        /* border-left: 4px solid #09f;
        border-radius: 0.25rem; */
    }

    /* .list-class.active */

    .list-class:nth-child(n + 2) {
        margin-top: 22px;
    }

    @media screen and (min-width: 1020px) {
        /* Desktop styles | floating button */
        .floating-button {
            display: none;
        }
        
        .container-floating-menu {
            position: sticky;
            top: 0;
            bottom: 0;
            overflow-y: auto;
        }

        /* Desktop styles | floating Menu | Header | close */
        .close {
            display: none;
        }
    }

    @media screen and (min-width: 1190px) {
        .floating-menu {
            display: block;
            position: sticky;
            top: 0px;
            background-color: #0c1633;
            color: #fff;
            border-right: 1px solid gray;
        }
    }

`;

export const linkStyle = css`
    a {
        text-decoration: none;
        display: inline-block;
        padding: 8px;
        color: #000;
        -webkit-tap-highlight-color: transparent;
        outline: none;
        width: -webkit-fill-available;
    }

    a.active {
        border-left: 4px solid #09f;
        border-radius: 0.25rem;
    }

    @media screen and (min-width: 1020px) {
        a {
            color: #eee;
        }
    }

`;
