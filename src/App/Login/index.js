import { LoginPage } from "./style";

import logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <LoginPage>
      <h1>Login Page</h1>
      <img src={logo} alt="Logo" />
    </LoginPage>
  );
}
