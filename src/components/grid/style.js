import styled from "styled-components";

export const GridConteiner = styled.div `

    background-color: #fff;
    width: 30%;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;

    @media (max-width: 940px) {
      width: 55%;
    }

    @media (max-width: 850px) {
      width: 50%;
    }

    @media (max-width: 750px) {
      width: 80%;
    }

`;

export const Thead = styled.thead ``;

export const Tbody = styled.tbody ``;

export const Tr = styled.tr ``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
  text-align: center;
  width: 32%;

  @media (max-width: 750px) {
      width: 1%;
    }
`;