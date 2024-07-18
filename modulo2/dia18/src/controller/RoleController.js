import pool from '../bd/Pool.js'

const listarRol = async (req, res) => {
    //#swagger.tags = ['Roles']
    console.log(req.headers.user_id);

    const useSql = "select id_rol FROM usuarios WHERE id_usuario = ?";
    const [rs] =  await pool.execute(useSql, [req.headers.user_id])
    
    if(rs[0].id_rol === 2){
        try {
            const sql = "SELECT * FROM roles";
            const response = await pool.execute(sql);
            res.status(200).json(response);
        }
        catch (error) {
            res.json({ error: error.message });
        }
    }
    else{
        res.status(401).json({error: 'no tienes permisos'})
    }
}

const obtenerRol = (req, res) => {
    try {
        res.json({sucess: "obtenerRol"});
    }   
    catch (error){
        
        res.json({ error: error.message });
    }
}

export { listarRol, obtenerRol } 