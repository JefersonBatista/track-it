import styled from "styled-components";

const HabitsPage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 70px 17px 110px;

  min-height: 100vh;
  background-color: #f2f2f2;

  font-family: "Lexend Deca", sans-serif;
`;

const HabitsTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 22px;

  h1 {
    font-style: normal;
    font-weight: normal;
    font-size: 23px;
    color: #126ba5;
  }
`;

const NoHabitsMessage = styled.p`
  margin-top: 30px;

  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #666666;
`;

const Habit = styled.article`
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

export { HabitsPage, HabitsTop, NoHabitsMessage, Habit };
