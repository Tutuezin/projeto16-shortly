import connection from "../database/pgsql.js";

async function createUser(name, email, passwordHash) {
  return connection.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3);`,
    [name, email, passwordHash]
  );
}

async function searchUser(email) {
  return connection.query(`SELECT * FROM users WHERE email = $1;`, [email]);
}

export const authRepository = {
  createUser,
  searchUser,
};
