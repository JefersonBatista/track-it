import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../styles/Button";
import { Header, UserImage } from "./style";

export default function TopBar({ userImage }) {
  const navigate = useNavigate();

  const [logoutMenu, setLogoutMenu] = useState(false);

  function toggleLogoutMenu() {
    setLogoutMenu(!logoutMenu);
  }

  function logout() {
    localStorage.removeItem("login");
    navigate("/");
  }

  return (
    <Header>
      TrackIt
      <UserImage
        src={userImage}
        alt="Imagem do usuário"
        onClick={toggleLogoutMenu}
      />
      {logoutMenu && (
        <Button
          className="logout"
          width="84px"
          height="35px"
          radius="5px"
          highlighted
          fontSize="16px"
          onClick={logout}
        >
          Sair
        </Button>
      )}
    </Header>
  );
}
