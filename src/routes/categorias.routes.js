import { Router } from "express";
import * as categoriasController from "../controllers/categoriasController.js";
import {
  runValidations, insertarCategoriaValidator
} from "../middlewares/validator.js";

const router = Router();
router.get("/", categoriasController.getObtenerTodosLasCategorias);
// router.get("/:id_autor", autoresController.getAutorById);
router.post(
   "/",
   runValidations(insertarCategoriaValidator),
   categoriasController.postCrearCategoria
);
router.put(
  "/:id_categorias",
  categoriasController.putActualizarCategoria
);
router.delete("/:id_categorias", categoriasController.deleteEliminarCategoria);
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