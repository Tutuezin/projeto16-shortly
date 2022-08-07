import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { authRepository } from "../repository/authRepository.js";

dotenv.config();

export async function signUp(req, res) {
  const { name, email, password } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    const passwordHash = bcrypt.hashSync(password, salt);

    await authRepository.createUser(name, email, passwordHash);

    res.status(201).send("User created!");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const { user } = res.locals;
  try {
    const token = jwt.sign(user, process.env.SECRET_KEY, { expiresIn: "7d" });

    res.status(200).send({ name: user.name, token });
  } catch (error) {
    console.error(error);
    res.status(500).send("caiu aqui");
  }
}
