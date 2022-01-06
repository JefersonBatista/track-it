import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { HabitsPage } from "./style.js";

export default function Habits({ userImage }) {
  return (
    <HabitsPage>
      <TopBar userImage={userImage} />

      <h1>Hábitos</h1>

      <Menu />
    </HabitsPage>
  );
}
