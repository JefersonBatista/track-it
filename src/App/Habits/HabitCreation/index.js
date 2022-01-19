import { useContext } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import UserContext from "../../../contexts/UserContext";
import { Button } from "../../../styles/Button";
import { Entry } from "../../../styles/Entry";
import { Weekdays, Weekday } from "../../../styles/Weekdays";

import { HabitCreationForm, NewHabitInfo } from "./style";

export default function HabitCreation({
  getHabits,
  setHabitCreation,
  newHabitName,
  setNewHabitName,
  newHabitDays,
  setNewHabitDays,
  habitCreationLoading,
  setHabitCreationLoading,
}) {
  const { token } = useContext(UserContext);

  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];

  function handleNameChange(event) {
    setNewHabitName(event.target.value);
  }

  function dayIsSelected(day) {
    return newHabitDays.includes(day);
  }

  function handleDayChange(day) {
    if (dayIsSelected(day)) {
      setNewHabitDays(newHabitDays.filter((weekday) => weekday !== day).sort());
    } else {
      setNewHabitDays([...newHabitDays, day].sort());
    }
  }

  function handleHabitCreation(event) {
    event.preventDefault();

    setHabitCreationLoading(true);

    if (newHabitDays.length === 0) {
      setHabitCreationLoading(false);
      alert("Nenhum dia da semana selecionado!");
      return;
    }

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        {
          name: newHabitName,
          days: newHabitDays,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setHabitCreation(false);
        setNewHabitName("");
        setNewHabitDays([]);
        setHabitCreationLoading(false);

        getHabits();
      })
      .catch((error) => {
        alert(error.response.data.message);
        setHabitCreationLoading(false);
      });
  }

  return (
    <HabitCreationForm onSubmit={handleHabitCreation}>
      <NewHabitInfo>
        <Entry
          placeholder="nome do hábito"
          required
          onChange={handleNameChange}
          value={newHabitName}
          disabled={habitCreationLoading}
        />
        <Weekdays>
          {weekdays.map((weekday, index) => (
            <Weekday
              key={index}
              type="button"
              selected={dayIsSelected(index)}
              onClick={() => {
                handleDayChange(index);
              }}
              disabled={habitCreationLoading}
            >
              {weekday}
            </Weekday>
          ))}
        </Weekdays>
      </NewHabitInfo>

      <div className="confirmation">
        <Button
          type="button"
          fontSize="16px"
          onClick={() => {
            setHabitCreation(false);
          }}
          disabled={habitCreationLoading}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          width="84px"
          height="35px"
          radius="5px"
          highlighted
          fontSize="16px"
          disabled={habitCreationLoading}
        >
          {habitCreationLoading ? (
            <Loader type="ThreeDots" color="white" height={35} width={35} />
          ) : (
            "Salvar"
          )}
        </Button>
      </div>
    </HabitCreationForm>
  );
}
