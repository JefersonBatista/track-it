import { useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { Button } from "../../styles/Button";

import { Footer } from "./style";

export default function Menu({ todayProgress }) {
  const navigate = useNavigate();

  return (
    <Footer>
      <Button fontSize="18px" onClick={() => navigate("/habitos")}>
        Hábitos
      </Button>
      <Button
        className="today"
        width="90px"
        height="90px"
        radius="50%"
        highlighted
        fontSize="18px"
        onClick={() => navigate("/hoje")}
      >
        Hoje
        <div>
          <CircularProgressbar
            value={todayProgress}
            styles={buildStyles({
              pathColor: "white",
              trailColor: "#52b6ff",
            })}
          />
        </div>
      </Button>
      <Button fontSize="18px" onClick={() => navigate("/historico")}>
        Histórico
      </Button>
    </Footer>
  );
}
