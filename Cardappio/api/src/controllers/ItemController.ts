import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Item from '../models/Item';
import ItemView from '../Views/ItemView';
import unlinkImage from '../services/unlinkImage';
import path from 'path'
const destination = path.join(__dirname, '..', '..', 'public', 'uploads');
export default {

    async postItem(req: Request, res: Response) {
        try {

            const repo = getRepository(Item);
            const {
                name,
                desc,
                available,
                price,
                category,
            } = req.body;

            var imageurl = "";
            try {
                imageurl = await req.file.filename
            }
            catch (e) {
                imageurl = "";
            }
            const item = new Item();
            item.item_name = name;
            item.item_desc = desc;
            item.item_available = available == "true";
            item.category_id = category;
            item.item_imageurl = imageurl;
            item.item_price = price;
            await repo.save(item);
            return res.status(201).json(item);

        } catch (e) {
            await unlinkImage.deleteImage(`${destination}/${req.file.filename}`);
            return res.status(500).json({ "deu": "ruim " + e });

        }


    },

    async updateItem(req: Request, res: Response) {
        try {
            const repo = getRepository(Item);
            const { id } = req.params;
            await repo.findOneOrFail(id);
            const {
                name,
                desc,
                available,
                price,
                category,
            } = req.body;
            console.log(available);
            const item = new Item();
            item.item_name = name;
            item.item_desc = desc;
            item.item_available = available == "true";
            item.category_id = category;
            item.item_price = price;
            await repo.update(id, item);
            return res.status(201).json(item);

        } catch (e) {
            return res.status(500).json({ "ERROR": e.message});

        }
    },
    async updateItemImage(req: Request, res: Response) {
        const repo = getRepository(Item);
        const { id } = req.params;
        var imageurl = "";
        try {
            imageurl = await req.file.filename
        }
        catch (e) {
            imageurl = "";
        }
        try {
            const item = await repo.findOneOrFail(id);
            if (item.item_imageurl !== "") { await unlinkImage.deleteImage(`${destination}/${item.item_imageurl}`); }

            item.item_imageurl = imageurl;

            await repo.update(id, item);

            return await res.status(200).json(item)
        }
        catch (e) {
            await unlinkImage.deleteImage(`${destination}/${req.file.filename}`);
            return res.status(500).json({ "ERROR": e.message});
        }
    },

    async getItem(req: Request, res: Response) {
        const itemRepo = getRepository(Item);
        const { id } = req.params;
        try {
            const item = await itemRepo.findOneOrFail(id)
            console.log(item);
            return res.status(200).json({content:{item:ItemView.render(item)}});
        }
        catch (e) {
            console.log("erro " + e);
            return res.status(404).json();
        }
    },

    async getAllItem(req: Request, res: Response) {
        const itemRepo = getRepository(Item);
        try {
            const items = await itemRepo.find();
            return res.status(200).json(ItemView.renderMany(items));
        }
        catch (e) {
            console.log("erro " + e);
            return res.status(404).json();
        }
    },

    async deleteItem(req: Request, res: Response) {
        const { id } = req.params;
        const repoItem = getRepository(Item);
        try {
            const item = await repoItem.findOneOrFail(id)
            //excluir imagem
            console.log(item.item_imageurl)
            try {
                await unlinkImage.deleteImage(`${destination}/${item.item_imageurl}`);
            }catch(e){console.log(item.item_imageurl+" already deleted")}
            await repoItem.delete(id)

            return res.status(200).json({"message":"deleted item with id "+id});
        }
        catch (e) {
            return res.status(404).json({ deu: "ruim " + " JA FOI EXCLUIDO MANO" });
        }
    }
}

