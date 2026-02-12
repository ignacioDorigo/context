import React, { useContext } from "react";
import NavLogged from "../NavLogged/NavLogged";
import { UsuarioContext } from "../../context/UsuarioContext";
import styled from "styled-components";
const Saludo = styled.h1`
  text-align: center;
`;

export default function HomeLogged() {
  const { usuario } = useContext(UsuarioContext);
  return (
    <div>
      <NavLogged></NavLogged>
      <Saludo>Hola {usuario}</Saludo>
    </div>
  );
}
