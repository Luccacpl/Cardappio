import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Category from '../models/Category';
import categoryView from '../Views/CategoryView'

export default {

    async postCategory(req:Request,res:Response){
        const {name} = req.body;
        const categoryRepository = getRepository(Category);
        const category = new Category();
        category.name = name;
       
        categoryRepository.save(category);
        return res.status(201).json(category);
    },

    async updateCategory(req:Request,res:Response){
        const {id} = req.params;
        const {name} = req.body;
        const categoryRepository = getRepository(Category);
        try{
            await categoryRepository.findOneOrFail(id)
            const category = new Category();
            category.name = name;
            await categoryRepository.update(id,category);
            return res.status(200).json(category)
        }
        catch(e){
            return res.status(404).json();
        }
       
    },

    async getCategory(req:Request,res:Response){
        const {id} = req.params;
        const categoryRepository = getRepository(Category);
        try{
            const category = await categoryRepository.findOneOrFail(id,{relations:['items']})
            console.log(category);
            return res.status(200).json(categoryView.render(category));
        }
        catch(e){
            console.log("erro "+e);
            return res.status(404).json();
        }
    
        
    },

    async getAllCategory(req:Request,res:Response){
        const categoryRepository = getRepository(Category);
        const list = await categoryRepository.find({relations: ['items']})
        return res.json(categoryView.renderMany(list));
    },

    async deleteCategory(req:Request,res:Response){
        const {id} = req.params;
        const categoryRepository = getRepository(Category);
        try{
            await categoryRepository.findOneOrFail(id)
            await categoryRepository.delete(id)
            return res.status(200).json();
        }
        catch(e){
            return res.status(404).json();
        }
    }
}

