import {Router} from 'express' 

export const clientRoutes = Router()

const aClient = [
    {
        id: 1,
        nombre : "Hans",
        apellido: "Llanos"
    },
    {
        id: 2,
        nombre : "Jonathan",
        apellido: "Chavez"
    }
]

//Listar Clientes
clientRoutes.get('/client', (req, res) => {
    res.json(aClient)
})

// Obtener Cliente
clientRoutes.get('/client/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aClient.findIndex(client => client.id === id);

    if (index<0) {
        res.json({
            error: "Cliente no encontrada"
        })
        return
    }
    res.json(aClient[index]);
})

//Agregar Cliente
clientRoutes.post('/client', (req, res) => {
    const body = req.body
    
    if (!body.nombre){
        res.json({
            error: "nombre is required"
        })
        return;
    }
    if (!body.apellido){
        res.json({
            error: "apellido is required"
        })
        return
    }

    const obj = {
        id: aClient[aClient.length-1].id +1 || 1,
        nombre: body.nombre,
        apellido: body.apellido
    }

    aClient.push(obj);
    res.json(aClient);
})

//Modificar Transaccion
clientRoutes.put('/client/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body
    const index = aClient.findIndex(client=> client.id === id)
    
    if (!body.nombre){
        res.json({
            error: "nombre is required"
        })
        return;
    }
    if (!body.apellido){
        res.json({
            error: "apellido is required"
        })
        return
    }

    aClient[index].nombre   = body.nombre
    aClient[index].apellido = body.apellido

    res.json(aClient);
})


//Borrar transaccion
clientRoutes.delete('/client/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aClient.findIndex(client => client.id === id );
    
    if (index<0) {
        res.json({
            error: "Cliente no encontrado"
        })
    }

    aClient.splice(index,1);
    res.json(aClient);
})