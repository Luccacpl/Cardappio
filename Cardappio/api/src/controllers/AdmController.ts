import { Request, Response } from 'express'
import { getRepository, Not, IsNull } from 'typeorm';
import Command from '../models/Command';
import ItemCommand from '../models/ItemCommand';
import CalculateCommandPrice from '../services/CalculateCommandPrice';
import RestaurantService from '../services/RestaurantService';

export default {
    async getAllRestaurantActiveCommands(req: any, res: Response) {
        console.log(req.user)
        const repo = getRepository(Command);
        try {
            const commands = await repo.find({
                relations: ['itemsCommand', 'itemsCommand.item'], where: {
                    restaurant_id: await RestaurantService.getRestaurantIdFromUser(req.user.id),
                    command_checkout: IsNull()
                }
            })
            return res.json({content:commands});
        }
        catch (e) {
            return res.json({ erro: e.message })
        }
    },
    async getAllRestaurantInactiveCommands(req: any, res: Response) {
        const repo = getRepository(Command);
        try {
            const commands = await repo.find({
                relations: ['itemsCommand', 'itemsCommand.item'], where: {
                    restaurant_id: await RestaurantService.getRestaurantIdFromUser(req.user.id),
                    command_checkout: Not(IsNull())
                }
            })
            return res.json({content:commands});
        }
        catch (e) {
            return res.json({ erro: e.message })
        }
    },
    async getCommand(req: any, res: Response) {
        const repo = getRepository(Command);
        try {
            const commands = await repo.findOneOrFail(req.params.id, {
                relations: ['itemsCommand', 'itemsCommand.item']
            })
            const totalCOnfirmed = await Promise.resolve(CalculateCommandPrice.totalPriceFinalizado(commands));
            return res.json({
                content: {
                    command: commands,
                    totalPriceConfirmed: totalCOnfirmed
                }
            });
        }
        catch (e) {
            return res.json({ erro: e.message })
        }
    },
    async closeCommand(req: any, res: Response) {
        const { id } = req.params
        const repoCommand = getRepository(Command);
        const repoItemCommand = getRepository(ItemCommand);
        try {

            const itemsLeft = await repoItemCommand.count({
                where: [
                    {
                        command_id: id,
                        item_command_status: 1
                    },
                    {
                        command_id: id,
                        item_command_status: 2
                    }
                ]
            })
            console.log(itemsLeft)
            if (itemsLeft > 0) {
                return res.status(403).json({ error: 'ainda existem items confirmados ou em preparo, impossivel fechar commanda' })
            }
            const command = await repoCommand.findOneOrFail(id, {
                relations: ['itemsCommand', 'itemsCommand.item']
            });
            
            const valortotal = await Promise.resolve(CalculateCommandPrice.totalPriceFinalizado(command));
            const comandafechada = await repoCommand.update(id, { command_checkout: new Date(), command_total_price: valortotal })
            return res.status(200).json({ commanda: comandafechada, status: 'finalizada' })
        } catch (e) {
            return res.status(500).json({ error: e.message })
        }

    },
    async reopenCommand(req: any, res: Response) {
        const { id } = req.params
        const repoCommand = getRepository(Command);
        try {
            const comandafechada = await repoCommand.update(id, { command_checkout: null, command_total_price: 0 })
            return res.status(200).json({ commanda: comandafechada, status: 'reaberta' })
        } catch (e) {
            return res.status(500).json({ error: e.message })
        }

    }

}

