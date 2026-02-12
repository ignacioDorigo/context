import React, { useContext } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import NavGuest from "../NavGuest/NavGuest";
import styled from "styled-components";

const Titulo = styled.h1`
  text-align: center;
`;

export default function HomeGuest() {
  const { login } = useContext(UsuarioContext);

  return (
    <div>
      <NavGuest></NavGuest>
      <Titulo>Bienvenido Invitado</Titulo>
    </div>
  );
}
