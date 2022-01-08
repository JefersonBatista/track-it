import styled from "styled-components";

const Footer = styled.footer`
  position: fixed;
  z-index: 1;
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
    position: absolute;
    left: calc(50% - 45px);
    bottom: 10px;

    div {
      position: absolute;
      width: 79px;
      height: 79px;
    }
  }
`;

export { Footer };
