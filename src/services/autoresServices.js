import e from "express";
import { pool } from "../db.js";

export const getAutores = async () => {
  const rows = await pool.query("SELECT * FROM autores");

  return rows;
};

export const getAutorById = async (id_autor) => {
  const rows = await pool.query("SELECT * FROM autores WHERE id_autor = ?", [
    id_autor,
  ]);

  return rows[0];
};

export const postInsertarAutor = async (
  nombre,
  nacionalidad,
  biografia,
  correo
) => {
  const result = await pool.query(
    "INSERT INTO autores (nombre, nacionalidad, biografia, correo) VALUES (?, ?, ?, ?) RETURNING *",
    [nombre, nacionalidad, biografia, correo]
  );

  return result[0];
};

export const putActualizarAutor = async (autor) => {
  const result = await pool.query(
    "UPDATE autores SET nombre = ?, nacionalidad = ?, biografia = ?, correo = ? WHERE id_autor = ? RETURNING *",
    [
      autor.nombre,
      autor.nacionalidad,
      autor.biografia,
      autor.correo,
      autor.id_autor,
    ]
  );

  return result[0];
};

export const deleteEliminarAutor = async (id_autor) => {
  const result = await pool.query(
    "DELETE FROM autores WHERE id_autor = ? RETURNING *",
    [id_autor]
  );

  return result[0];
};
