import styled from "styled-components";

const HistoricPage = styled.section`
  padding: 70px 17px;

  min-height: 100vh;
  background-color: #f2f2f2;

  font-family: "Lexend Deca", sans-serif;

  h1 {
    margin-top: 28px;

    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    color: #126ba5;
  }
`;

const NoHistoricMessage = styled.p`
  margin-top: 17px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #666666;
`;

export { HistoricPage, NoHistoricMessage };
