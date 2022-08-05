import bcrypt from "bcrypt";
import connection from "../database/pgsql.js";

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hashSync(password, salt);

    await connection.query(
      `
    INSERT INTO users (name, email, password) VALUES ($1, $2, $3)
    `,
      [name, email, passwordHash]
    );

    res.status(201).send("User created!");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
