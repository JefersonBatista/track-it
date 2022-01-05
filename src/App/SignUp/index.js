import { Button } from "../../styles/Button";
import { Entry } from "../../styles/Entry";
import { PageLink } from "../../styles/PageLink";

import { SignUpPage, SignUpForm } from "./style";

import logo from "../../assets/logo.svg";

export default function SignUp() {
  return (
    <SignUpPage>
      <img src={logo} alt="Logo" />

      <SignUpForm>
        <Entry type="email" placeholder="email" />
        <Entry type="password" placeholder="senha" />
        <Entry type="text" placeholder="nome" />
        <Entry type="url" placeholder="foto" />
        <Button size="large">Cadastrar</Button>
      </SignUpForm>

      <PageLink to="/">Já tem uma conta? Faça login!</PageLink>
    </SignUpPage>
  );
}
