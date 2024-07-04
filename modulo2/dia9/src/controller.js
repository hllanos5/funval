import path from "node:path";
import fs from "node:fs/promises";
import { empleadosGetAll } from "./repository.js";

export const indexService = async (request, response) => {
  try {
    const data = await fs.readFile("index.html");
    response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
    response.write(data);
    response.end();
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosGetAllService = async (request, response) => {
  try {
    const aEmpleados = await empleadosGetAll();
    
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end(JSON.stringify(aEmpleados));
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}