import { pool } from '../db.js';

export const getAllCategorias = async (req, res) => {
    const result = await pool.query('SELECT * FROM categorias');

    return result.rows;
}

export const postCrearCategoria = async (nombre_categoria, clasificacion) => {
    const query = `INSERT INTO categorias (nombre_categoria, clasificacion) VALUES ($1, $2) RETURNING *;`

    const result = await pool.query(query, [nombre_categoria, clasificacion]);
    return result.rows[0];
}


export const putActualizarCategoria = async (categoria) => {
    const query = `UPDATE categorias
                    SET nombre_categoria=$1,
                        clasificacion=$2
                    WHERE id_categorias=$3
                    RETURNING *;`;

    const result = await pool.query(query, categoria);

    if (result.rowCount === 0) return result.status(404).json({ message:'Categoria no encontrado'});

    return result.rows[0];
};

export const eliminarCategoria = async (id_categoria) => {
    const categoriaAEliminar = await pool.query(`SELECT * FROM categorias WHERE id_categorias=$1`, [id_categoria]);

    if (categoriaAEliminar.rowCount === 0) throw new Error( 'Categoria no encontrada');
    
    const result = await pool.query(`DELETE FROM categorias WHERE id_categorias=$1`, [id_categoria]);
    return { message: 'Categoria eliminada correctamente', categoria: categoriaAEliminar.rows[0] };
};