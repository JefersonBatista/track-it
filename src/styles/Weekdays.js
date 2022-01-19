import styled from "styled-components";

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

export { Weekdays, Weekday };
