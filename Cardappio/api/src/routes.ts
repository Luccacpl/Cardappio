import {Router} from 'express';
import ItemController from './controllers/ItemController';

const routes = Router();

routes.get('/',ItemController.funcaoTesteGet);
routes.post('/',ItemController.funcaoTestePost);

export default routes;

