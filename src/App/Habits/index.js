import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

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
} from "./style.js";

export default function Habits({ userImage, token }) {
  const [habits, setHabits] = useState(null);
  const [habitCreation, setHabitCreation] = useState(false);
  const [newHabitName, setNewHabitName] = useState("");
  const [newHabitDays, setNewHabitDays] = useState([]);
  const [habitCreationLoading, setHabitCreationLoading] = useState(false);

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
        console.log(response.data);
        setNewHabitName("");
        setNewHabitDays([]);
        setHabitCreationLoading(false);
      })
      .catch((error) => {
        alert(error.response.data.message);
        setHabitCreationLoading(false);
      });
  }

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, [token]);

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
          +
        </Button>
      </HabitsTop>

      {habitCreation && (
        <HabitCreation onSubmit={handleHabitCreation}>
          <NewHabitInfo>
            <Entry
              placeholder="nome do hábito"
              onChange={handleNameChange}
              value={newHabitName}
              disabled={habitCreationLoading}
            />
            <Weekdays>
              <Weekday
                type="button"
                selected={dayIsSelected(0)}
                onClick={() => {
                  handleDayChange(0);
                }}
                disabled={habitCreationLoading}
              >
                D
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(1)}
                onClick={() => {
                  handleDayChange(1);
                }}
                disabled={habitCreationLoading}
              >
                S
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(2)}
                onClick={() => {
                  handleDayChange(2);
                }}
                disabled={habitCreationLoading}
              >
                T
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(3)}
                onClick={() => {
                  handleDayChange(3);
                }}
                disabled={habitCreationLoading}
              >
                Q
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(4)}
                onClick={() => {
                  handleDayChange(4);
                }}
                disabled={habitCreationLoading}
              >
                Q
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(5)}
                onClick={() => {
                  handleDayChange(5);
                }}
                disabled={habitCreationLoading}
              >
                S
              </Weekday>
              <Weekday
                type="button"
                selected={dayIsSelected(6)}
                onClick={() => {
                  handleDayChange(6);
                }}
                disabled={habitCreationLoading}
              >
                S
              </Weekday>
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
      <NoHabitsMessage>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </NoHabitsMessage>

      <Menu />
    </HabitsPage>
  );
}
