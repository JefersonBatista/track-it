import styled from "styled-components";

const Button = styled.button`
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};
  border-radius: ${({ radius }) => (radius ? radius : 0)};
  border: none;
  background-color: ${({ highlighted }) => (highlighted ? "#52b6ff" : "white")};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};

  font-family: "Lexend Deca", sans-serif;
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ highlighted }) => (highlighted ? "white" : "#52b6ff")};
`;

export { Button };
