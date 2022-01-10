import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import UserContext from "../../contexts/UserContext";

import { Button } from "../../styles/Button";
import { Entry } from "../../styles/Entry";
import { PageLink } from "../../styles/PageLink";

import { LoginPage, LoginForm } from "./style";

import logo from "../../assets/logo.svg";

export default function Login() {
  const { setToken, setUserImage } = useContext(UserContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);

    axios
      .post(
        "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
        formData
      )
      .then((response) => {
        setUserImage(response.data.image);
        setToken(response.data.token);
        navigate("/hoje");
      })
      .catch((error) => {
        alert(error.response.data.message);
        setLoading(false);
      });
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
        <Button
          type="submit"
          width="100%"
          height="45px"
          radius="5px"
          highlighted
          fontSize="21px"
          disabled={loading}
        >
          {loading ? (
            <Loader type="ThreeDots" color="white" height={45} width={45} />
          ) : (
            "Entrar"
          )}
        </Button>
      </LoginForm>

      <PageLink to="/cadastro" disabled={loading}>
        Não tem uma conta? Cadastre-se!
      </PageLink>
    </LoginPage>
  );
}
