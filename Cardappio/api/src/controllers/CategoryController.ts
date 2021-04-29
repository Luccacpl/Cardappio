import { Request, Response } from 'express';
import path from 'path';
import { getRepository } from 'typeorm';
import Category from '../models/Category';
import Restaurant from '../models/Restaurant';
import Table from '../models/Table';
import restaurantService from '../services/RestaurantService';
import unlinkImage from '../services/unlinkImage';
import categoryView from '../Views/CategoryView'

export default {

    async postCategory(req: any, res: Response) {
        console.log(req.user);
        const { name } = req.body;
        const categoryRepository = getRepository(Category);

        try {        
            const restaurant_id = await restaurantService.getRestaurantIdFromUser(req.user.id);
            const category = new Category();
            category.category_name = name;
            category.restaurant_id = restaurant_id;
            categoryRepository.save(category);
            return res.status(201).json(category);
        }
        catch (e) {
            return res.status(400).json({ "error": "YOU CANNOT DO THIS " + e })
        }


    },

    async updateCategory(req: any, res: Response) {
        console.log(req.user);//usuario logado


        const { id } = req.params;
        const { name } = req.body;
        const categoryRepository = getRepository(Category);
        try {
            await categoryRepository.findOneOrFail(id)
            const category = new Category();
            category.category_name = name;
            await categoryRepository.update(id, category);
            return res.status(200).json(category)
        }
        catch (e) {
            return res.status(404).json();
        }

    },

    async getCategory(req: any, res: Response) {
        console.log(req.user);//usuario logado


        const { id } = req.params;
        const categoryRepository = getRepository(Category);
        try {
            const category = await categoryRepository.findOneOrFail(id, { relations: ['items'] })
            console.log(category);
            return res.status(200).json({content:{category:categoryView.render(category)}});
        }
        catch (e) {
            console.log("erro " + e);
            return res.status(404).json();
        }


    },

    async getAllCategory(req: any, res: Response) {
        const categoryRepository = getRepository(Category);


        try {
            const restaurant_id = await restaurantService.getRestaurantIdFromUser(req.user.id);
            const list = await categoryRepository.find({relations: ['items'],where:{restaurant_id:restaurant_id}})
            return res.json({content:{categories:categoryView.renderMany(list)}});
        } catch (e) {

        }


       
        
    },

    async deleteCategory(req: any, res: Response) {
        console.log(req.user);//usuario logado


        const { id } = req.params;
        const categoryRepository = getRepository(Category);
        try {
            const category = await categoryRepository.findOneOrFail(id, { relations: ['items'] })


            const destination = path.join(__dirname, '..', '..', 'public', 'uploads')
            console.log(destination);



            if (category.items.length > 0) {
                category.items.forEach(async item => {
                    try { await unlinkImage.deleteImage(`${destination}/${item.item_imageurl}`); }
                    catch (e) { console.log('image already deleter or changed') }
                });
            }
            await categoryRepository.delete(id)
            return res.status(200).json();
        }
        catch (e) {
            return res.status(404).json();
        }
    }
}

