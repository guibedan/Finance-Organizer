import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
    }

    body{
        display:flex;
        flex-direction: column;
        font-family: 'Poppins', sans-serif;
        background-color: #F2F2F2;
    }
`;