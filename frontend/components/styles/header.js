import css from "styled-jsx/css";

export default css`
    /* Mobiles styles */

    .header-site {
        background-color: #20232a;
        position: sticky;
        top: 0;
        z-index: 10;
    }

    /* Mobiles styles | Header | container */
    .header-container {
        padding: 8px;
        display: flex;
        align-items: center;
        height: 63.75px;
    }

    /* Mobiles styles | Header | title */
    .header-title {
        color: #fff;
        flex: 0.7;
        font-size: 14px;
        display: flex;
    }

    /* Mobiles styles | Header | title | Buttons */

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

    /* Mobiles styles | Header | title | pictures */
    .header-title picture {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        cursor: pointer;
    }

    .header-title picture h2 {
        font-size: 18px;
        margin-left: 12px;
        color: #fff;
    }

    .header-title picture img {
        vertical-align: bottom;
        width: 38px;
        height: 34px;
    }

    /* Mobiles styles | Header | search */
    .search {
        color: #fff;
        flex: 0.3;
        display: flex;
        justify-content: flex-end;
    }

    .form-search input {
        display: none;
    }

    .btn.btn-search {
        margin: auto 0;
    }

    /* Mobile styles | Header | sidenav */
    .sidenav {
        position: fixed;
        width: 0;
        z-index: 13;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        backdrop-filter: blur(15px);
        overflow: hidden;
        transform: translateX(-100%);
        transition: transform ease 0.45s, width ease 0.45s;
    }

    .sidenav.active {
        display: block;
        width: 100%;
        transform: translateX(0);
        transition: transform ease 0.45s;
    }

    /* Mobile styles | Header | sidenav | container */
    .container {
        margin: 0;
        width: 75%;
        background-color: #333;
        height: 100%;
        height: -webkit-fill-available;
        padding: 12px;
    }

    /* Mobile styles | Header | sidenav | header */
    .header-sidenav {
        display: flex;
    }

    /* Mobile styles | Header | sidenav | header | picture | img */
    .header-sidenav picture {
        display: flex;
        align-items: center;
    }

    /* Mobile styles | Header | sidenav | header | a */
    .header-sidenav a {
        color: #fff;
        display: flex;
    }

    /* Mobile styles | Header | sidenav | container | ul */
    .list-overlay {
        margin: 0;
        padding-left: 0;
        border-top: 1px solid gray;
    }

    /* Mobile styles | Header | sidenav | container | ul | li */
    .list-overlay li {
        list-style: none;
        margin-top: 8px;
        transition: background ease 0.18s;
    }

    .list-overlay li:hover {
        background-color: #09f;
    }

    /* Mobile styles | Header | sidenav | container | ul | li | a */
    .list-overlay li a {
        padding: 8px;
        color: #eee;
        display: inline-block;
        /* support for Firefox */
        width: 100%;
        width: -webkit-fill-available;
    }

    /* Mobile styles | Header | overlay */

    .overlay {
        position: fixed;
        display: none;
        right: 0;
        top: 0;
        bottom: 0;
        left: 75%;
        background-color: transparent;
        cursor: pointer;
        z-index: 13;
        overflow: auto;
    }

    .overlay.active {
        display: block;
    }

    @media screen and (max-width: 350px) {
        /* Mobiles styles | Header | title | pictures */

        .header-title picture h1 {
            font-size: 16px;
            margin-left: 12px;
        }
    }

    @media screen and (max-width: 350px) {
        /* Mobiles styles | Header | title */

        .header-title {
            flex: 0.75;
        }

        /* Mobiles styles | Header | title | pictures */

        .header-title picture h1 {
            font-size: 16px;
            margin-left: 8px;
        }

        .search {
            flex: 0.25;
        }
    }

    /* Desktop styles */

    @media screen and (min-width: 1024px) {

        /* Desktop styles | Header | title | Buttons */
        .btn-menu {
            display: none;
        }

        /* Desktop styles | Header | title */
        .header-title {
            flex: 0.3;
        }

        /* Desktop styles | Header | search */
        .search {
            flex: 0.2;
        }

        /* Desktop styles | Header | sidenav */
        .sidenav {
            position: static;
            width: auto;
            backdrop-filter: none;
            transform: translateX(0);
            transition: none;
            flex: 0.5;
        }

        /* Desktop styles | Header | sidenav | container */
        .sidenav .container {
            background-color: transparent;
            width: 100%;
            width: -webkit-fill-available;
        }

        /* Desktop styles | Header | sidenav | header */
        .header-sidenav {
            display: none;
        }

        /* Desktop styles | Header | sidenav | List */
        .list-overlay {
            display: flex;
            border-top: none;
        }

        /* Desktop styles | Header | sidenav | List | li */
        .list-overlay li {
            margin-top: 0;
        }

        /* Desktop styles | Header | sidenav | List | li | a */
        .list-overlay li a {
            padding: 15px;
        }
    }

    @media screen and (min-width: 1260px) {
        /* Desktop styles | Header | container */
        .header-container {
            width: 1260px;
            margin: 0 auto;
        }
    }
`;
