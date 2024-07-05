import path from "node:path";
import fs from "node:fs/promises";
import { empleadosGetAll, empleadosInsert } from "./repository.js";
import { grabarArchivo, leerArchivo } from "./utility.js";

export const indexService = async (request, response) => {
  try {
    const data = await fs.readFile("index.html");
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    response.write(data);
    response.end();
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosGetAllService = async (request, response) => {
  try {
    const aEmpleado = await empleadosGetAll();

    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end(JSON.stringify(aEmpleado))
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosExportTxtService = async (request, response) => {
  try {
    const aEmpleado = await empleadosGetAll()
    let nomArchivo = "archivo.txt"

    grabarArchivo(nomArchivo, JSON.stringify(aEmpleado))

    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Se ha grabado el archivo")
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message);
  }
}

export const empleadosImportCsvService = async (request, response) => {
  try {
    let nomArchivo = "import.csv"

    const aEmpleado = await empleadosGetAll()
    const dato = await leerArchivo(nomArchivo)
    
    const filas     = dato.split('\n');
    const cabecera  = filas[0].split(',');
    filas.shift();

    const cuerpo        = filas;
    let numFila         = 1;
    let desMensajeError = "";
    let flagError       = false;

    cuerpo.forEach(function (fila) {
      flagError = false;
      let dato  = fila.split(',')

      aEmpleado.forEach(function (empleado) {
        if (parseInt(dato[0]) === empleado.staff_id) {
          flagError        = true;
          desMensajeError += " Dato repetido --> Fila[" + numFila + "]";
          return;
        }
      })

      if(flagError === false){
        let dato = fila.split(',');
        empleadosInsert(cabecera, dato);
      }
      numFila++;
    });
    
    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end(JSON.stringify({message: "Importacion de exito"}))
  } catch (error) {
    console.log("Ha sucedido un error al importar el archivo " + error.message);
  }
}