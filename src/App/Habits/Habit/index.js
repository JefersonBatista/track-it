import { useContext } from "react";
import axios from "axios";
import { TrashOutline } from "react-ionicons";

import UserContext from "../../../contexts/UserContext";
import { Weekdays, Weekday } from "../../../styles/Weekdays";

import { HabitCard } from "./style";

export default function Habit({ habit, getHabits }) {
  const { token } = useContext(UserContext);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

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

  return (
    <HabitCard>
      <h2>{habit.name}</h2>
      <Weekdays>
        {weekdays.map((weekday, index) => (
          <Weekday key={index} disabled selected={habit.days.includes(index)}>
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
    </HabitCard>
  );
}
