import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodstreet',
  password: 'Kush@030217',
  port: 5432,
});

export const getItems = (req, res) => {
  pool.query('select * from getAllItems()', (error, results) => {
    if(error) {
      throw error;
    }
    res.status(200).json(results.rows);
  })
}

export const getCategories = (req, res) => {
  pool.query('select * from category', (error, result) => {
    if(error) {
      throw error;
    }
    res.status(200).json(result.rows);
  })
}

export const getItemsByCategoryId = (req, res) => {
  let categoryId = req.query.categoryId;
  
  const query = 'select * from item where category_key = $1';
  const values = [categoryId];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
 }