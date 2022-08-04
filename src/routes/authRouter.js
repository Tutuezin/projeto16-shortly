import { Router } from "express";
import { signUp } from "../controllers/authController.js";
import { validateSignUpSchema } from "../middlewares/validations/validateAuthSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema, signUp);

export default authRouter;
