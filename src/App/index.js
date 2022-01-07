import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";
import Habits from "./Habits";
import Historic from "./Historic";

import "../styles/reset.css";
import "../styles/fonts.css";

export default function App() {
  const [image, setImage] = useState("");
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setImage={setImage} setToken={setToken} />}
        />
        <Route path="/cadastro" element={<SignUp />} />
        <Route
          path="/hoje"
          element={<Today userImage={image} token={token} />}
        />
        <Route
          path="/habitos"
          element={<Habits userImage={image} token={token} />}
        />
        <Route
          path="/historico"
          element={<Historic userImage={image} token={token} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
