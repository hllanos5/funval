import path from "node:path"
import fs from "node:fs/promises"
import { usuarioGetAll, usuarioInsert } from "./repository.js"
import { grabarArchivo, leerArchivo } from "./utility.js"

export const indexService = async (request, response) => {
  try {
    const data = await fs.readFile("index.html")
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" })
    response.write(data)
    response.end()
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message)
  }
}

export const usuarioGetAllService = async (request, response) => {
  try {
    const aUsuario = await usuarioGetAll();

    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end(JSON.stringify(aUsuario))
  }
  catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message)
  }
}

export const usuarioExportCsvService = async (request, response) => {
  try {
    const aUsuario = await usuarioGetAll()
    let nomArchivo = "usuarios.csv"
    let texto = "id,nombres,apellidos,direccion,correo_electronico,dni,edad,telefono,fecha_creacion\n"

    aUsuario.forEach(function (usuario) {
      Object.entries(usuario).forEach(([key, value]) => {
        texto += value + ","
      })
      texto = texto.substring(0, texto.length - 1) + "\n"
    })

    grabarArchivo(nomArchivo, texto)

    response.writeHead(200, { "Content-Type": "text/plain" })
    response.end("Se ha grabado el archivo")
  } catch (error) {
    console.log("Ha sucedido un error al leer el archivo index" + error.message)
  }
}

export const usuarioImportCsvService = async (request, response) => {
  try {
    let nomArchivo  = "import.csv"
    let regexCorreo = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

    const aUsuario  = await usuarioGetAll()
    const dato      = await leerArchivo(nomArchivo)

    const filas     = dato.split('\n');
    const cabecera  = filas[0].split(',');
    filas.shift();

    const cuerpo        = filas;
    let numFila         = 1;
    let desMensajeError = "";
    let flagError       = false;

    cuerpo.forEach(function (fila) {
      flagError = false;
      let dato = fila.split(',')

      aUsuario.forEach(function (usuario) {
        //Validacion por id
        if (parseInt(dato[0]) === usuario.id ) {
          flagError = true;
          desMensajeError += " Dato repetido [Id] --> Fila[" + (numFila + 1) + "]\n"          
        }
        //Validacion por correo electronico
        if (dato[4] === usuario.correo) {
          flagError = true;
          desMensajeError += " Dato repetido [Correo Electronico] --> Fila[" + (numFila + 1) + "]\n"         
        }
        //Validacion por dni
        if (dato[5] === usuario.dni) {
          flagError = true;
          desMensajeError += " Dato repetido [Correo Electronico] --> Fila[" + (numFila + 1) + "]\n"         
        }
        //Para que pase a la siguiente linea para la validacion
        if(flagError === true) {          
          return
        }
      })

      //Validacion por datos no vacios
      //validacion por correo electronico
      if (dato[4] === '') {
        flagError = true;
        desMensajeError += " Dato Vacio [Correo Electronico] --> Fila[" + (numFila + 1) + "]\n"         
      }
      if (dato[5] === '') {
        flagError = true;
        desMensajeError += " Dato Vacio [Dni] --> Fila[" + (numFila + 1) + "]\n"         
      }

      if (flagError === false) {
        //Validacion por correo electronico
        if (!regexCorreo.test(dato[4])) {
            desMensajeError += "Formato de correo incorrecto --> fila [" + (numFila + 1)+ "]"
        }
        else{
          //Inserta si ha pasado todas las validaciones
          dato.pop();
          usuarioInsert(cabecera, dato)
        }
      }
      numFila++;
    });

    if (desMensajeError.length > 0) {
      response.writeHead(200, { "Content-Type": "text/plain" })
      response.end(JSON.stringify({ message: desMensajeError }))
    }
    else {
      response.writeHead(200, { "Content-Type": "text/plain" })
      response.end(JSON.stringify({ message: "Importacion de exito" }))
    }

    
  } catch (error) {
    console.log("Ha sucedido un error al importar el archivo " + error.message);
  }
}