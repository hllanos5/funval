import { pool } from "../config/bd.js";

export const obtenerIngresosPorUsuario = async (idUsuario) => {
  try {
    let query = "select * from ingresos where usuario_id = ?";
    const [rs] = await pool.execute(query,[idUsuario]);
    return rs;
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}

export const obtenerIngresosPorIdPorUsuarioId = async (id,idUsuario) => {
    try {
      let query = "select * from ingresos where id = ? and usuario_id = ?";
      const [rs] = await pool.execute(query,[id, idUsuario]);
      return rs;
    }
    catch (error) {
      console.log("Ha sucedido al ejecutar la consulta" + error.message);
    }
  }

  export const insertarIngresos = async (usuarioId, monto, descripcion) => {
    try {
      let query = "INSERT INTO ingresos (usuario_id, monto, descripcion) VALUES (?, ?, ?)";
      await pool.execute(query,[usuarioId, monto, descripcion]);      
    }
    catch (error) {
      console.log("Ha sucedido al ejecutar la consulta" + error.message);
    }
  }