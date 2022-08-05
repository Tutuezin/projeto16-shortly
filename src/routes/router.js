import { Router } from "express";
import authRouter from "./authRouter.js";
import urlsRouter from "./urlsRouter.js";

const router = Router();

router.use(authRouter);
router.use(urlsRouter);

export default router;
