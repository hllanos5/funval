import {Router} from 'express' 

export const userRoutes = Router()

const users = [
    {
        id: 1,
        nombre : "Hans Llanos",
        email: "hans.llanos@gmail.com"
    },
    {
        id: 2,
        nombre : "Hans Llanos2",
        email: "hans.llanos2@gmail.com"
    }
]

//Listar Usuarios
userRoutes.get('/users', (req, res) => {
    res.json(users)
})

// Obtener Usuarios
userRoutes.get('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(users => user.id === id);

    if (index<0) {
        res.json({
            error: "Usuario no encontrado"
        })
        return
    }
    res.json(users[index]);
})

//Agregar Usuario
userRoutes.post('/users', (req, res) => {
    const body = req.body
    
    if (!body.nombre){
        res.json({
            error: "nombre is required"
        })
        return;
    }
    if (!body.email){
        res.json({
            error: "email is required"
        })
        return
    }

    const obj = {
        id: users[users.length-1].id +1 || 1,
        nombre: body.nombre,
        email: body.email

    }
    users.push(obj);
    res.json(users);
})

//Modificar Usuario
userRoutes.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body
    const index = users.findIndex(user=> user.id === id)
    
    if (index < 0) {
        res.json({
            error: "Usuario no encontrado"
        })
        return;
    }
    if (!body.nombre){
        res.json({
            error: "nombre es required"
        })
        return
    }

    users[index].nombre = body.nombre

    res.json(users);
})

//Borrar usuario
userRoutes.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(users => user.id === id );
    
    if (index<0) {
        res.json({
            error: "usuario no encontrado"
        })
    }

    users.splice(index,1);
    res.json(users);
})