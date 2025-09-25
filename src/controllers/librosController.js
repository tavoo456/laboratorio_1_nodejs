import * as librosServices from "../services/librosServices.js";

export const getLibros = async (req, res, next) => {
  try {
    const libros = await librosServices.getLibros();

    res.json(libros);
  } catch (error) {
    return next(error);
  }
};

export const getLibroById = async (req, res, next) => {
  try {
    const { id_libro } = req.params;
    const libro = await librosServices.getLibroById(id_libro);
    if (!libro) {
      return res
        .status(404)
        .json({ status: "Error", message: "Libro no encontrado" });
    }

    res.json(libro);
  } catch (error) {
    return next(error);
  }
};

export const getLibroByAnioPublicacion = async (req, res, next) => {
  try {
    const { anio_publicacion } = req.params;
    const libros = await librosServices.getLibroByAnioPublicacion(
      anio_publicacion
    );
    if (libros.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "No se encontraron libros para ese año de publicación",
      });
    }

    res.json(libros);
  } catch (error) {
    return next(error);
  }
};

export const getLibroByIdAutor = async (req, res, next) => {
  try {
    const { nombre_autor } = req.params;
    const libros = await librosServices.getLibroByIdAutor(nombre_autor);
    if (libros.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "No se encontraron libros para ese autor",
      });
    }

    res.json(libros);
  } catch (error) {
    return next(error);
  }
};

export const getLibroByCategoria = async (req, res, next) => {
  try {
    const { nombre_categoria } = req.params;
    const libros = await librosServices.getLibroByCategoria(nombre_categoria);
    if (libros.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "No se encontraron libros para esa categoría",
      });
    }
    res.json(libros);
  } catch (error) {
    return next(error);
  }
};

export const getLibroByClasificacionCategoria = async (req, res, next) => {
  try {
    const { clasificacion } = req.params;
    const libros = await librosServices.getLibroByClasificacionCategoria(
      clasificacion
    );
    if (libros.length === 0) {
      return res.status(404).json({
        status: "Error",
        message: "No se encontraron libros para esa clasificación de categoría",
      });
    }

    res.json(libros);
  } catch (error) {
    return next(error);
  }
};

export const postInsertarLibro = async (req, res, next) => {
  try {
    const { titulo, anio_publicacion, autor_id, categoria_id, resumen } =
      req.body;

    const nuevoLibro = await librosServices.postInsertarLibro(
      titulo,
      anio_publicacion,
      autor_id,
      categoria_id,
      resumen
    );

    res.status(201).json(nuevoLibro);
  } catch (error) {
    return next(error);
  }
};

export const putActualizarLibro = async (req, res, next) => {
  try {
    const { id_libro } = req.params;
    const { titulo, anio_publicacion, autor_id, categoria_id, resumen } =
      req.body;
    const libroExistente = await librosServices.getLibroById(id_libro);

    if (!libroExistente) {
      return res
        .status(404)
        .json({ status: "Error", message: "Libro no encontrado" });
    }
    const libroActualizado = {
      id_libro: id_libro,
      titulo: titulo || libroExistente.titulo,
      anio_publicacion: anio_publicacion || libroExistente.anio_publicacion,
      autor_id: autor_id || libroExistente.autor_id,
      categoria_id: categoria_id || libroExistente.categoria_id,
      resumen:
        resumen ||
        (libroExistente.resumen !== null ? libroExistente.resumen : null),
    };
    const resultado = await librosServices.putActualizarLibro(libroActualizado);

    res.json(resultado);
  } catch (error) {
    return next(error);
  }
};

export const deleteLibro = async (req, res, next) => {
  try {
    const { id_libro } = req.params;
    const libroExistente = await librosServices.getLibroById(id_libro);

    if (!libroExistente) {
      return res
        .status(404)
        .json({ status: "Error", message: "Libro no encontrado" });
    }

    await librosServices.deleteLibro(id_libro);

    res.json({ status: "OK", message: "Libro eliminado correctamente" });
  } catch (error) {
    return next(error);
  }
};
