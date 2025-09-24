import { Router } from "express";
//import * as userController from "../controllers/usersController.js";
import {
  runValidations,
  insertarUsuarioValidator,
} from "../middlewares/validator.js";

const router = Router();
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
