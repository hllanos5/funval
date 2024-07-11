import express from 'express'
import {ingresosRoutes} from './router/ingresosRoutes.js'

const app = express()
app.use(express.json())

app.use(ingresosRoutes)

app.listen(3000, () => {
    console.log("host: http://localhost:3000")
})