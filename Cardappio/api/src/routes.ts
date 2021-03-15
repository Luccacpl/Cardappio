import {Router} from 'express';
import ItemController from './controllers/ItemController';
import CategoryControler from './controllers/CategoryController';
import AuthControler from './controllers/AuthController';
import multer from 'multer'
import uploadConfig from './config/upload';
import RegisterController from './controllers/RegisterController'

const upload = multer(uploadConfig)

const routes = Router();

routes.post('/login',AuthControler.authenticate);

routes.get('/item',ItemController.getAllItem);
routes.get('/item/:id',ItemController.getItem);
routes.post('/item',upload.single('imageurl'),ItemController.postItem);
routes.put('/item/:id',ItemController.updateItem);
routes.delete('/item/:id',ItemController.deleteItem);

routes.put('/image/:id',upload.single('imageurl'),ItemController.updateItemImage);

routes.get('/category',AuthControler.authentificationToken,CategoryControler.getAllCategory);
routes.get('/category/:id',AuthControler.authentificationToken,CategoryControler.getCategory);
routes.post('/category',AuthControler.authentificationToken,CategoryControler.postCategory);
routes.put('/category/:id',AuthControler.authentificationToken,CategoryControler.updateCategory);
routes.delete('/category/:id',AuthControler.authentificationToken,CategoryControler.deleteCategory);

routes.post('/register',RegisterController.Register);

export default routes;

