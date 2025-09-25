import { pool } from '../db.js';

export const getAllCategorias = async (req, res) => {
    const result = await pool.query('SELECT * FROM categorias');

    return result.rows;
}
