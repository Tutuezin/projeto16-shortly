import { Router } from "express";
import { getUserUrls } from "../controllers/userController.js";
import { validateToken } from "../middlewares/validations/validadeToken.js";

const userRouter = Router();

userRouter.get("/users/me", validateToken, getUserUrls);

export default userRouter;
