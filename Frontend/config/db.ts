// import mysql from 'mysql2/promise';
import mysql from 'mysql';
import { promisify } from 'util';

export default async function query(sql: string) {
  const HOST = process.env.DB_HOST;
  const USER = process.env.DB_USER;
  const PASS = process.env.DB_PASSWORD;
  const DB = process.env.DATABASE;
  const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASS,
    database: DB,
    connectTimeout: 60000,
  });

  const query = promisify(connection.query).bind(connection);
  const result = await query(sql);
  // console.log("Results");
  // console.log(result);
  connection.end();
  return result;

  // return connection.query(sql);
}