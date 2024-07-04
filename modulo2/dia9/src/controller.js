import path from "node:path";
import fs from "node:fs/promises";
import { empleadosGetAll } from "./repository.js";
import { grabarArchivo } from "./utility.js";

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
    const aEmpleado = await empleadosGetAll();
    
    response.writeHead(200, {"Content-Type": "text/plain"})
    response.end(JSON.stringify(aEmpleado))
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosExportTxt = async (request, response) => {
  try {
    const aEmpleado   = await empleadosGetAll()
    let nomArchivo    = "archivo.txt"

    grabarArchivo(nomArchivo, JSON.stringify(aEmpleado))
    
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Se ha grabado el archivo")
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}