import styled from "styled-components";

const HabitsPage = styled.section`
  padding: 70px 17px;

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

const HabitCreation = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;

  width: 100%;
  height: 180px;
  background-color: white;

  .confirmation {
    display: flex;
    align-self: flex-end;
    gap: 23px;
  }
`;

const NewHabitInfo = styled.div`
  width: 100%;
`;

const Weekdays = styled.div`
  margin-top: 10px;

  display: flex;
  gap: 4px;
`;

const Weekday = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid ${({ selected }) => (selected ? "#cfcfcf" : "#d4d4d4")};
  background-color: ${({ selected }) => (selected ? "#cfcfcf" : "white")};

  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  color: ${({ selected }) => (selected ? "white" : "#dbdbdb")};
`;

export {
  HabitsPage,
  HabitsTop,
  NoHabitsMessage,
  HabitCreation,
  NewHabitInfo,
  Weekdays,
  Weekday,
};
