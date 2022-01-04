import { LogoPage } from "./style";

import logo from "../assets/logo.svg";

export default function App() {
  return (
    <LogoPage>
      <img src={logo} alt="Logo" />
    </LogoPage>
  );
}
