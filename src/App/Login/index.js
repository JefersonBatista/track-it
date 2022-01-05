import { Button } from "../../styles/Button";
import { Entry } from "../../styles/Entry";
import { PageLink } from "../../styles/PageLink";

import { LoginPage, LoginForm } from "./style";

import logo from "../../assets/logo.svg";

export default function Login() {
  return (
    <LoginPage>
      <img src={logo} alt="Logo" />

      <LoginForm>
        <Entry type="email" placeholder="email" />
        <Entry type="password" placeholder="senha" />
        <Button size="large">Entrar</Button>
      </LoginForm>

      <PageLink to="/cadastro">Não tem uma conta? Cadastre-se!</PageLink>
    </LoginPage>
  );
}
