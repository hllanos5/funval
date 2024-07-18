import { listarUsuarioRepository, listarUsuarioConRolesRepository, obtenerUsuarioConRolesRepository } from "../repository/UsersRepository.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const listarUsuario = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioConRolesRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const obtenerUsuarioConRoles = async (req, res) => {

    try {
        const oRespuesta = await obtenerUsuarioConRolesRepository(req);
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}