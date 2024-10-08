
import { Router } from 'express'
import {listarRol, obtenerRol} from '../controller/RoleController.js'
 
export const roleRoutes = Router()

roleRoutes.get('/', listarRol)

roleRoutes.get('/:id',obtenerRol)

roleRoutes.post('/', (req, res) => {
    //#swagger.tags = ['Roles']
    try {
        res.json({ success: "Crear Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})

roleRoutes.put('/:id', (req, res) => {
    //#swagger.tags = ['Roles']
    try {
        res.json({ success: "Actualizar Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})


roleRoutes.delete('/:id', (req, res) => {
    //#swagger.tags = ['Usuario']
    try {
        res.json({ success: "Borrar Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})