import connection from "../../database/pgsql.js";
import { signUpSchema, signInSchema } from "../../schemas/authSchema.js";
import { authRepository } from "../../repository/authRepository.js";

import bcrypt from "bcrypt";

async function validateSignUpSchema(req, res, next) {
  const { email } = req.body;

  //JOI
  const { error } = signUpSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const messageError = error.details.map((item) => item.message);
    return res.status(422).send(messageError);
  }

  //VALIDATIONS
  const { rows: userExists } = await authRepository.searchUser(email);

  if (userExists.length !== 0) {
    return res.sendStatus(409);
  }

  next();
}

async function validateSignInSchema(req, res, next) {
  const { email, password } = req.body;

  //JOI
  const { error } = signInSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const messageError = error.details.map((item) => item.message);
    return res.status(422).send(messageError);
  }

  //VALIDATIONS
  const { rows: userExists } = await authRepository.searchUser(email);

  if (
    userExists.length === 0 ||
    !bcrypt.compareSync(password, userExists[0].password)
  ) {
    return res.status(401).send("Incorrect email or passwords!");
  }

  res.locals.user = userExists[0];

  next();
}

export { validateSignUpSchema, validateSignInSchema };
