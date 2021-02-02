import css from 'styled-jsx/css'

export default css`

    /* Mobile styles | floating button */    
    .floating-button {
        --spacing: 12px;
        position: fixed;
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
`