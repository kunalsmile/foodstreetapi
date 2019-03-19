import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodstreet',
  password: 'Kush@030217',
  port: 5432,
});

export const addNewOrder = (req, res) => {
  let itemKey = req.body.itemKey;
  let customerKey = req.body.customerKey;
  const query = 'select * from addOrder($1, $2)';
  const values = [itemKey, customerKey];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(results.rowCount);
  });
}

export const removeOrder = (req, res) => {
  let itemKey = req.body.itemKey;
  let orderKey = req.body.orderKey;
  const query = 'select * from removeOrder($1, $2)';
  const values = [itemKey, orderKey];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(results.rowCount);
  }); 
}

export const getOrderByCustomerId = (req, res) => {
  let customerKey = req.query.customerKey;
  const query = 'select * from public.getOrderByCustomer where customer_key = $1'
  
  const values = [customerKey];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
}

export const updateOrder = (req, res) => {
  let orderKey = req.body.orderKey;
  let orderStatus = req.body.status;
  const query = 'select * from updateOrderStatus($1, $2);';
  //console.log(values);

  pool.query(query, values, (err, results) => {
    if(err) {
      res.send(err);
    }
    res.status(200).json(results.rows);
  });
};

