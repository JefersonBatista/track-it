import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: ${({ size }) => (size === "large" ? "center" : "stretch")};

  width: ${({ size }) => (size === "large" ? "100%" : "40px")};
  height: ${({ size }) => (size === "large" ? "45px" : "35px")};
  border-radius: 5px;
  border: none;
  background-color: #52b6ff;

  font-family: "Lexend Deca", sans-serif;
  font-size: ${({ size }) => (size === "large" ? "21px" : "27px")};
  color: white;
`;

export { Button };
