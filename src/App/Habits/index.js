import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TrashOutline } from "react-ionicons";
import { AddSharp } from "react-ionicons";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { Entry } from "../../styles/Entry";
import { Button } from "../../styles/Button";

import {
  HabitsPage,
  HabitsTop,
  NoHabitsMessage,
  HabitCreation,
  NewHabitInfo,
  Weekdays,
  Weekday,
  Habit,
} from "./style.js";

export default function Habits({ userImage, token, todayProgress }) {
  const [habits, setHabits] = useState(null);
  const [habitCreation, setHabitCreation] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [habitCreationLoading, setHabitCreationLoading] = useState(false);

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

      {habitCreation && (
        <HabitCreation onSubmit={handleHabitCreation}>
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
        </HabitCreation>
      )}

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
