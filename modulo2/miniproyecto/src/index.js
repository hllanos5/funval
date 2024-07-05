import http from "node:http"
import { indexService, usuarioGetAllService, empleadosExportTxtService, empleadosImportCsvService } from "./controller.js"
import { PORT } from "./config.js"

/*Creando server*/
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;

  if (method === "GET") {
    switch (url) {
      case "/":
        //Mostrando la pagina de inicio
        indexService(request, response)
        break;
      case "/api/usuarios":
        //Mostrando todos los empleados
        usuarioGetAllService(request, response);
        break;
      default:
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Ruta no encontrada");
        break;
    }
  }
  if (method === "POST") {
    switch (url) {
      case "/export":
        empleadosExportTxtService(request, response);
        break;
      case "/import":
        empleadosImportCsvService(request, response);
        break;

      default:
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Ruta no encontrada");
        break;
    }

  }
});

server.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));