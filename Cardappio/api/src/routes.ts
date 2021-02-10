import {Router} from 'express';
import ItemController from './controllers/ItemController';
import CategoryControler from './controllers/CategoryController';

const routes = Router();

routes.get('/item',ItemController.getAllItem);
routes.get('/item/:id',ItemController.getItem);
routes.post('/item',ItemController.postItem);
routes.put('/item',ItemController.updateItem);
routes.delete('/item/:id',ItemController.updateItem);

routes.get('/category',CategoryControler.getAllCategory);
routes.get('/category/:id',CategoryControler.getCategory);
routes.post('/category',CategoryControler.postCategory);
routes.put('/category/:id',CategoryControler.updateCategory);
routes.delete('/category/:id',CategoryControler.deleteCategory);

export default routes;

