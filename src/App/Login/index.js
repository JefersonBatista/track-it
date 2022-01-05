import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/Button";
import { Entry } from "../../styles/Entry";
import { PageLink } from "../../styles/PageLink";

import { LoginPage, LoginForm } from "./style";

import logo from "../../assets/logo.svg";

export default function Login({ setEmail, setToken }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        formData
      )
      .then((response) => {
        console.log(response.data);
        setEmail(response.data.email);
        setToken(response.data.token);
        navigate("/hoje");
      })
      .catch((error) => alert(error.response.data.message));
  }

  return (
    <LoginPage>
      <img src={logo} alt="Logo" />

      <LoginForm onSubmit={handleSubmit}>
        <Entry
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
        />
        <Entry
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
        />
        <Button type="submit" size="large">
          Entrar
        </Button>
      </LoginForm>

      <PageLink to="/cadastro">Não tem uma conta? Cadastre-se!</PageLink>
    </LoginPage>
  );
}
