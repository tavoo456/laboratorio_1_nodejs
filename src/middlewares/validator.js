import { body, validationResult } from "express-validator";

export const runValidations = (validations) => {
  return async (req, res, next) => {
    for (const validation of validations) {
      await validation.run(req);
    }

    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(400).json({ status: "Error", errors: errors.array() });
  };
};
// Validadores para la tabla autore

export const insertarAutorValidator = [
  body("nombre").notEmpty().trim().withMessage("El nombre es obligatorio"),
  body("correo")
    .trim()
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isEmail()
    .withMessage("El correo NO es válido"),
];

export const actualizarAutorValidator = [
  body("nombre")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El nombre no puede estar vacío"),
  body("correo")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El correo no puede estar vacío")
    .isEmail()
    .withMessage("El correo NO es válido"),
];


// Validadores para la tabla categorias

export const insertarCategoriaValidator = [
  body("nombre_categoria")
  .notEmpty()
  .trim()
  .withMessage("El nombre de categoria es obligatorio"),
  body("clasificacion")
    .notEmpty()
    .trim()
    .withMessage("La nacionalidad debe tener al menos 2 caracteres")
];