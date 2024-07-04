import http from "node:http";
import {index} from "./controller.js";
import { PORT } from "./config.js";
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  
  if (method === "GET") {
    switch (url) {
      case "/":
        index(request, response)
       

        break;
      case "/empleados":
       
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