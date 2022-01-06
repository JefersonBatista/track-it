import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { HabitsPage, HabitsTop, NoHabitsMessage } from "./style.js";

import { Button } from "../../styles/Button";

export default function Habits({ userImage }) {
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
        >
          +
        </Button>
      </HabitsTop>

      <NoHabitsMessage>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </NoHabitsMessage>

      <Menu />
    </HabitsPage>
  );
}
