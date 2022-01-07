import dayjs from "dayjs";
import { useState, useEffect } from "react";
import axios from "axios";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { TodayPage, TodayTop } from "./style.js";

export default function Today({ userImage, token }) {
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
    }
  }

  function dayOfMonth() {
    return twoDigitsFormat(today.date());
  }

  function month() {
    return twoDigitsFormat(today.month() + 1);
  }

  const [habits, setHabits] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
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
    <TodayPage>
      <TopBar userImage={userImage} />
      <TodayTop>
        <h1>{`${dayOfWeek()}, ${dayOfMonth()}/${month()}`}</h1>
        <p>Nenhum hábito concluído ainda</p>
      </TodayTop>
      <Menu />
    </TodayPage>
  );
}
