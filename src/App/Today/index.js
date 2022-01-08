import dayjs from "dayjs";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { TodayPage, TodayTop, Habits, Habit, HabitCheck } from "./style.js";

import check from "../../assets/check.svg";

export default function Today({
  userImage,
  token,
  todayProgress,
  setTodayProgress,
}) {
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
  const [checkLoading, setCheckLoading] = useState(false);

  function getHabits() {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setHabits(response.data);
        const percentage =
          (response.data.filter((habit) => habit.done).length /
            response.data.length) *
          100;
        setTodayProgress(percentage);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function handleCheck(habitId, done) {
    const BASE_URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/";

    setCheckLoading(habitId);

    axios
      .post(
        `${BASE_URL}/${habitId}/${done ? "uncheck" : "check"}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        setCheckLoading(false);
        getHabits();
      })
      .catch((error) => {
        console.log(error.response);
        setCheckLoading(false);
      });
  }

  useEffect(getHabits, [token]);

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
          <Habit key={habit.id}>
            <div>
              <h2>{habit.name}</h2>
              <p>
                Sequência atual:{" "}
                <span className={habit.done ? "done" : ""}>
                  {habit.currentSequence} dia
                  {habit.currentSequence === 1 ? "" : "s"}
                </span>
              </p>
              <p>
                Seu recorde:{" "}
                <span
                  className={
                    habit.done &&
                    habit.currentSequence === habit.highestSequence
                      ? "done"
                      : ""
                  }
                >
                  {habit.highestSequence} dia
                  {habit.highestSequence === 1 ? "" : "s"}
                </span>
              </p>
            </div>

            <HabitCheck
              done={habit.done}
              disable={checkLoading}
              onClick={() => handleCheck(habit.id, habit.done)}
            >
              {checkLoading === habit.id ? (
                <Loader type="ThreeDots" color="white" height={69} width={69} />
              ) : (
                <img src={check} alt="Check" />
              )}
            </HabitCheck>
          </Habit>
        ))}
      </Habits>
      <Menu todayProgress={todayProgress} />
    </TodayPage>
  );
}
