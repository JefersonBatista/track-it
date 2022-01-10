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

  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        formData
      )
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setLoading(false);
      });
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
          disabled={loading}
        />
        <Entry
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={loading}
        />
        <Entry
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
          disabled={loading}
        />
        <Entry
          type="url"
          placeholder="foto"
          name="image"
          onChange={handleChange}
          value={formData.image}
          disabled={loading}
        />
        <Button
          type="submit"
          width="100%"
          height="45px"
          radius="5px"
          highlighted
          fontSize="21px"
          disabled={loading}
        >
          Cadastrar
        </Button>
      </SignUpForm>

      <PageLink to="/" disabled={loading}>
        Já tem uma conta? Faça login!
      </PageLink>
    </SignUpPage>
  );
}
