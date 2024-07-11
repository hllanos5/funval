import {Router} from 'express'
import {obtenerIngresosPorUsuario, obtenerIngresosPorIdPorUsuarioId, insertarIngresos} from '../repository/ingresosRepository.js'

export const gastosRoutes = Router()

// Obtener Ingresos por usuario
gastosRoutes.get('/ingresos/:usuarioId', async (req, res) => {
    
    const {params, query, body} = req;

    const usuarioId = parseInt(req.params.usuarioId);
    const aIngresos = await obtenerIngresosPorUsuario(usuarioId)

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(aIngresos));
})

gastosRoutes.get('/ingresos/:usuarioId/:id', async (req, res) => {
    
    const id = parseInt(req.params.id);
    const usuarioId = parseInt(req.params.usuarioId);

    const aIngresos = await obtenerIngresosPorIdPorUsuarioId(id, usuarioId);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(aIngresos));
})

gastosRoutes.post('/ingresos/:usuarioId', async (req, res) => {

    try {
        const usuarioId = parseInt(req.params.usuarioId);
        const monto = req.body.monto;
        const descripcion = req.body.descripcion;

        console.log(usuarioId, monto, descripcion);

        await insertarIngresos(usuarioId, monto, descripcion);
        res.json({message: "Ingreso Exitoso"});
        
    } catch (error) {
        res.json({message: "error"});
    }

    
})