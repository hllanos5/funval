import express from 'express'
import {userRoutes} from './router/userRoutes.js'
import {transactionRoutes} from './router/transactionRoutes.js'

const app = express()
app.use(express.json())

/*
app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.get('/users', (req, res) => {
    res.send('Lista de usuarios')
})

app.post('/users', (req, res) => {

    console.log(req.body);
    res.json({
        id: 1,
        nombre: "Hans Llanos"
    })
})
*/
app.use(userRoutes)
app.use(transactionRoutes)

app.listen(3000, () => {
    console.log("host: http://localhost:3000")
})