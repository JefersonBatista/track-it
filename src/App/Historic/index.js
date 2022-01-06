import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { HistoricPage, NoHistoricMessage } from "./style";

export default function Historic({ userImage }) {
  return (
    <HistoricPage>
      <TopBar userImage={userImage} />

      <h1>Histórico</h1>

      <NoHistoricMessage>
        Em breve você poderá ver o histórico dos seus hábitos aqui!
      </NoHistoricMessage>

      <Menu />
    </HistoricPage>
  );
}
