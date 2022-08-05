import { Router } from "express";
import { createShortenUrl } from "../controllers/urlsController.js";
import { validateToken } from "../middlewares/validations/validadeToken.js";
import { validateUrlSchema } from "../middlewares/validations/validateUrlSchema.js";

const urlsRouter = Router();

urlsRouter.post(
  "/urls/shorten",
  validateToken,
  validateUrlSchema,
  createShortenUrl
);

export default urlsRouter;
