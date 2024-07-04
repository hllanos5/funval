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