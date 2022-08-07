import { Router } from "express";
import authRouter from "./authRouter.js";
import urlsRouter from "./urlsRouter.js";
import userRouter from "./userRouter.js";

const router = Router();

router.use(authRouter);
router.use(urlsRouter);
router.use(userRouter);

export default router;
