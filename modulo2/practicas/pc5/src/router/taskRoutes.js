import {Router} from 'express' 

export const taskRoutes = Router()

const aTask = [
    {
        id: 1,
        nombre : "Tarea 1",
        fecha: "08/07/2024"
    },
    {
        id: 2,
        nombre : "Tarea 2",
        fecha: "08/08/2024"
    }
]

//Listar Tareas
taskRoutes.get('/task', (req, res) => {
    res.json(aTask)
})

// Obtener Tareas
taskRoutes.get('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aTask.findIndex(task => task.id === id);

    if (index<0) {
        res.json({
            error: "Tarea no encontrado"
        })
        return
    }
    res.json(aTask[index]);
})


//Agregar Tarea
taskRoutes.post('/task', (req, res) => {
    const body = req.body
    
    if (!body.nombre){
        res.json({
            error: "nombre is required"
        })
        return;
    }
    if (!body.fecha){
        res.json({
            error: "fecha is required"
        })
        return
    }

    const obj = {
        id: aTask[aTask.length-1].id +1 || 1,
        nombre: body.nombre,
        fecha: body.fecha

    }
    aTask.push(obj);
    res.json(aTask);
})

//Modificar Task
taskRoutes.put('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body
    const index = aTask.findIndex(task=> task.id === id)
    
    if (index < 0) {
        res.json({
            error: "Tarea no encontrada"
        })
        return;
    }
    if (!body.nombre){
        res.json({
            error: "Nombre es required"
        })
        return
    }
    if (!body.fecha){
        res.json({
            error: "Fecha  es required"
        })
        return
    }

    aTask[index].nombre = body.nombre
    aTask[index].fecha  = body.fecha

    res.json(aTask);
})

//Borrar task
taskRoutes.delete('/task/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aTask.findIndex(task => task.id === id );
    
    if (index<0) {
        res.json({
            error: "Tarea no encontrada"
        })
    }

    aTask.splice(index,1);
    res.json(aTask);
})