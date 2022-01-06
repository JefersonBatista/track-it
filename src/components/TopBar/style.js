import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;

  width: 100vw;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

  font-family: "Playball", cursive;
  font-size: 39px;
  color: white;
`;

const UserImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;

  font-family: auto;
  font-size: 12px;
`;

export { Header, UserImage };
