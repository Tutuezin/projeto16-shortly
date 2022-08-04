import connection from "../../database/pgsql.js";
import { signUpSchema } from "../../schemas/authSchema.js";

async function validateSignUpSchema(req, res, next) {
  const { error } = signUpSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const messageError = error.details.map((item) => item.message);
    return res.status(422).send(messageError);
  }

  next();
}

export { validateSignUpSchema };
