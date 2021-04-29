import { Request, Response } from 'express';
import crypto from 'crypto'
import { getRepository } from 'typeorm';
import Table from '../models/Table';
import QRCode from 'qrcode';
import Restaurant from '../models/Restaurant';
import { send } from 'process';
import restaurantService from '../services/RestaurantService';
//import tableView from '../Views/TableView'
export default {

    async getAllTable(req: any, res: Response) {
        const repoMesa = getRepository(Table) // pega repositorio
        try { //id,{relations:['tables']}
            const tables = await repoMesa.find({
                where: {
                    restaurant_id: await restaurantService.getRestaurantIdFromUser(req.user.id)
                }
            })
            console.log(tables);
            return res.status(201).json({
                content: tables
            });

        }
        catch (e) {
            console.log("Erro: " + e);
            return res.status(404).json();
        }
    },

    async updateTable(req: Request, res: Response) {
        const { id } = req.params;
        const { table_number } = req.body;
        const repoTable = getRepository(Table);
        try {
            repoTable.update(id, { table_number: table_number })
            return res.status(200).json({ Test: 'Test' });
        }
        catch (e) {
            return res.status(400).json({ ERROR: e.message });
        }
    },
    async deleteTable(req: Request, res: Response) {
        const { id } = req.params;
        const repoTable = getRepository(Table);
        try {
            const table = await repoTable.findOneOrFail(id)
            await repoTable.delete(id)
            return res.status(200).json({ "message": "Deleted table of id: " + id });
        } catch (e) {
            return res.status(404).json({ "message": "Fail to delete table of id: " + id });
        }

    },
    async postTable(req: any, res: Response) {
        const repoMesa = getRepository(Table) // pega repositorio
        const { table_number } = req.body;
        console.log(req.user.id)
        try {
            const restaurant_id = await restaurantService.getRestaurantIdFromUser(req.user.id);
            const data = {
                table_number: table_number,
                restaurant_id: restaurant_id
            }


            await repoMesa.save(data);
            /*
        No overload matches this call.
        Overload 1 of 4, '(entities: DeepPartial<Table>[], options?: SaveOptions): Promise<(DeepPartial<Table> & Table)[]>', gave the following error.
        Argument of type '{ table_id: any; restaurant_id: number; table_qrcode: string; }' is not assignable to parameter of type 'DeepPartial<Table>[]'.
        Type '{ table_id: any; restaurant_id: number; table_qrcode: string; }' is missing the following properties from type 'DeepPartial<Table>[]': length, pop, push, concat, and 26 more.
        Overload 2 of 4, '(entity: DeepPartial<Table>, options?: SaveOptions): Promise<DeepPartial<Table> & Table>', gave the following error.
        Argument of type '{ table_id: any; restaurant_id: number; table_qrcode: string; }' is not assignable to parameter of type 'DeepPartial<Table>'.
        Types of property 'restaurant_id' are incompatible. 
        Type 'number' is not assignable to type 'User | DeepPartial<User>'.ts(2769)
            */

            return res.status(201).json()
        } catch (e) {
            return res.json({ error: e.message });
        }
        //const {table_id}= req.body;
        const table_qrcode = crypto.randomBytes(5).toString('base64');

        // table_id
        // table_qrcode
        // restaurant_id

        //return res.json({ retornadoFOi: teste });



        //QRCode.toDataURL('randomTableCode', function (err, url)
        QRCode.toDataURL('1', function (err, url) {
            console.log(url)
        })


        return res.json({ mensagem: 'acabo' })
    }
}

