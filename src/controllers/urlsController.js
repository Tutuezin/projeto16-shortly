import connection from "../database/pgsql.js";
import { nanoid } from "nanoid";
import { urlRepository } from "../repository/urlRepository.js";

export async function createShortenUrl(req, res) {
  const { user } = res.locals;
  const { url } = req.body;

  const shortUrl = nanoid(8);

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

  res.status(200).send(searchUrl[0]);

  try {
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function openShortUrl(req, res) {
  const { shortUrl } = req.params;
  try {
    const { rows: searchShortUrl } = await urlRepository.redirectShortUrl(
      shortUrl
    );

    if (searchShortUrl.length === 0) {
      return res.sendStatus(404);
    }

    await urlRepository.visitCount(shortUrl);

    res.redirect(200, searchShortUrl[0].url);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}

export async function deleteShortUrl(req, res) {
  const { user } = res.locals;
  const { id } = req.params;
  try {
    const { rows: shortUrlExists } = await connection.query(
      `SELECT * FROM links WHERE id = $1`,
      [id]
    );

    if (shortUrlExists[0].userId !== user.id) {
      return res.sendStatus(401);
    }

    if (shortUrlExists.length === 0) {
      return res.sendStatus(404);
    }

    await connection.query(`DELETE FROM links WHERE id = $1`, [id]);

    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
}
