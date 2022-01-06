import TopBar from "../../components/TopBar";
import Menu from "../../components/Menu";

import { TodayPage } from "./style.js";

export default function Today({ userImage }) {
  return (
    <TodayPage>
      <TopBar userImage={userImage} />

      <h1>Hoje</h1>

      <Menu />
    </TodayPage>
  );
}
