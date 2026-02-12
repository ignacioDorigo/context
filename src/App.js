import React, { useContext } from "react";
import "./App.css";
import { UsuarioContext } from "./context/UsuarioContext";

export default function App() {
  const { usuario } = useContext(UsuarioContext);
  return <div>App</div>;
}
