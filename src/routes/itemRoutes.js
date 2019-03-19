import { addNewItem, getItems, 
  getItemWithId, updateItem, 
  getCategories, getItemsByCategoryId } from '../controllers/itemController';

const itemRoutes = (app) => {
  
  //Get all items
  app.route('/item')
  .get((req, res, next) => {
    next();    
  }, getItems);

  //Get all categories
  app.route('/category')
  .get((req, res, next) => {
    next();
  }, getCategories);

  //Get items by category
  app.route('/catitem')
  .get(getItemsByCategoryId);
  
};

export default itemRoutes;
