import { Request, Response } from 'express'
import { getRepository, Not } from 'typeorm';
import Command from '../models/Command';
import Table from '../models/Table';
import restaurantService from '../services/RestaurantService'
import jwt from 'jsonwebtoken'
import ItemCommand from '../models/ItemCommand';
import Status from '../Enums/Status'
import Category from '../models/Category';
import categoryView from '../Views/CategoryView'



export default {
    async createCommand(req: any, res: Response) {
        const { tableqrcode } = req.params;
        const repoMesa = getRepository(Table)
        const repoCommand = getRepository(Command)
        try {
            const mesa = await repoMesa.findOneOrFail({
                where: {
                    table_qrcode: tableqrcode
                }
            })
            const command: Command = new Command();
            command.table_id = mesa.table_id;
            command.command_checkin = new Date();
            console.log("date is" + new Date())
            const thiscommand = await repoCommand.save(command)


            const env = {
                restaurant_id: await restaurantService.getRestaurantIdFromTable(thiscommand.table_id),
                command_id: thiscommand.command_id
            }

            const acessToken = jwt.sign(env, process.env.CUSTOMER_TOKEN_SECRET, { expiresIn: "1d" });
            return res.json({
                authorization: acessToken
            })
        }
        catch (e) {
            return res.status(404).json({ error: e.message })
        }
        //const {table_id} = repoMesa.findOneOrFail()
    },
    async getCommand(req: any, res: Response) {
        console.log(req.customer)
        console.log(req.customer.restaurant_id);
        console.log(req.customer.command_id);

        const repo = getRepository(Command);
        try {
            const customerCommand = await repo.findOneOrFail({
                relations: ['itemsCommand', 'itemsCommand.item'], where: {
                    command_id: req.customer.command_id
                }
            })
            return res.json(customerCommand);
        }
        catch (e) {
            return res.json({ erro: e.message })
        }


    },
    async addItemCommand(req: any, res: Response) {
        const { item_id } = req.params;
        const repo = getRepository(ItemCommand);
        try {
            const data = {
                command_id: req.customer.command_id,
                item_id: parseInt(item_id),
                item_command_status: Status.ADICIONADO
            }
            console.log(data)
            const item = await repo.save(data)

            return res.status(201).json(item);
        }
        catch (e) {
            console.log(e)
            return res.status(500).json({ errora: e.message })
        }

    },
    async removeItemCommand(req: any, res: Response) {
        const { item_command_id } = req.params;
        const repo = getRepository(ItemCommand);
        try {
            const item_command = await repo.findOneOrFail(item_command_id)

            if (item_command.item_command_status > 1) {
                return res.status(403).json({ error: "Items em preparo nao podem ser removidos" })
            }
            repo.delete(item_command);
            return res.json({ deleted: item_command })
        } catch (e) {
            return res.json({ error: 'item nao existe' })
        }
    },
    async getCardappio(req: any, res: Response) {
        const categoryRepository = getRepository(Category);
        try {
            const list = await categoryRepository.find({ relations: ['items'], where: { restaurant_id: req.customer.restaurant_id } })
            return res.status(200).json(categoryView.renderMany(list));
        } catch (e) {
            return res.status(500).json({ error: e.message })
        }
    },
    async confirmAllItems(req: any, res: Response) {
        console.log(req.customer)
        const repo = getRepository(ItemCommand);
        try {
            await repo.update({ command_id: req.customer.command_id, item_command_status: 0,item_time_confirmed:null }, { item_command_status: 1,item_time_confirmed: Date.now() })
            return res.status(200).json({ deu: 'bom' })
        }
        catch (e) {
            return res.status(500).json({ deu: e.message });
        }

    },
    async checkoutCommand(req: any, res: Response) {
        const repo = getRepository(ItemCommand);
        const repoCommand = getRepository(Command);
        try {
            const count = await repo.count({
                where: {
                    command_id: req.customer.command_id,
                    item_command_status: Not(0)
                }
            })
            if(count>0){
                return res.status(403).json({ erro: 'você ja confirmou o preparo de '+count+' items, checkout direto no caixa' }) 
            }
            await repoCommand.update({ command_id: req.customer.command_id }, { command_checkout: new Date })
            return res.status(200).json({ message: 'checkout SUCCESS' })
        }
        catch(e){
            return res.status(500).json({erro:e})
        }
    }
}