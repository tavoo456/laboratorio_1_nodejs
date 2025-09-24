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

/*export const insertarUsuarioValidator = [
  body("nombre").trim().notEmpty().withMessage("El nombre es obligatorio"),
  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("El email NO es válido"),
  body("contrasenia")
    .trim()
    .notEmpty()
    .withMessage("La contraseña es obligatoria"),
  body("contrasenia")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
];*/
