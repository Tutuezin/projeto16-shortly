import { urlSchema } from "../../schemas/urlSchema.js";

export async function validateUrlSchema(req, res, next) {
  const { url } = req.body;

  //JOI
  const { error } = urlSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    const messageError = error.details.map((item) => item.message);
    return res.status(422).send(messageError);
  }
  next();
}
