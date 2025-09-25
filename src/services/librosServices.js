/*
autores

id_autor (PK, UUID)
nombre (requerido)
nacionalidad (opcional)
biografia (opcional)
correo (requerido)

categorias

id_categoria (PK, UUID)
nombre_categoria (requerido)
clasificación (requerido)

libros

id_libro (PK, UUID)
titulo (requerido, min. 10 caracteres)
anio_publicacion (int, requerido, mayor a 1900)
autor_id (FK hacia autores.id_autor)
categoría_id (FK hacia categorías.id_categoria)
resumen (opcional) 
*/

import { pool } from "../db.js";

export const getLibros = async () => {
  const rows = await pool.query("SELECT * FROM libros");

  return rows.rows;
};

export const getLibroById = async (id_libro) => {
  const rows = await pool.query(`SELECT * FROM libros WHERE id_libro = $1`, [
    id_libro,
  ]);

  return rows.rows[0];
};

export const getLibroByAnioPublicacion = async (anio_publicacion) => {
  const rows = await pool.query(
    `SELECT * FROM libros WHERE anio_publicacion = $1`,
    [anio_publicacion]
  );

  return rows.rows;
};

export const getLibroByIdAutor = async (nombre_autor) => {
  const rows = await pool.query(
    `SELECT * FROM libros l JOIN autores a ON l.autor_id = a.id_autor WHERE a.nombre = $1`,
    [nombre_autor]
  );

  return rows.rows;
};

export const getLibroByCategoria = async (nombre_categoria) => {
  const rows = await pool.query(
    `SELECT * FROM libros l JOIN categorias c ON l.categoria_id = c.id_categoria WHERE c.nombre_categoria = $1`,
    [nombre_categoria]
  );

  return rows.rows;
};

export const getLibroByClasificacionCategoria = async (clasificacion) => {
  const rows = await pool.query(
    `SELECT l.* FROM libros l JOIN categorias c ON l.categoria_id = c.id_categoria WHERE c.clasificacion = $1`,
    [clasificacion]
  );

  return rows.rows;
};

export const postInsertarLibro = async (
  titulo,
  anio_publicacion,
  autor_id,
  categoria_id,
  resumen
) => {
  const result = await pool.query(
    `INSERT INTO libros (titulo, anio_publicacion, autor_id, categoria_id, resumen) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [titulo, anio_publicacion, autor_id, categoria_id, resumen]
  );
  return result.rows[0];
};

export const putActualizarLibro = async (libro) => {
  const result = await pool.query(
    `UPDATE libros SET titulo = $1, anio_publicacion = $2, autor_id = $3, categoria_id = $4, resumen = $5 WHERE id_libro = $6 RETURNING *`,
    [
      libro.titulo,
      libro.anio_publicacion,
      libro.autor_id,
      libro.categoria_id,
      libro.resumen,
      libro.id_libro,
    ]
  );

  return result.rows[0];
};

export const deleteEliminarLibro = async (id_libro) => {
  const result = await pool.query(
    `DELETE FROM libros WHERE id_libro = $1 RETURNING *`,
    [id_libro]
  );

  return result.rows[0];
};
