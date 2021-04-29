import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Restaurant from '../models/Restaurant';
import RestaurantService from '../services/RestaurantService';

export default {

    async getFunction(req: any, res: Response) {
        const repo = getRepository(Restaurant);
        console.log(req.user.id)

        try {
            const result = await repo.findOneOrFail({
                where: {
                    restaurant_id: await RestaurantService.getRestaurantIdFromUser(req.user.id)
                }
            })
            return res.json({content:{restaurant:result}})
        }
        catch (e) {
            return res.json({ deuErro: e.message })
        }
    },

    async updateFunction(req: Request, res: Response) {

    },
    async deleteFunction(req: Request, res: Response) {
        const { id } = req.params;
        const repoRestaurant = getRepository(Restaurant);
        try {
            const restaurant = await repoRestaurant.findOneOrFail(id)
            await repoRestaurant.delete(id)

            return res.status(200).json({ "message": "deleted restaurant with id " + id });
        }
        catch (e) {
            return res.status(404).json({ deu: "ruim " + " JA FOI EXCLUIDO MANO" });
        }
    },
    async postFunction(req: any, res: Response) {
        const repo = getRepository(Restaurant)
        console.log(req.user)
        const { name, logo } = req.body;
        const data = {
            restaurant_name: name,
            restaurant_logo: logo,
            user_id: req.user.id,
        }
        console.log(data)

        try {
            if (await RestaurantService.getRestaurantCountFromUser(req.user.id) != 0) {
                return res.json({ "error": "Your already have a Restaurant Registered" })
            }
            const result = await repo.save(data)
            return res.status(201).json(result)
        }
        catch (e) {
            return res.status(500).json({ message: e.message })
        }

    }



}

