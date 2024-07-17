import { Router } from "express";
import { roleRoutes } from "./RoleRoutes.js";
import { userRoutes } from "./UserRoutes.js";

const API_router = Router();

export const router = (app) => {
    app.use('/api/v1', API_router);

    API_router.use('/role', roleRoutes)
    API_router.use('/user', userRoutes)
}