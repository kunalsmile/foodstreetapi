import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'foodstreet',
  password: 'Kush@030217',
  port: 5432,
});


export const getCustomers = (req, res) => {
  Customer.find({}, (err, customer) => {
    if(err) {
      res.send(err);
    }
    res.json(customer);
  });
};

export const addNewCustomer = (req, res) => {
  let userName = req.body.userName;
  let password = req.body.password;
  let email = req.body.email;
  let mobile = req.body.mobile;

  const query = 'select * from addUser($1, $2, $3, $4)';
  const values = [userName, password, email, mobile];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

export const loginUser = (req, res) => {
  let userName = req.query.userName;
  let password = req.query.pwd;

  const query = 'select * from public.user where user_name =$1 and password = $2';
  const values = [userName, password];
  pool.query(query, values, (err, results) => {
    if(err) {
      throw err;
    }
    console.log(results.rows[0]);
    res.status(200).json(results.rows[0]);
  });
};

export const getCustomerAddress = (req, res) => {
  let userKey = req.query.userKey;
  const query = 'select * from address where customer_key = $1';
  const values = [userKey];
  try {
    pool.query(query, values, (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).json(results.rows);
    });
  } catch (error) {
    
  }
};
