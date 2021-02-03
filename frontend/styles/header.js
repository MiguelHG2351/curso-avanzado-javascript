import css from 'styled-jsx/css'

export default css`
    

/* Mobiles styles */

/* Mobiles styles | Header */
.header-site {
        background-color: #20232a;
        padding: 8px;
        display: flex;
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

`