import {Router} from 'express';
import ItemController from './controllers/ItemController';

const routes = Router();

routes.get('/item',ItemController.getAllItem);
routes.get('/item:id',ItemController.getItem);
routes.post('/item',ItemController.postItem);
routes.put('/item',ItemController.updateItem);
routes.delete('/item:id',ItemController.updateItem);

export default routes;

