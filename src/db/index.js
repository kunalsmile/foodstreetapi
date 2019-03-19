import { Pool, Client } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodstreet',
  password: 'Kush@030217',
  port: 5432,
});


export const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'foodstreet',
  password: 'Kush@030217',
  port: 5432,
});
client.connect();

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
}

