import * as Yup from "yup";

export const validationSchema = Yup.object({
  nombre: Yup.string("El nombre debe ser un string")
    .min(2, "El nombre debe tener minimo 2 caracteres")
    .required("El nombre es obligatorio"),
});
