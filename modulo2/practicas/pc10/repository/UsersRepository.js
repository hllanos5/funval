import pool from "../bd/Pool.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

/* metodo para listar usuario */
const listarUsuarioRepository = async () => {
    try {
        const sql = 'SELECT * FROM usuarios';
        const [rs] = await pool.execute(sql);
        return {resultado: rs, mensaje: "Ok", codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para listar usuario con roles
const listarUsuarioConRolesRepository = async () => {
    try {
        const sql = 'select u.*, r.id_rol,r.nombre_rol from usuarios u inner join roles r on (u.id_rol = r.id_rol)';
        const [rs] = await pool.execute(sql);
        return {resultado: rs, mensaje: "Ok", codigo: CODIGO_OK};
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

// metodo para obtener un usuario con roles
const obtenerUsuarioConRolesRepository = async (req) => {
    try {
        const {params, query, body, headers} = req;
        const sql = 'select u.*, r.id_rol,r.nombre_rol from usuarios u inner join roles r on (u.id_rol = r.id_rol) WHERE u.id_usuario = ?';
        const [rs] = await pool.execute(sql, [params.id]);
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

export  {listarUsuarioRepository, listarUsuarioConRolesRepository, obtenerUsuarioConRolesRepository}