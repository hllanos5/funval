import express from 'express'
import {taskRoutes} from './router/taskRoutes.js'
import {clientRoutes} from './router/clientRoutes.js'

const app = express()
app.use(express.json())

app.use(taskRoutes)
app.use(clientRoutes)

app.listen(3000, () => {
    console.log("host: http://localhost:3000")
})