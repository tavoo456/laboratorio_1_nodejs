import express from "express";
import { pool } from "../db.js";

export const getAutores = async () => {
  const rows = await pool.query("SELECT * FROM autores");

  return rows.rows;
};

export const getAutorById = async (id_autor) => {
  const rows = await pool.query(`SELECT * FROM autores WHERE id_autor = $1`, [
    id_autor,
  ]);

  return rows.rows[0];
};

export const postInsertarAutor = async (
  nombre,
  nacionalidad,
  biografia,
  correo
) => {
  const result = await pool.query(
    `INSERT INTO autores (nombre, nacionalidad, biografia, correo) VALUES ($1, $2, $3, $4) RETURNING *`,
    [nombre, nacionalidad, biografia, correo]
  );

  return result.rows[0];
};

export const putActualizarAutor = async (autor) => {
  const result = await pool.query(
    `UPDATE autores SET nombre = $1, nacionalidad = $2, biografia = $3, correo = $4 WHERE id_autor = $5 RETURNING *`,
    [
      autor.nombre,
      autor.nacionalidad,
      autor.biografia,
      autor.correo,
      autor.id_autor,
    ]
  );

  return result.rows[0];
};

export const deleteEliminarAutor = async (id_autor) => {
  const result = await pool.query(
    `DELETE FROM autores WHERE id_autor = $1 RETURNING *`,
    [id_autor]
  );

  return result[0];
};
