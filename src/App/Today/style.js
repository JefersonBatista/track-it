import styled from "styled-components";

const TodayPage = styled.section`
  padding: 70px 17px 110px;

  min-height: 100vh;
  background-color: #f2f2f2;
`;

const TodayTop = styled.div`
  margin: 28px 0;

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

const Habits = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Habit = styled.article`
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
  }
`;

const HabitCheck = styled.button`
  width: 69px;
  height: 69px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background-color: ${({ done }) => (done ? "#8fc549" : "#ebebeb")};
`;

export { TodayPage, TodayTop, Habits, Habit, HabitCheck };
