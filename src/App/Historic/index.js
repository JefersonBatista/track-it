import { useContext, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";
import UserContext from "../../contexts/UserContext";

import { HistoricPage, NoHistoricMessage } from "./style";

export default function Historic() {
  const {
    retrieveAndSetLogin,
    token,
    userImage,
    todayProgress,
    setTodayProgress,
  } = useContext(UserContext);

  const navigate = useNavigate();

  function getHabits() {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        const doneHabits = response.data.filter((habit) => habit.done).length;
        const todayHabits = response.data.length;
        const percentage =
          doneHabits === 0 ? 0.0 : (doneHabits / todayHabits) * 100;

        setTodayProgress(percentage);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  useEffect(() => {
    // If user is not logged in, go to login page

    if (retrieveAndSetLogin()) {
      getHabits();
    } else {
      navigate("/");
    }
  }, [token]);

  return (
    <HistoricPage>
      <TopBar userImage={userImage} />

      <h1>Histórico</h1>

      <NoHistoricMessage>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </NoHistoricMessage>

      <Menu todayProgress={todayProgress} />
    </HistoricPage>
  );
}
