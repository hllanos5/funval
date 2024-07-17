
import { Router } from 'express'

export const userRoutes = Router()

userRoutes.get('/', (req, res) => {
    try {
        res.json({ success: "Listar Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})

userRoutes.get('/:id', (req, res) => {
    try {
        res.json({ success: "Obtener Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})

userRoutes.post('/', (req, res) => {
    try {
        res.json({ success: "Crear Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})

userRoutes.put('/:id', (req, res) => {
    try {
        res.json({ success: "Actualizar Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})


userRoutes.delete('/:id', (req, res) => {
    try {
        res.json({ success: "Borrar Rol" })
    }
    catch (error) {
        res.json({ error: error.message });
    }
})