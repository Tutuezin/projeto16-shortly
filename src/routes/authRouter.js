import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import {
  validateSignInSchema,
  validateSignUpSchema,
} from "../middlewares/validations/validateAuthSchema.js";

const authRouter = Router();

authRouter.post("/signup", validateSignUpSchema, signUp);
authRouter.post("/signin", validateSignInSchema, signIn);

export default authRouter;
