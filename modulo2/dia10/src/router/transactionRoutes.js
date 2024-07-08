import {Router} from 'express' 

export const transactionRoutes = Router()

//Tipo 1 = Ingresos 2 = Egresos
const aTransaction = [
    {
        id: 1,
        monto : 100,
        descripcion: "Pago de cliente",
        tipo: 1
    },
    {
        id: 2,
        monto : 200,
        descripcion: "Pago de Alquiler",
        email: 2
    }
]

//Listar Transacciones
transactionRoutes.get('/transaction', (req, res) => {
    res.json(aTransaction)
})

// Obtener Transaccion
transactionRoutes.get('/transaction/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aTransaction.findIndex(transaction => transaction.id === id);

    if (index<0) {
        res.json({
            error: "Transaccion no encontrada"
        })
        return
    }
    res.json(aTransaction[index]);
})

//Agregar Transaccion
transactionRoutes.post('/transaction', (req, res) => {
    const body = req.body
    
    if (!body.monto){
        res.json({
            error: "monto is required"
        })
        return;
    }
    if (!body.descripcion){
        res.json({
            error: "descripcion is required"
        })
        return
    }
    if (!body.tipo){
        res.json({
            error: "tipo is required"
        })
        return
    }

    const obj = {
        id: aTransaction[aTransaction.length-1].id +1 || 1,
        monto: body.monto,
        descripcion: body.descripcion,
        tipo: body.tipo

    }
    aTransaction.push(obj);
    res.json(aTransaction);
})

//Modificar Transaccion
transactionRoutes.put('/transaction/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const body = req.body
    const index = aTransaction.findIndex(transaction=> transaction.id === id)
    
    if (!body.monto){
        res.json({
            error: "monto is required"
        })
        return;
    }
    if (!body.descripcion){
        res.json({
            error: "descripcion is required"
        })
        return
    }
    if (!body.tipo){
        res.json({
            error: "tipo is required"
        })
        return
    }

    aTransaction[index].monto       = body.monto
    aTransaction[index].descripcion = body.descripcion
    aTransaction[index].tipo        = body.tipo

    res.json(aTransaction);
})


//Borrar transaccion
transactionRoutes.delete('/transaction/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = aTransaction.findIndex(transaction => transaction.id === id );
    
    if (index<0) {
        res.json({
            error: "transaccion no encontrada"
        })
    }

    aTransaction.splice(index,1);
    res.json(aTransaction);
})