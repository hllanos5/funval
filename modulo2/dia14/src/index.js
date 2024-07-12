import express from 'express'
import routes from './router/index.js'

const app = express()

app.use(express.json())
routes(app)

app.listen(3000, () => {
    console.log("host: http://localhost:3000")
})