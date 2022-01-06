import dayjs from "dayjs";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { TodayPage, TodayTop } from "./style.js";

export default function Today({ userImage }) {
  function dayOfWeek() {
    switch (dayjs().day()) {
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
    return ("0" + dayjs().date()).slice(-2);
  }

  function month() {
    return ("0" + dayjs().month() + 1).slice(-2);
  }

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
