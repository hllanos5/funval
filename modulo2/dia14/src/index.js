import express from 'express'
import {gastosRoutes} from './router/gastosRoutes.js'

const app = express()
app.use(express.json())

app.use(gastosRoutes)

app.listen(3000, () => {
    console.log("host: http://localhost:3000")
})