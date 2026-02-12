import React, { useContext } from "react";
import { useFormik } from "formik";
import "./LoginForm.css";
import { validationSchema } from "./validacionLoginForm";
import { UsuarioContext } from "../../context/UsuarioContext";
import Swal from "sweetalert2";

const valoresIniciales = {
  nombre: "",
};

export default function LoginForm() {
  const { login } = useContext(UsuarioContext);
  const formik = useFormik({
    initialValues: valoresIniciales,
    validationSchema: validationSchema,
    onSubmit: (formulario) => {
      Swal.fire({
        icon: "question",
        title: "Login",
        text: "Seguro que quieres iniciar sesión?",
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: "Si, iniciar sesión",
      }).then(() => {
        login(formulario.nombre);
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Login Exitoso",
          showConfirmButton: true,
        });
      });
    },
  });
  return (
    <form className="login-form" onSubmit={formik.handleSubmit}>
      <h2>Login</h2>
      <p>Por favor para continuar ingresa tu nombre</p>
      <div className="form__campo">
        <label className="form__label" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          className="form__input"
          type="text"
          placeholder="Ingresa tu Nombre"
          {...formik.getFieldProps("nombre")}
        ></input>
        {formik.errors.nombre && formik.touched.nombre && (
          <div className="form__error">{formik.errors.nombre}</div>
        )}
      </div>
      <button type="submit" className="form__button">
        Ingresar
      </button>
    </form>
  );
}
