import {Request,Response} from 'express';
import path from 'path';
import { getRepository } from 'typeorm';
import Category from '../models/Category';
import unlinkImage from '../services/unlinkImage';
import categoryView from '../Views/CategoryView'

export default {

    async postCategory(req:any,res:Response){
        console.log(req.user);//usuario logado


        const {name} = req.body;
        const categoryRepository = getRepository(Category);
        const category = new Category();
        category.name = name;
        try{
            categoryRepository.save(category);
            return res.status(201).json(category);
        }
        catch(e){
            return res.status(400).json({"error":"YOU CANNOT DO THIS "+e})
        }
        
        
    },

    async updateCategory(req:any,res:Response){
        console.log(req.user);//usuario logado


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

    async getCategory(req:any,res:Response){
        console.log(req.user);//usuario logado


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

    async getAllCategory(req:any,res:Response){
        console.log(req.user);//usuario logado


        const categoryRepository = getRepository(Category);
        const list = await categoryRepository.find({relations: ['items']})
        return res.json(categoryView.renderMany(list));
    },

    async deleteCategory(req:any,res:Response){
        console.log(req.user);//usuario logado


        const {id} = req.params;
        const categoryRepository = getRepository(Category);
        try{
            const category = await categoryRepository.findOneOrFail(id,{relations:['items']})


            const destination = path.join(__dirname,'..','..','public','uploads')
            console.log(destination);
            


            if(category.items.length>0){
                category.items.forEach(async item => {
                    try{ await unlinkImage.deleteImage(`${destination}/${item.imageurl}`); }
                    catch(e){console.log('image already deleter or changed')}
                });
            }
            await categoryRepository.delete(id)
            return res.status(200).json();
        }
        catch(e){
            return res.status(404).json();
        }
    }
}

