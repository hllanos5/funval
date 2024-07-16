import { Router } from "express";
import { userRoutes } from "./UserRoutes.js";

const API_router = Router();

export const router = (app) => {
    app.use('/api/v1', API_router);

    //Importa el Rourtes de Users
    API_router.use('/users', userRoutes);

}