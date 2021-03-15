import {Router} from 'express';
import ItemController from './controllers/ItemController';
import CategoryControler from './controllers/CategoryController';
import AuthControler from './controllers/AuthController';
import multer from 'multer'
import uploadConfig from './config/upload';
const upload = multer(uploadConfig)

const routes = Router();

routes.post('/login',AuthControler.authenticate);

routes.get('/item',ItemController.getAllItem);
routes.get('/item/:id',ItemController.getItem);
routes.post('/item',upload.single('imageurl'),ItemController.postItem);
routes.put('/item/:id',ItemController.updateItem);
routes.delete('/item/:id',ItemController.deleteItem);

routes.put('/image/:id',upload.single('imageurl'),ItemController.updateItemImage);

routes.get('/category',CategoryControler.getAllCategory);
routes.get('/category/:id',CategoryControler.getCategory);
routes.post('/category',CategoryControler.postCategory);
routes.put('/category/:id',CategoryControler.updateCategory);
routes.delete('/category/:id',CategoryControler.deleteCategory);

export default routes;

