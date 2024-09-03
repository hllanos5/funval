import jwt from 'jsonwebtoken';

const secretKey = 'tu_clave_secreta';

export const generateToken = payload => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = token => {
  return jwt.verify(token, secretKey);
};
