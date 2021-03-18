import express from 'express';
import cors from 'cors';
import path from 'path'
import routes from './routes';
import './database/Connection'



const app = express();
app.use(express.json());
app.use(cors());
app.use(routes);

app.use('/public/uploads',express.static(path.join(__dirname,'..','public','uploads')));

console.log("App ready to use");
app.listen(3333);