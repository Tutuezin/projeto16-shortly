import { Router } from "express";
import {
  createShortenUrl,
  getUrl,
  openShortUrl,
} from "../controllers/urlsController.js";
import { validateToken } from "../middlewares/validations/validadeToken.js";
import { validateUrlSchema } from "../middlewares/validations/validateUrlSchema.js";

const urlsRouter = Router();

urlsRouter.post(
  "/urls/shorten",
  validateToken,
  validateUrlSchema,
  createShortenUrl
);
urlsRouter.get("/urls/:id", getUrl);
urlsRouter.get("/urls/open/:shortUrl", openShortUrl);

export default urlsRouter;
