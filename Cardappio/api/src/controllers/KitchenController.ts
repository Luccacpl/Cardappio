import { getRepository } from 'typeorm'
import { Request, Response } from 'express'
import ItemCommand from '../models/ItemCommand'

export default {
    async getAllOrders(req: any, res: Response) {
        const repo = getRepository(ItemCommand)
        console.log(req.user)
        try {
            const items = await repo.query(
            'select item_command_id, '+
            '(select item_name from tb_items where item_id = ic.item_id), '+
            '(select item_desc from tb_items where item_id = ic.item_id), '+
            'item_command_status, table_number from tb_item_commands ic, tb_commands c, tb_tables tt, tb_restaurants tr '+
            'where ic.item_command_status = 1 or ic.item_command_status = 2 and '+
            'ic.command_id = c.command_id and '+
            'tt.table_id = c.table_id and '+
            'tt.restaurant_id = tr.restaurant_id and '+
            'tr.restaurant_id = '+req.user.id+' order by item_time_confirmed asc '
            );
            return res.status(200).json({ content: items });
        } catch (e) {
            return res.status(500).json({ error: e.message });
        }
    }
}
