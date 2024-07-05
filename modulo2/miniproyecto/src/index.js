import http from "node:http"
import { indexService, usuarioGetAllService, usuarioExportCsvService, usuarioImportCsvService } from "./controller.js"
import { PORT } from "./config.js"

/*Creando server*/
const server = http.createServer((request, response) => {
  const url = request.url
  const method = request.method

  if (method === "GET") {
    switch (url) {
      case "/":
        //Mostrando la pagina de inicio
        indexService(request, response)
        break;
      case "/api/usuarios":
        //Mostrando todos los empleados
        usuarioGetAllService(request, response)
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.end("Ruta no encontrada")
        break;
    }
  }
  if (method === "POST") {
    switch (url) {
      case "/api/usuarios/export":
        //Exportacion de usuario
        usuarioExportCsvService(request, response)
        break;
      case "/api/usuarios/import":
        //Importacion de usuario
        usuarioImportCsvService(request, response)
        break;

      default:
        response.writeHead(404, { "Content-Type": "text/plain" })
        response.end("Ruta no encontrada")
        break;
    }

  }
});

server.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`))