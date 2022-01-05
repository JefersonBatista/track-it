import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Button } from "../../styles/Button";
import { Entry } from "../../styles/Entry";
import { PageLink } from "../../styles/PageLink";

import { SignUpPage, SignUpForm } from "./style";

import logo from "../../assets/logo.svg";

export default function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        formData
      )
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((error) => alert(error.response));
  }

  return (
    <SignUpPage>
      <img src={logo} alt="Logo" />

      <SignUpForm onSubmit={handleSubmit}>
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
        <Entry
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
        <Entry
          type="url"
          placeholder="foto"
          name="image"
          onChange={handleChange}
          value={formData.image}
        />
        <Button type="submit" size="large">
          Cadastrar
        </Button>
      </SignUpForm>

      <PageLink to="/">Já tem uma conta? Faça login!</PageLink>
    </SignUpPage>
  );
}
