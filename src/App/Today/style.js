import styled from "styled-components";

const TodayPage = styled.section`
  padding: 70px 17px;

  min-height: 100vh;
  background-color: #f2f2f2;
`;

const TodayTop = styled.div`
  margin-top: 28px;

  font-family: "Lexend Deca", sans-serif;

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    color: #126ba5;
  }

  p {
    font-size: 18px;
    color: #bababa;
  }
`;

export { TodayPage, TodayTop };
