import connection from "../database/pgsql.js";

async function createShorten(shortUrl, url, id) {
  return connection.query(
    `INSERT INTO links ("shortUrl", url, "userId") VALUES ($1, $2, $3)`,
    [shortUrl, url, id]
  );
}

async function searchUrlById(id) {
  return connection.query(
    `SELECT id, "shortUrl", url FROM links WHERE id = $1`,
    [id]
  );
}

export const urlRepository = {
  createShorten,
  searchUrlById,
};
