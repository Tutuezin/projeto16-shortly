import connection from "../database/pgsql.js";

async function getUrls(id) {
  return connection.query(
    `
   SELECT users.id, users.name, 
   SUM(links."visitCount") AS "visitCount",
   json_agg(json_build_object(
  'id', links.id,
  'shortUrl', links."shortUrl",
  'url', links.url, 
  'visitCount', links."visitCount")) AS "shortenedUrls"
   FROM users
   JOIN links
   ON users.id = links."userId"
   WHERE users.id = $1
   GROUP BY users.id;
    `,
    [id]
  );
}

export const userRepository = {
  getUrls,
};
