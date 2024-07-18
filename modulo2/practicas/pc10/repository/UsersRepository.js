import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

/* metodo para crear usuarios */

const listarUsuarioRepository = async () => {
    try {
        const sql = 'SELECT * FROM usuarios';
        const [rs] = await pool.execute(sql);
        return {resultado: rs, mensaje: "Ok", codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

const crearUsuarioRepository = async (req) => {
    try {
        const { body: { nombre, email, password } } = req;
        const sql = 'INSERT INTO users (`nombre`, `email`, `password`) VALUES (?,?,?)';
        await pool.execute(sql, [nombre, email, password]);
        return { success: "user created successfully" }
    } catch (error) {
        throw error
    }
}

export  { crearUsuarioRepository, listarUsuarioRepository}