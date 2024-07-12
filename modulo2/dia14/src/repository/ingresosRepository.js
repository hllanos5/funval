import { pool } from "../config/bd.js";

export const obtenerIngresosPorUsuario = async (idUsuario) => {
  try {
    let query = "select * from ingresos where usuario_id = ?";
    const [rs] = await pool.execute(query, [idUsuario]);
    const rpta = {status: 200, oContenido: rs}
    return rpta;
  }
  catch (error) {
    throw {message:error.message, status: 401}
  }
}

export const obtenerIngresosPorIdPorUsuarioId = async (id, idUsuario) => {
  try {
    let query = "select * from ingresos where id = ? and usuario_id = ?";
    const [rs] = await pool.execute(query, [id, idUsuario]);
    return rs;
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}

export const insertarIngresos = async (usuarioId, monto, descripcion) => {
  try {
    let query = "INSERT INTO ingresos (usuario_id, monto, descripcion) VALUES (?, ?, ?)";
    await pool.execute(query, [usuarioId, monto, descripcion]);
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}

export const actualizarIngresos = async (usuarioId, id, monto, descripcion) => {
  try {
    let query = "UPDATE SET ingresos SET monto = ?, descripcion= ? WHERE usuarioId= ? AND id = ?";
    await pool.execute(query, [monto, descripcion, usuarioId, id]);
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}

export const borrarIngresos = async (usuarioId, id) => {
  try {
    let query = "DELETE FROM ingresos WHERE usuarioId= ? AND id = ?";
    await pool.execute(query, [usuarioId, id]);
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}