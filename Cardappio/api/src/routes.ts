import {Router} from 'express';
import ItemController from './controllers/ItemController';
import CategoryControler from './controllers/CategoryController';
import multer from 'multer'
import uploadConfig from './config/upload';
const upload = multer(uploadConfig)

const routes = Router();

routes.get('/item',ItemController.getAllItem);
routes.get('/item/:id',ItemController.getItem);
routes.post('/item',upload.single('image'),ItemController.postItem);
routes.put('/item/:id',ItemController.updateItem);
routes.delete('/item/:id',ItemController.deleteItem);

routes.get('/category',CategoryControler.getAllCategory);
routes.get('/category/:id',CategoryControler.getCategory);
routes.post('/category',CategoryControler.postCategory);
routes.put('/category/:id',CategoryControler.updateCategory);
routes.delete('/category/:id',CategoryControler.deleteCategory);

export default routes;

