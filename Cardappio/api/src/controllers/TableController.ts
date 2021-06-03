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
                },
                order:{
                    table_number: 'ASC'
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

    async getTableById(req: any, res: Response) {
        console.log('entroui aqui')
        const repoMesa = getRepository(Table) // pega repositorio
        const { id } = req.params;
        try {
            const table = await repoMesa.findOneOrFail(id)
            return res.status(200).json({ content: table });
        }
        catch (e) {
            return res.status(404).json({ ERROR: 'NOT FOUND' });
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

