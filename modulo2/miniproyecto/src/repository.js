import { pool } from "./bd.js";

export const usuarioGetAll = async () => {
  try {
    let query = "SELECT * FROM usuario";
    const [rs] = await pool.execute(query);
    return rs;
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const usuarioInsert = async (cabecera, usuario) => {
  try {
    console.log(cabecera)
    console.log(usuario)
    let query = `INSERT INTO usuario(${cabecera[0]}, ${cabecera[1]}, ${cabecera[2]}, ${cabecera[3]}, ${cabecera[4]}, ${cabecera[5]}, ${cabecera[6]}, ${cabecera[7]}) VALUES 
    (?, ?, ?, ?, ?, ?, ?, ?)`;
    await pool.execute(query, usuario);
  }
  catch (error) {
    console.log("Ha sucedido al insertar un dato " + error);
  }
}
//export default {usuarioGetAll , usuarioInsert}