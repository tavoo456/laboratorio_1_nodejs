import { Router } from "express";
import * as categoriasController from "../controllers/categoriasController.js";
import {
  runValidations, insertarCategoriaValidator
} from "../middlewares/validator.js";

const router = Router();
router.get("/", categoriasController.getObtenerTodosLasCategorias);

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

export default router;