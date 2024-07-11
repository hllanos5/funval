import {Router} from 'express'
import {obtenerIngresosPorUsuario, obtenerIngresosPorIdPorUsuarioId, insertarIngresos, actualizarIngresos, borrarIngresos} from '../repository/ingresosRepository.js'

export const ingresosRoutes = Router()

// Obtener Ingresos por usuario
ingresosRoutes.get('/ingresos/:usuarioId', async (req, res) => {
    
    const {params, query, body} = req;

    const usuarioId = parseInt(req.params.usuarioId);
    const aIngresos = await obtenerIngresosPorUsuario(usuarioId)

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(aIngresos));
})

ingresosRoutes.get('/ingresos/:usuarioId/:id', async (req, res) => {
    
    const id = parseInt(req.params.id);
    const usuarioId = parseInt(req.params.usuarioId);

    const aIngresos = await obtenerIngresosPorIdPorUsuarioId(id, usuarioId);

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(aIngresos));
})

ingresosRoutes.post('/ingresos/:usuarioId', async (req, res) => {

    try {
        const usuarioId = parseInt(req.params.usuarioId);
        const monto = req.body.monto;
        const descripcion = req.body.descripcion;

        console.log(usuarioId, monto, descripcion);

        await insertarIngresos(usuarioId, monto, descripcion);
        res.status(201).json({message: "Ingreso Exitoso"});
        
    } catch (error) {
        res.json({message: "error"});
    }

})

ingresosRoutes.put('/ingresos/:usuarioId/:id', async (req, res) => {

    try {

        const {body} = req
        const {monto, descripcion} = body

        const idIngreso = parseInt(req.params.id);
        const idUsuario = parseInt(req.params.usuarioId);
        
        if( monto === undefined && descripcion === undefined){
            throw new Error("Los campos monto y descripcion son requeridos")
        }

        
        await actualizarIngresos(idUsuario, idIngreso, monto, descripcion);
        res.status(202).json({message: "Ingreso Exitoso"});
        
    } catch (error) {
        res.status(400).json({error : error.message})
    }
    
})

ingresosRoutes.delete('/ingresos/:usuarioId/:id', async (req, res) => {

    try {
        const {params} = req
                
        await borrarIngresos(params.idUsuario, params.id);
        res.status(202).json({message: "Ingreso Exitoso"});
        
    } catch (error) {
        res.status(400).json({error : error.message})
    }
    
})