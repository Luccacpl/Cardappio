import { Request, Response } from 'express';
import crypto from 'crypto'
import { getRepository } from 'typeorm';
import Table from '../models/Table';
import QRCode from 'qrcode';
import Restaurant from '../models/Restaurant';
import { send } from 'process';

export default {

    async getTable(req: Request, res: Response) {
        const { restaurant_id, id } = req.params;
        const tableRepository = getRepository(Table);
        try{
            //const table = await restaurantRepository.findOneOrFail(id,{relations:['tables']})
            //console.log(table);
            return res.sendStatus(200);
            //return res.status(200).json(tableView.render(table));
        }
        catch(e){
            console.log("Erro: " +e);
            return res.status(404).json();
        }
    },

    async updateTable(req: Request, res: Response) {
        return res.status(200).json({ Test: 'Test' });
    },
    async deleteTable(req: Request, res: Response) {
        const { id } = req.params;
        const repoTable = getRepository(Table);
        try {
            const table = await repoTable.findOneOrFail(id)
            await repoTable.delete(id)
            return res.status(200).json({"message":"Deleted table of id: " +id});
        }catch (e){
            return res.status(404).json({"message":"Fail to delete table of id: " +id});
        }
        
    },
    async postTable(req: any, res: Response) {
        const repo = getRepository(Restaurant);
        const repoMesa = getRepository(Table) // pega repositorio
        const {table_id} = req.body;
        console.log(req.user.id)
        try {
            const { restaurant_id } = await repo.findOne({ user_id: req.user.id })
            const data = {
                table_id:table_id,
                restaurant_id:restaurant_id,
                table_qrcode:crypto.randomBytes(5).toString('base64')
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
        }catch(e){
            return res.json({error:e.message});
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

