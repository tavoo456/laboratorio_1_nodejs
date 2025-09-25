import { Router } from "express";
import * as librosContoller from "../controllers/librosController.js";
import {
  runValidations,
  insertarLibroValidator,
  actualizarLibroValidator,
} from "../middlewares/validator.js";

const router = Router();
router.get("/", librosContoller.getLibros);
router.get("/:id_libro", librosContoller.getLibroById);
router.get(
  "/anio_publicacion/:anio_publicacion",
  librosContoller.getLibroByAnioPublicacion
);
router.get("/autor/:nombre_autor", librosContoller.getLibroByAutor);
router.get(
  "/categoria/:nombre_categoria",
  librosContoller.getLibroByCategoria
);
router.get(
  "/clasificacion/:clasificacion",
  librosContoller.getLibroByClasificacionCategoria
);
router.post(
  "/",
  runValidations(insertarLibroValidator),
  librosContoller.postInsertarLibro
);

router.put(
  "/:id_libro",
  runValidations(actualizarLibroValidator),
  librosContoller.putActualizarLibro
);
router.delete("/:id_libro", librosContoller.deleteLibro);

export default router;