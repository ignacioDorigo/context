import React from "react";
import "./NavGuest.css";
import styled from "styled-components";

const Logo = styled.h1`
  color: #9991eb;
`;

export default function NavGuest() {
  return (
    <div className="header__bg">
      <header className="header contenedor">
        <Logo>Logo</Logo>
        <nav className="nav">
          <a href="index.html">Inicio</a>
          <a href="index.html">Productos</a>
          <a href="index.html">Contacto</a>
        </nav>
      </header>
    </div>
  );
}
