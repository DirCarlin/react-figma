import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Regis from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/login" element={< Login />} />
      <Route path="/register" element={< Regis/>} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
