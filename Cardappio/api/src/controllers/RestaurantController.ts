import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Restaurant from '../models/Restaurant';

export default {

    async getFunction(req: Request, res: Response) {

    },

    async updateFunction(req: Request, res: Response) {

    },
    async deleteFunction(req: Request, res: Response) {

    },
    async postFunction(req: any, res: Response) {
        const repo = getRepository(Restaurant)
        console.log(req.user)
        const { name, logo } = req.body;
        const data = {
            restaurant_name:name,
            restaurant_logo:logo,
            user_id:req.user.id,    
        }
        console.log(data)

        try{
            return res.status(201).json(repo.save(data))
        }
        catch(e){
            return res.status(500).json({message:e.message})
        }
       
    }



}

