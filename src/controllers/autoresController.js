import * as userServices from "../services/autoresServices.js";

export const getAutores = async (req, res, next) => {
  try {
    const autores = await userServices.getAutores();

    res.json(autores);
  } catch (error) {
    return next(error);
  }
};

export const getAutorById = async (req, res, next) => {
  try {
    const { id_autor } = req.params;
    const autor = await userServices.getAutorById(id_autor);

    if (!autor) {
      return res
        .status(404)
        .json({ status: "Error", message: "Autor no encontrado" });
    }

    res.json(autor);
  } catch (error) {
    return next(error);
  }
};

export const postInsertarAutor = async (req, res, next) => {
  try {
    const { nombre, nacionalidad, biografia, correo } = req.body;

    const nuevoAutor = await userServices.postInsertarAutor(
      nombre,
      nacionalidad,
      biografia,
      correo
    );

    res.status(201).json(nuevoAutor);
  } catch (error) {
    return next(error);
  }
};

export const putActualizarAutor = async (req, res, next) => {
  try {
    const { id_autor } = req.params;
    const { nombre, nacionalidad, biografia, correo } = req.body;
    const autorExistente = await userServices.getAutorById(id_autor);

    if (!autorExistente) {
      return res
        .status(404)
        .json({ status: "Error", message: "Autor no encontrado" });
    }

    const autorActualizado = {
      id_autor: parseInt(id_autor),
      nombre: nombre || autorExistente.nombre,
      nacionalidad: nacionalidad || autorExistente.nacionalidad,
      biografia: biografia || autorExistente.biografia,
      correo: correo || autorExistente.correo,
    };

    const resultado = await userServices.putActualizarAutor(autorActualizado);

    res.json(resultado);
  } catch (error) {
    return next(error);
  }
};

export async function deleteEliminarAutor(req, res, next) {
  try {
    const { id_autor } = req.params;
    const autorExistente = await userServices.getAutorById(id_autor);

    if (!autorExistente) {
      return res
        .status(404)
        .json({ status: "Error", message: "Autor no encontrado" });
    }

    const resultado = await userServices.deleteEliminarAutor(id_autor);

    res.json({ status: "Éxito", message: "Autor eliminado", data: resultado });
  } catch (error) {
    return next(error);
  }
}
