import bcrypt from "bcrypt";
import connection from "../database/pgsql.js";

export async function signUp(req, res) {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
