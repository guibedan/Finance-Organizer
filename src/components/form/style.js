import styled from "styled-components";

export const FormConteiner = styled.div `

    background-color: #fff;
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    border-radius: 5px;
    box-shadow: 0px 0px 3px #ccc;
    display: flex;
    justify-content: space-around;
    padding: 15px 0;
    gap: 10px;

    @media (max-width: 750px) {
        display: grid;
    }

`;

export const InputContent = styled.div `

    display: flex;
    flex-direction: column;

`;

export const Label = styled.label ``;

export const Input = styled.input `

    outline: none;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    border: 1px solid #ccc;

`;

export const RadioGroup = styled.div `

    display: flex;
    align-items: center;

    input {
        margin-left: 20px;
        margin-right: 5px;
        margin-top: 0;
        accent-color: black;
    }

`;

export const Button = styled.button `

    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    margin-left: 20px;

    cursor: pointer;
    color: white;
    background-color: #668899;

`;