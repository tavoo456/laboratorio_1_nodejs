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
  body("nombre").trim().notEmpty().withMessage("El nombre es obligatorio"),
  body("correo")
    .trim()
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .isEmail()
    .withMessage("El correo NO es válido"),
  body("nacionalidad")
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage("La nacionalidad debe tener al menos 2 caracteres"),
  body("biografia")
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage("La biografía debe tener al menos 10 caracteres"),
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
  body("nacionalidad")
    .optional()
    .trim()
    .isLength({ min: 2 })
    .withMessage("La nacionalidad debe tener al menos 2 caracteres"),
  body("biografia")
    .optional()
    .trim()
    .isLength({ min: 10 })
    .withMessage("La biografía debe tener al menos 10 caracteres"),
];
