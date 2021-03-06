import css from "styled-jsx/css";

export default css`

/* Default styles */
.theme p a {
    color: #09f;
}

.content h1 {
    text-align: center;
}

.hero-image img {
    width: 250px;
}

.theme-summary > *, .some-theme > *, .theme > * {
    font-family: var(--font-secondary);
}

.theme-summary h3 {
    font-size: 26px;
}

.some-theme li {
    list-style-type: "✔";
    list-style-position: outside;
}

.some-theme li + li {
    margin-top: 12px;
}

.themes {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5px;
    grid-row-gap: 5px;
}

.theme-1 {
    background-image: linear-gradient(to right, #dd4b25 0 50%, #e96228 50% 100%);
}

.theme-2 {
    background-image: linear-gradient(to right, #2173f7 0 50%, #3194f7 50% 100%);
}

.theme-3 {
    background-color: #efd81d;
    color: #414141;
}

.theme-4 {
    background-color: #09f;
}

.theme-5 {
    background-image: linear-gradient(112deg, #3c823b 0 35%, #75ae5e 35% 70%, #7fc728 70% 100%);
}

.theme-6 {
    background-image: linear-gradient(112deg, #55a54e 0 50%, #479848 50% 100%);
}

.theme-1, .theme-2, .theme-3, .theme-4, .theme-5, .theme-6 {
    padding: 14px;
    cursor: pointer;
}

@media screen and (min-width: 1024px) {
    .intro {
        display: grid;
        grid-template-areas: "text image";
        grid-template-columns: repeat(2, 1fr);
        align-items: center;
    }

    .theme-intro h3 {
        font-size: 36px;
    }

    .theme-intro p {
        font-size: 16px;
        color: #ddd;
    }

    .get-started {
        padding: 0;
        transition: transform ease 0.18s;
    }

    .get-started a {
        display: inline-block;
        padding: 12px 22px;
        background-color: #09f;
        color: #eee;
        border-radius: 12px;
    }

    .get-started:hover {
        transform: scale(0.9);
    }

    .intro [align] {
        grid-area: image;
    }

    .theme-summary {
        grid-area: text;
    }
}

@media screen and (min-width: 1440px) {
    .themes {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 15px;
        grid-row-gap: 15px;
    }

    .hero-image img {
        width: 500px;
    }
}
    
`;
