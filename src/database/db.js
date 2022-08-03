import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: process.env.USER_DB,
  password: process.env.PASS_DB,
  database: "",
});

export default connection;
