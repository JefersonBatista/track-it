import styled from "styled-components";

const HabitCreationForm = styled.form`
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

export { HabitCreationForm, NewHabitInfo };
