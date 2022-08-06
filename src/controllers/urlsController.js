import connection from "../database/pgsql.js";
import { nanoid } from "nanoid";
import { urlRepository } from "../repository/urlRepository.js";

export async function createShortenUrl(req, res) {
  const { user } = res.locals;
  const { url } = req.body;

  const shortUrl = nanoid();

  try {
    const shortenUrl = await urlRepository.createShorten(
      shortUrl,
      url,
      user.id
    );
    res.status(201).send({ shortUrl });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function getUrl(req, res) {
  const { id } = req.params;
  console.log(id);
  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
