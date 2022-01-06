import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/Button";

import { Footer } from "./style";

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Footer>
      <Button fontSize="18px" onClick={() => navigate("/habitos")}>
        Hábitos
      </Button>
      <Button
        className="today"
        width="91px"
        height="91px"
        radius="50%"
        highlighted
        fontSize="18px"
        onClick={() => navigate("/hoje")}
      >
        Hoje
      </Button>
      <Button fontSize="18px" onClick={() => navigate("/historic")}>
        Histórico
      </Button>
    </Footer>
  );
}
