import styled from "styled-components";

const HabitCard = styled.article`
  display: flex;
  justify-content: space-between;

  padding: 15px;

  width: 100%;
  border-radius: 5px;
  background-color: white;

  div {
    width: calc(100% - 15px - 69px);
  }

  h2 {
    margin-bottom: 7px;

    word-wrap: break-word;

    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #666666;
  }

  p {
    font-family: "Lexend Deca", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    color: #666666;

    .done {
      color: #8fc549;
    }
  }
`;

const HabitCheck = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
`;

export { HabitCard, HabitCheck };
