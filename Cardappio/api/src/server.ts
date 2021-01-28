import express from 'express';
import routes from './routes';
import "reflect-metadata";
import { getRepository } from 'typeorm'
import User from './entity/User'

const app = express();
app.use(express.json());
app.use(routes);

async function save() {
    const repository = getRepository(User);

    const user = new User();
    user.firstName = "Timber";
    user.lastName = "Saw";
    user.age = 25;
    await repository.save(user);
    console.log("entrou aqui");
}
save();


console.log("App ready to use");
app.listen(3333);