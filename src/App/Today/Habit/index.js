import { useState, useContext } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import UserContext from "../../../contexts/UserContext";

import { HabitCard, HabitCheck } from "./style";

import check from "../../../assets/check.svg";

export default function Habit({ habit, getHabits }) {
  const { token } = useContext(UserContext);

  const [checkLoading, setCheckLoading] = useState(false);

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

  return (
    <HabitCard key={habit.id}>
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
              habit.done && habit.currentSequence === habit.highestSequence
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
    </HabitCard>
  );
}
