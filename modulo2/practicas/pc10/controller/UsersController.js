import { listarUsuarioRepository, listarUsuarioAndRolesRepository } from "../repository/UsersRepository.js"
import { CODIGO_OK, CODIGO_ERROR } from '../config/CodigosConfig.js';

export const listarUsuario = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}

export const listarUsuarioAndRoles = async (req, res) => {

    try {
        const oRespuesta = await listarUsuarioAndRolesRepository();
        return oRespuesta;
    } catch (error) {
        return {mensaje: error.message, codigo: CODIGO_ERROR}
    }
}
