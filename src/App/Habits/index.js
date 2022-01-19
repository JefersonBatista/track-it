import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { TrashOutline } from "react-ionicons";
import { AddSharp } from "react-ionicons";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";
import { Weekdays, Weekday } from "../../styles/Weekdays";
import UserContext from "../../contexts/UserContext";
import HabitCreation from "./HabitCreation";

import { Button } from "../../styles/Button";

import { HabitsPage, HabitsTop, NoHabitsMessage, Habit } from "./style.js";

export default function Habits() {
  const { token, userImage, todayProgress } = useContext(UserContext);

  const [habits, setHabits] = useState(null);
  const [habitCreation, setHabitCreation] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [habitCreationLoading, setHabitCreationLoading] = useState(false);

  const habitCreationControl = {
    getHabits,
    setHabitCreation,
    newHabitName,
    setNewHabitName,
    newHabitDays,
    setNewHabitDays,
    habitCreationLoading,
    setHabitCreationLoading,
  };

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function getHabits() {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        setHabits(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  function handleDelete(habitId, habitName) {
    if (window.confirm(`Deseja mesmo deleter o hábito '${habitName}'?`)) {
      axios
        .delete(
          `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habitId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then(getHabits)
        .catch((error) => {
          console.log(error.response);
        });
    }
  }

  useEffect(getHabits, [token]);

  if (habits === null) {
    return (
      <HabitsPage>
        <TopBar userImage={userImage} />

        <Menu todayProgress={todayProgress} />
      </HabitsPage>
    );
  }

  return (
    <HabitsPage>
      <TopBar userImage={userImage} />

      <HabitsTop>
        <h1>Meus hábitos</h1>
        <Button
          width="40px"
          height="35px"
          radius="5px"
          highlighted
          fontSize="27px"
          onClick={() => {
            setHabitCreation(true);
          }}
        >
          <AddSharp
            title="Criar hábito"
            width="20px"
            height="20px"
            color="white"
          ></AddSharp>
        </Button>
      </HabitsTop>

      {habitCreation && <HabitCreation {...habitCreationControl} />}

      {habits.length === 0 ? (
        <NoHabitsMessage>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </NoHabitsMessage>
      ) : (
        habits.map((habit) => (
          <Habit key={habit.id}>
            <h2>{habit.name}</h2>
            <Weekdays>
              {weekdays.map((weekday, index) => (
                <Weekday
                  key={index}
                  disabled
                  selected={habit.days.includes(index)}
                >
                  {weekday}
                </Weekday>
              ))}
            </Weekdays>
            <TrashOutline
              className="delete"
              title="Deletar hábito"
              width="20px"
              height="20px"
              color="#666666"
              onClick={() => handleDelete(habit.id, habit.name)}
            ></TrashOutline>
          </Habit>
        ))
      )}

      <Menu todayProgress={todayProgress} />
    </HabitsPage>
  );
}
