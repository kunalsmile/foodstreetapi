import { getCustomers, addNewCustomer, 
  getCustomerWithId, updateCustomer, loginUser, getCustomerAddress} from '../controllers/customerConttoller';

const customerRoutes = (app) => {
  app.route('/customer')
  .get((req, res, next) => {
    next();   
  }, getCustomers)

  .post((req, res, next) => {
    next();
  },  addNewCustomer);

  app.route('/login')
  .get(loginUser)

  app.route('/customeraddress')
  .get((req, res, next) => {
    next();
  }, getCustomerAddress);
  
};

export default customerRoutes;