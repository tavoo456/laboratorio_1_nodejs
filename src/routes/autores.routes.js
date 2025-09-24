import { Router } from "express";
import * as autoresController from "../controllers/autoresController.js";
import {
  runValidations,
  insertarAutorValidator,
  actualizarAutorValidator,
} from "../middlewares/validator.js";

const router = Router();
router.get("/", autoresController.getAutores);
router.get("/:id_autor", autoresController.getAutorById);
router.post(
  "/",
  runValidations(insertarAutorValidator),
  autoresController.postInsertarAutor
);
router.put(
  "/:id_autor",
  runValidations(actualizarAutorValidator),
  autoresController.putActualizarAutor
);
router.delete("/:id_autor", autoresController.deleteEliminarAutor);
/*
router.get("/", userController.getUsuarios);
router.get("/buscarPorEmail/:email", userController.getUsuarioByEmail);
router.get("/buscarPorNombre/:nombre", userController.getUsuarioByNombre);
router.post(
  "/",
  runValidations(insertarUsuarioValidator),
  userController.postInsertarUsuario
);
router.put("/:id_usuario", userController.putActualizarUsuario);
router.delete("/:id_usuario", userController.deleteEliminarUsuario);
*/
export default router;
