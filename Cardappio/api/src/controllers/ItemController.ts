import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import User from '../models/User';

export default {

    async postItem(req:Request,res:Response){

        console.log(req.body);
        const user = new User()
        user.firstName = "Timber";
        user.lastName = "Saw";
        user.age = 25;
        const repository = getRepository(User);
        await repository.save(user);
        console.log("entrou aqui");
        return res.json({teste:"teste GET"})
    },

    async updateItem(req:Request,res:Response){
        return res.json({teste:"teste GET"})
    },

    async getItem(req:Request,res:Response){
        return res.json({teste:"teste GET"})
    },

    async getAllItem(req:Request,res:Response){
        return res.json({teste:"teste GET"})
    },

    async deleteItem(req:Request,res:Response){
        
    }
}

