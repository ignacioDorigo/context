import React, { useContext } from "react";
import "./App.css";
import { UsuarioContext } from "./context/UsuarioContext";
import HomeGuest from "./components/HomeGuest/HomeGuest";
import HomeLogged from "./components/HomeLogged/HomeLogged";

export default function App() {
  const { usuario } = useContext(UsuarioContext);
  return <>{usuario === null ? <HomeGuest /> : <HomeLogged />}</>;
}
