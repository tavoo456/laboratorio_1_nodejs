import { Router } from "express";
import * as librosController from "../controllers/librosController.js";
import {
  runValidations,
  insertarLibroValidator,
  actualizarLibroValidator,
} from "../middlewares/validator.js";

const router = Router();
router.get("/", librosController.getLibros);
router.get("/:id_libro", librosController.getLibroById);
router.get(
  "/anio_publicacion/:anio_publicacion",
  librosController.getLibroByAnioPublicacion
);
router.get("/autor/:nombre_autor", librosController.getLibroByAutor);
router.get(
  "/categoria/:nombre_categoria",
  librosController.getLibroByCategoria
);
router.get(
  "/clasificacion/:clasificacion",
  librosController.getLibroByClasificacionCategoria
);
router.post(
  "/",
  runValidations(insertarLibroValidator),
  librosController.postInsertarLibro
);

router.put(
  "/:id_libro",
  runValidations(actualizarLibroValidator),
  librosController.putActualizarLibro
);
router.delete("/:id_libro", librosController.deleteLibro);

export default router;