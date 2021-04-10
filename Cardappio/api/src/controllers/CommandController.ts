import { Request, Response } from 'express'
import { getRepository } from 'typeorm';
import Command from '../models/Command';
import Table from '../models/Table';
import restaurantService from '../services/RestaurantService'
import jwt from 'jsonwebtoken'



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
    }
}