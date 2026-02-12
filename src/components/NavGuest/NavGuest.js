import React from "react";
import "./NavGuest.css";

export default function NavGuest() {
  return (
    <div className="header__bg">
      <header className="header contenedor">
        <h1>Logo</h1>
        <nav className="nav">
          <a href="index.html">Inicio</a>
          <a href="index.html">Productos</a>
          <a href="index.html">Contacto</a>
        </nav>
      </header>
    </div>
  );
}
