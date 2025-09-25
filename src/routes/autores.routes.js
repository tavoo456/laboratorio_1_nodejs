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

export default router;
