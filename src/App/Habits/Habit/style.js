import styled from "styled-components";

const HabitCard = styled.article`
  position: relative;

  padding: 15px;

  width: 100%;
  border-radius: 5px;
  background-color: white;

  h2 {
    width: 90%;

    word-wrap: break-word;

    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    color: #666666;
  }

  .delete {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;

export { HabitCard };
