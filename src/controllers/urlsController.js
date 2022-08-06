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

  const { rows: searchUrl } = await urlRepository.searchUrlById(id);

  if (searchUrl.length === 0) {
    return res.sendStatus(404);
  }

  res.status(200).send(searchUrl);

  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
