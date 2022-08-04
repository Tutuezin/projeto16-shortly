import bcrypt from "bcrypt";
import connection from "../database/pgsql.js";

export async function signUp(req, res) {
  const user = req.body;

  try {
    res.status(200).send(user);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
