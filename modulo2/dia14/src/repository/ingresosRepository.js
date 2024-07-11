import { pool } from "../config/bd.js";

export const obtenerIngresosPorUsuario = async (idUsuario) => {
  try {
    let query = "select g.monto, c.descripcion, u.nombre from gastos g  inner join categorias c on  (g.categoria_id = c.id) inner join usuario u  on ( g.usuario_id = u.id) where u.id  = ?";
    const [rs] = await pool.execute(query,[idUsuario]);
    return rs;
  }
  catch (error) {
    console.log("Ha sucedido al ejecutar la consulta" + error.message);
  }
}