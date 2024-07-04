
import path from "node:path";
import fs from "node:fs/promises";
import { pool } from "./bd.js";

export const index = async (request, response) => {
  try {
    const data = await fs.readFile("index.html");
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write(data);
    response.end();
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosGetAll = async (request, response) => {
  try {
    let query = "SELECT * FROM staff";    
    const [rs] = await pool.execute(query);

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(JSON.stringify(rs));
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}