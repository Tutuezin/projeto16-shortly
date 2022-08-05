import connection from "../../database/pgsql.js";
import { signUpSchema } from "../../schemas/authSchema.js";

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
  const { rows: userExists } = await connection.query(
    `SELECT * FROM users WHERE email = $1`,
    [email]
  );

  if (userExists.length !== 0) {
    return res.sendStatus(409);
  }

  next();
}

export { validateSignUpSchema };
