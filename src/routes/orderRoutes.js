import { getOrders, addNewOrder, updateOrder, getOrderByCustomerId, removeOrder } from '../controllers/orderController';

const orderRoutes = (app) => {
  app.route('/order')
  .post((req, res, next) => {
    console.log(`Request from: ${req.body.name}`);
    console.log(`Request from: ${req.method}`);
    next();    
  }, addNewOrder);

  app.route('/cart')
  .get(getOrderByCustomerId)
  .post((req, res, next) => {
    next();
  }, removeOrder);

  app.route('/updatecart')
  .post((req, res, next) => {
    next();
  }, updateOrder)
};

export default orderRoutes;