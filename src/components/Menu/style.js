import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;

  width: 100vw;
  height: 70px;
  background-color: white;

  .today {
    align-self: flex-end;
    margin-bottom: 10px;
  }
`;

export { Footer };
