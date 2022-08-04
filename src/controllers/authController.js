import bcrypt from "bcrypt";
import connection from "../database/pgsql.js";

export async function signUp(req, res) {
  try {
    console.log("teste");

    res.send("teste");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
