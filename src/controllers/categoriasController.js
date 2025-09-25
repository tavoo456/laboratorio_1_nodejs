import * as catServices from '../services/categoriasServices.js';

export const getObtenerTodosLasCategorias = async (req, res, next) => {
    try{
        const result = await catServices.getAllCategorias();

        res.json(result);
    } catch(err){
        return next(err);
    }
};

export const postCrearCategoria = async (req, res, next) => {
    try{
        const { nombre_categoria, clasificacion} = req.body;
        const result = await catServices.postCrearCategoria(nombre_categoria, clasificacion);
        res.status(201).json(result);
    }catch(err){
        return next(err);
    }
};

export const putActualizarCategoria = async (req, res, next) => {
    try{
        const { nombre_categoria, clasificacion} = req.body;
        const { id_categorias } = req.params;
        const categoria = [nombre_categoria, clasificacion, id_categorias];
        const result = await catServices.putActualizarCategoria(categoria);
        res.json(result);
    }catch(err){
        return next(err);
    }
};