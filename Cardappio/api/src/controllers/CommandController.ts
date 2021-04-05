import {Request,Response} from 'express'
import { getRepository } from 'typeorm';
import Table from '../models/Table';

export default {
    async newCommand(req:any,res:Response){
        const { qrcode } = req.params;
        const repoMesa = getRepository(Table)
        //const {table_id} = repoMesa.findOneOrFail()
    }
}