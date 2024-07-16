
import { Router } from 'express'
import { store, upload, updateProfileImage } from '../controller/UsersController.js'

export const userRoutes = Router()

//Muestra todos los usuarios
userRoutes.get('/', (req, res, next) => {
    res.json({ all: "All useres" })
})

//Muestra un usuario
userRoutes.get('/:id', (req, res, next) => {
    res.json({ show: "one useres" })
})

//Insertar Usuario
userRoutes.post('/', async (req, res, next) => {
    const respose = await store(req)
    res.json(respose)
})

//Actualiza el usuario
userRoutes.put('/:id', upload.single('profile'), (req, res, next) => {
    res.json({ profile: req.file })
})

//Actualiza la imagen del usuario
userRoutes.patch('/:id', upload.single('profile'), async (req, res, next) => {
    try {
        const response = await updateProfileImage(req)
        res.status(201).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//Borra los usuarios
userRoutes.delete('/:id', (req, res, next) => {
    res.json({ delete: "delete useres" })
})
