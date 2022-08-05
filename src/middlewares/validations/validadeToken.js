import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function validateToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!authorization) {
    return res.status(401).send("no header");
  }
  try {
    const verifiedUser = jwt.verify(token, process.env.SECRET_KEY);

    res.locals.user = verifiedUser;
  } catch (error) {
    return res.status(401).send("invalid token");
  }

  next();
}
