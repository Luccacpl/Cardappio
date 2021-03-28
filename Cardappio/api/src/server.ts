import express from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';
import './database/Connection'
import swaggerUi from 'swagger-ui-express';
const swaggerFile = require('../swagger_output.json')


const app = express();

app.use(express.json());
app.use(cors());
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes);

app.use('/public/uploads',express.static(path.join(__dirname,'..','public','uploads')));

console.log("App ready to use");
app.listen(3000,()=>{
    console.log("Server is running!\nAPI documentation: http://localhost:3000/doc");
});