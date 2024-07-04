
import path from "node:path";
import fs from "node:fs/promises";
import { pool } from "./bd.js";

export const index = async (request, response) => { 
  try {
    const data = await fs.readFile("index.html");
    response.writeHead(200, {
      "Content-Type": "text/html; charset=utf-8",
    });
    response.write(data);
    response.end();
  } catch (error) {
    
  }
}