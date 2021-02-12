import {Request,Response} from 'express';
import { getRepository } from 'typeorm';
import Item from '../models/Item';
import ItemView from '../Views/ItemView';
import unlinkImage from '../services/unlinkImage';

export default {

    async postItem(req:Request,res:Response){
        const repo = getRepository(Item);
        const {
            name,
            desc,
            available,
            price,
            category,   
        } = req.body;
        var imageurl = "";
        try{
            imageurl = req.file.filename
        }
        catch(e){
            imageurl ="";
        }
        const item = new Item();
        item.name = name;
        item.desc = desc;
        item.available = available=="true";
        item.category = category;
        item.imageurl = imageurl;
        item.price = price;
        repo.save(item);
        return res.json(item);
        
    },

    async updateItem(req:Request,res:Response){
        return res.json({teste:"teste GET"})
    },

    async getItem(req:Request,res:Response){
        const itemRepo = getRepository(Item);
        const {id} = req.params;
        try{
            const item = await itemRepo.findOneOrFail(id)
            console.log(item);
            return res.status(200).json(ItemView.render(item));
        }
        catch(e){
            console.log("erro "+e);
            return res.status(404).json();
        }
    },

    async getAllItem(req:Request,res:Response){
        const itemRepo = getRepository(Item);
        try{
            const items = await itemRepo.find();
            return res.status(200).json(ItemView.renderMany(items));
        }
        catch(e){
            console.log("erro "+e);
            return res.status(404).json();
        }
    },

    async deleteItem(req:Request,res:Response){
        const {id} = req.params;
        const repoItem = getRepository(Item);
        try{
            const item = await repoItem.findOneOrFail(id)
            //excluir imagem
            const imageurl = item.imageurl;
            unlinkImage.deleteImage(imageurl);
            await repoItem.delete(id)
            //excluir imagem
            return res.status(200).json();
        }
        catch(e){
            return res.status(404).json();
        }
    }
}

