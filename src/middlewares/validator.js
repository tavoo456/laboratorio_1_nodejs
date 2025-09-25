/*
autores

id_autor (PK, UUID)
nombre (requerido)
nacionalidad (opcional)
biografia (opcional)
correo (requerido)

categorias

id_categoria (PK, UUID)
nombre_categoria (requerido)
clasificación (requerido)

libros

id_libro (PK, UUID)
titulo (requerido, min. 10 caracteres)
anio_publicacion (int, requerido, mayor a 1900)
autor_id (FK hacia autores.id_autor)
categoría_id (FK hacia categorías.id_categoria)
resumen (opcional) 
*/

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
  body("nacionalidad").trim().optional(),
  body("biografia").trim().optional(),
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
  body("nacionalidad").trim().optional(),
  body("biografia").trim().optional(),
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
    .withMessage("La nacionalidad debe tener al menos 2 caracteres"),
];

export const actualizarCategoriaValidator = [
  body("nombre_categoria")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("El nombre de categoria no puede estar vacío"),
  body("clasificacion")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("La clasificacion no puede estar vacía"),
];

export const insertarLibroValidator = [
  body("titulo").notEmpty().withMessage("El título es obligatorio"),
  body("anio_publicacion")
    .notEmpty()
    .withMessage("El año de publicación es obligatorio")
    .isInt({ gt: 1900 })
    .withMessage(
      "El año de publicación debe ser un número entero mayor a 1900"
    ),
  body("autor_id").notEmpty().withMessage("El ID del autor es obligatorio"),
  body("categoria_id")
    .notEmpty()
    .withMessage("El ID de la categoría es obligatorio"),
  body("resumen").trim().optional(),
];
