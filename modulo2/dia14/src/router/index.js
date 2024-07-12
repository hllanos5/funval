import {ingresosRoutes} from './ingresosRoutes.js'

export default function routes(app){
    // el prefijo ayuda a concatenar el path dentro de la ruta
    app.use('/ingresos',ingresosRoutes)
}