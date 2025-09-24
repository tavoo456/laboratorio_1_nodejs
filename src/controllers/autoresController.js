import * as userServices from "../services/autoresServices.js";
import bcrypt from "bcryptjs";

/* export const getUsuarios = async (req, res, next) => {
  try {
    const usuarios = await userServices.getUsuarios();

    res.json(usuarios);
  } catch (error) {
    return next(error);
  }
};

export const getUsuarioByEmail = async (req, res, next) => {
  const { email } = req.params;

  try {
    const usuario = await userServices.getUsuarioByEmail(email);

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuario);
  } catch (error) {
    return next(error);
  }
};

export const getUsuarioByNombre = async (req, res, next) => {
  const { nombre } = req.params;

  try {
    const usuario = await userServices.getUsuarioByNombre(nombre);

    res.json(usuario);
  } catch (error) {
    return next(error);
  }
};

export const postInsertarUsuario = async (req, res, next) => {
  const SALT_ROUNDS = 10;
  const salt = bcrypt.genSaltSync(SALT_ROUNDS);
  const { nombre, email, documento, carnet, contrasenia } = req.body;
  const contraseniaHash = bcrypt.hashSync(contrasenia, salt);

  try {
    const nuevoUsuario = await userServices.postInsertarUsuario(
      nombre,
      email,
      documento,
      carnet,
      contraseniaHash
    );

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    return next(error);
  }
};

export const putActualizarUsuario = async (req, res, next) => {
  try {
    const { id_usuario } = req.params;
    const { nombre, email, documento, carnet, contrasenia } = req.body;

    const usuario = {
      id_usuario,
      nombre,
      email,
      documento,
      carnet,
      contrasenia,
    };

    const usuarioActualizado = await userServices.putActualizarUsuario(usuario);

    if (!usuarioActualizado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(usuarioActualizado);
  } catch (error) {
    return next(error);
  }
};

export const deleteEliminarUsuario = async (req, res, next) => {
  const { id_usuario } = req.params;

  try {
    const usuarioEliminado = await userServices.deleteEliminarUsuario(
      id_usuario
    );

    if (!usuarioEliminado) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente.", usuarioEliminado });
  } catch (error) {
    return next(error);
  }
};*/
