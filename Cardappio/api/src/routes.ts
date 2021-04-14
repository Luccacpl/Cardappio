import {Router} from 'express';
import ItemController from './controllers/ItemController';
import CategoryControler from './controllers/CategoryController';
import AuthControler from './controllers/AuthController';
import multer from 'multer'
import uploadConfig from './config/upload';
import RegisterController from './controllers/RegisterController'
import RestaurantController from './controllers/RestaurantController';
import TableController from './controllers/TableController';
import CustomerCommandController from './controllers/CustommerCommandController'
import KitchenController from './controllers/KitchenController'

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

routes.post('/restaurant',AuthControler.authentificationToken,RestaurantController.postFunction)
routes.put('/restaurant',AuthControler.authentificationToken,RestaurantController.updateFunction)
routes.get('/restaurant',AuthControler.authentificationToken,RestaurantController.getFunction)
routes.delete('/restaurant/:id',AuthControler.authentificationToken,RestaurantController.deleteFunction)

routes.get('/table',AuthControler.authentificationToken,TableController.getAllTable);
routes.post('/table',AuthControler.authentificationToken,TableController.postTable);
routes.put('/table/:id',AuthControler.authentificationToken,TableController.updateTable);
routes.delete('/table/:id',AuthControler.authentificationToken,TableController.deleteTable);

//Customer Routes
routes.post('/customercommand/:tableqrcode',CustomerCommandController.createCommand)
routes.get('/customercommand',AuthControler.authentificationCustomerToken,CustomerCommandController.getCommand)
routes.put('/customercommand/:item_id',AuthControler.authentificationCustomerToken,CustomerCommandController.addItemCommand)
routes.delete('/customercommand/:item_command_id',AuthControler.authentificationCustomerToken,CustomerCommandController.removeItemCommand)

routes.get('/customercardappio',AuthControler.authentificationCustomerToken,CustomerCommandController.getCardappio)
routes.get('/customercardappio',AuthControler.authentificationCustomerToken,CustomerCommandController.getCardappio)
routes.put('/customerconfirmcommand',AuthControler.authentificationCustomerToken,CustomerCommandController.confirmAllItems)
routes.post('/customercheckoutcommand',AuthControler.authentificationCustomerToken,CustomerCommandController.checkoutCommand)

//Kitchen Controller
routes.get('/kitchenorder',AuthControler.authentificationToken,KitchenController.getAllOrders)

export default routes;

