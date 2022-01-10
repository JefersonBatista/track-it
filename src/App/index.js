import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import UserContext from "../contexts/UserContext";
import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import Habits from "./Habits";
import Historic from "./Historic";

import "../styles/reset.css";
import "../styles/fonts.css";

export default function App() {
  const [userImage, setUserImage] = useState("");
  const [token, setToken] = useState("");
  const [todayProgress, setTodayProgress] = useState(0.0);

  function retrieveLogin() {
    return JSON.parse(localStorage.getItem("login"));
  }

  function setLogin(login) {
    setToken(login.token);
    setUserImage(login.userImage);
  }

  function persistLogin(login) {
    localStorage.setItem("login", JSON.stringify(login));
  }

  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          retrieveLogin,
          setLogin,
          persistLogin,
          token,
          userImage,
          todayProgress,
          setTodayProgress,
        }}
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
