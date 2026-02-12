import React, { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import NavGuest from "../NavGuest/NavGuest";
import styled from "styled-components";
import LoginForm from "../LoginForm/LoginForm";
import "./HomeGuest.css";

const Titulo = styled.h1`
  text-align: center;
  margin-top: 5rem;
`;

export default function HomeGuest() {
  const { login } = useContext(UsuarioContext);

  return (
    <div>
      <NavGuest></NavGuest>
      <main className="main__guest">
        <Titulo>Bienvenido Invitado</Titulo>

        <LoginForm></LoginForm>
      </main>
    </div>
  );
}
