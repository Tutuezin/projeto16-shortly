import connection from "../database/pgsql.js";
import { nanoid } from "nanoid";

export async function createShortenUrl(req, res) {
  const { user } = res.locals;
  const { url } = req.body;

  const shortUrl = nanoid();
  console.log(user.id);

  try {
    const shortenUrl = await connection.query(
      `INSERT INTO links ("shortUrl", url, "userId") VALUES ($1, $2, $3)`,
      [shortUrl, url, user.id]
    );
    res.status(201).send({ shortUrl });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
