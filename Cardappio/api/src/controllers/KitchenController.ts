import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import ItemCommand from '../models/ItemCommand'
import RestaurantService from '../services/RestaurantService'

export default {
    async getAllOrders(req: any, res: Response) {
        const repo = getRepository(ItemCommand)
        console.log(req.user)
        try {
            const items = await repo.query(
                'select ic.item_command_id,'+
                ' (select item_name from tb_items where item_id = ic.item_id),'+
                ' (select item_desc from tb_items where item_id = ic.item_id),'+
                ' ic.item_command_status, tt.table_number'+
                ' from tb_item_commands ic'+
                ' join tb_commands c on ic.command_id = c.command_id'+
                ' join tb_tables tt on c.table_id = tt.table_id'+
                ' join tb_restaurants tr on tt.restaurant_id = tr.restaurant_id'+
                ' where tr.restaurant_id = ' + await RestaurantService.getRestaurantIdFromUser(req.user.id) +
                ' and ic.item_command_status = 1 or ic.item_command_status = 2'+
                ' order by item_time_confirmed asc'
            );
            return res.status(200).json({ content:{orders:items} });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    },
    async updateOrders(req: any, res: Response) {
        const {id} = req.params
        const { status } = req.body;
        const repo = getRepository(ItemCommand);
        try {
            return res.status(200).json(repo.update(id, { item_command_status: status }))
        }catch(e){
            return res.status(500).json({error:e.message})
        }
        
    }
}
