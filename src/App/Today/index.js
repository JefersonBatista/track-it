import dayjs from "dayjs";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";
import UserContext from "../../contexts/UserContext";
import Habit from "./Habit";

import { TodayPage, TodayTop, Habits } from "./style.js";

export default function Today() {
  const {
    retrieveAndSetLogin,
    token,
    userImage,
    todayProgress,
    setTodayProgress,
  } = useContext(UserContext);

  const navigate = useNavigate();

  const today = dayjs();

  function twoDigitsFormat(number) {
    return ("0" + number).slice(-2);
  }

  function dayOfWeek() {
    switch (today.day()) {
      case 0:
        return "Domingo";
      case 1:
        return "Segunda";
      case 2:
        return "Terça";
      case 3:
        return "Quarta";
      case 4:
        return "Quinta";
      case 5:
        return "Sexta";
      case 6:
        return "Sábado";
      default:
        return "";
    }
  }

  function dayOfMonth() {
    return twoDigitsFormat(today.date());
  }

  function month() {
    return twoDigitsFormat(today.month() + 1);
  }

  const [habits, setHabits] = useState(null);

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

        setHabits(response.data);
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

  if (habits === null) {
    return (
      <TodayPage>
        <TopBar userImage={userImage} />

        <Menu todayProgress={todayProgress} />
      </TodayPage>
    );
  }

  return (
    <TodayPage>
      <TopBar userImage={userImage} />
      <TodayTop>
        <h1>{`${dayOfWeek()}, ${dayOfMonth()}/${month()}`}</h1>
        {todayProgress === 0.0 ? (
          <p className="none">Nenhum hábito concluído ainda</p>
        ) : (
          <p className="some">
            {todayProgress.toFixed(0)}% dos hábitos concluídos
          </p>
        )}
      </TodayTop>

      <Habits>
        {habits.map((habit) => (
          <Habit key={habit.id} habit={habit} getHabits={getHabits} />
        ))}
      </Habits>
      <Menu todayProgress={todayProgress} />
    </TodayPage>
  );
}
