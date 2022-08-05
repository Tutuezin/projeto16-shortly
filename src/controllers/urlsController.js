import connection from "../database/pgsql.js";

export async function createShortenUrl(req, res) {
  const { user } = res.locals;
  try {
    res.status(201).send("foi");
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
