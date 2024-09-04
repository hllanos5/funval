import { generateToken, verifyToken } from '../util/auth.js'

class UserController {
  
  static login (req, res) {
    try {
      const { username, password } = req.body
      const token = generateToken({ username,password })
      res.json({ token })

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static verify (req, res) {
    try {
      const token = req.headers.authorization;

      if (!token) {
        return res.status(401).json({ error: 'Token invalido' });
      }

      const decoded = verifyToken(token)
      const hoy = new Date()
      const hoyUnitTImeStamp = Math.floor(hoy.getTime()/1000)
      
      if( hoyUnitTImeStamp < decoded.exp){
        res.status(200).json({ message: `Bienvenido, ${decoded.username}!` });  
      }
      else {
        res.status(401).json({error: 'Token Invalido'})
      }

    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

}

export default UserController