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

.some-theme li {
    list-style-type: "✔";
    list-style-position: outside;
}

.some-theme li + li {
    margin-top: 12px;
}
    
`;
