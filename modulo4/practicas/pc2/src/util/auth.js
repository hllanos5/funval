import jwt from 'jsonwebtoken';
import { config } from "dotenv";

const secretKey = process.env.CLAVE_JWT;

export const generateToken = payload => {
  return jwt.sign(payload, secretKey, { expiresIn: '1h' });
};

export const verifyToken = token => {
  return jwt.verify(token, secretKey);
};
