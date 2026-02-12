import React, { useContext } from "react";
import styled from "styled-components";
import "./NavLogged.css";
import { UsuarioContext } from "../../context/UsuarioContext";
import Swal from "sweetalert2";

const Logo = styled.h1`
  color: #9991eb;
`;

export default function NavLogged() {
  const { logout } = useContext(UsuarioContext);
  return (
    <div className="header__bg">
      <header className="header contenedor">
        <Logo>Logo</Logo>
        <nav className="nav">
          <a href="index.html">Inicio</a>
          <a href="index.html">Productos</a>
          <a href="index.html">Contacto</a>
          <button className="cerrar-sesion__button"
            onClick={() => {
              Swal.fire({
                icon: "question",
                title: "Cerrar Sesión",
                text: "Estás seguro de que queres cerrar sesión",
                showCancelButton: true,
                showConfirmButton: true,
                confirmButtonText: "Si, salir",
                cancelButtonText: "Cancelar",
              }).then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Exito",
                  text: "Se ha cerrado la sesión correctamente",
                  showConfirmButton: true,
                  confirmButtonText: "Cerrar",
                }).then(() => {
                  logout();
                });
              });
            }}
          >
            Cerrar Sesión
          </button>
        </nav>
      </header>
    </div>
  );
}
