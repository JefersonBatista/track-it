import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Today from "./Today";

import "../styles/reset.css";
import "../styles/fonts.css";

export default function App() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setEmail={setEmail} setToken={setToken} />}
        />
        <Route path="/cadastro" element={<SignUp />} />
        <Route path="/hoje" element={<Today />} />
      </Routes>
    </BrowserRouter>
  );
}
