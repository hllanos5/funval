import { pool } from "./bd.js";

export const empleadosGetAll = async () => {
  try {
    let query = "SELECT * FROM staff";
    const [rs] = await pool.execute(query);
    return rs;
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosInsert = async (cabecera, empleado) => {
  try {
    let query = `INSERT INTO staff(${cabecera[0]}, ${cabecera[1]}, ${cabecera[2]}, ${cabecera[3]}, ${cabecera[4]}, ${cabecera[5]}, ${cabecera[6]}) VALUES 
    (?, ?, ?, ?, ?, ?, ?)`;
    //let query = 'INSERT INTO staff (staff_id,first_name,last_name,email,phone,active,store_id) VALUES (?, ?, ?, ?, ?, ?, ?)';    
    await pool.execute(query, empleado);
  }
  catch (error) {
    console.log("Ha sucedido al insertar un dato " + error);
  }
}
