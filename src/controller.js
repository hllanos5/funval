import { pool } from './db.js';

export const usuarioList = async () =>{
    let query = "SELECT * FROM usuario";
    const [rs] =  await pool.execute(query);
    return rs;
}

//module.exports = {usuarioList, usuarioGet};
