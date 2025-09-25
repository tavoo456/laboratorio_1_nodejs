import * as catServices from '../services/categoriasServices.js';

export const getObtenerTodosLasCategorias = async (req, res, next) => {
    try{
        //Ejecutamos consulta SQL
        const result = await catServices.getAllCategorias();
        //Devolvemos los resultados en formato JSON
        res.json(result);
    } catch(err){
        //En caso de error, lo pasamos al middleware de manejo de errrores
        return next(err);
    }
};