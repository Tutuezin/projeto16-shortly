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

async function redirectShortUrl(shortUrl) {
  return connection.query(`SELECT url FROM links WHERE "shortUrl" = $1`, [
    shortUrl,
  ]);
}

async function visitCount(shortUrl) {
  return connection.query(
    `UPDATE links SET "visitCount" = "visitCount" + 1 WHERE "shortUrl" = $1 `,
    [shortUrl]
  );
}

async function searchShortUrl(id) {
  return connection.query(`SELECT * FROM links WHERE id = $1`, [id]);
}

async function deleteShortUrl(id) {
  connection.query(`DELETE FROM links WHERE id = $1`, [id]);
  return;
}

export const urlRepository = {
  createShorten,
  searchUrlById,
  redirectShortUrl,
  visitCount,
  searchShortUrl,
  deleteShortUrl,
};
