import {Router} from 'express'
import {obtenerIngresosPorUsuario} from '../repository/ingresosRepository.js'

export const gastosRoutes = Router()

// Obtener Ingresos por usuario
gastosRoutes.get('/gastos/:usuarioId', async (req, res) => {
    const usuarioId = parseInt(req.params.usuarioId);
    const aIngresos = await obtenerIngresosPorUsuario(usuarioId)

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(JSON.stringify(aIngresos));
})