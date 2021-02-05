import css from "styled-jsx/css";

export default css`
.content {
    color: #eee;
    width: 90%;
    margin: 15px auto;
}

.content h1 {
    text-align: center;
}

.content img {
    width: 250px;
}

.theme-summary > *, .some-theme > *, .theme > * {
    font-family: "Be Vietnam";
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
}
    
`;
