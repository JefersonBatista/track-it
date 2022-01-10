import { useContext } from "react";

import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";
import UserContext from "../../contexts/UserContext";

import { HistoricPage, NoHistoricMessage } from "./style";

export default function Historic() {
  const { userImage, todayProgress } = useContext(UserContext);

  return (
    <HistoricPage>
      <TopBar userImage={userImage} />

      <h1>Histórico</h1>

      <NoHistoricMessage>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </NoHistoricMessage>

      <Menu todayProgress={todayProgress} />
    </HistoricPage>
  );
}
