import http from "node:http"
import {indexService, empleadosGetAllService, empleadosExportTxt} from "./controller.js"
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
      case "/empleados":
        //Mostrando todos los empleados
        empleadosGetAllService(request, response);
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
          empleadosExportTxt(request, response);
        break;
      case "/import":
        
        break;
      
       default:
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.end("Ruta no encontrada");
        break;
    }
  
 }
});

server.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));