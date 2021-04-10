import { getRepository } from "typeorm";
import Restaurant from "../models/Restaurant";
import Table from "../models/Table";


export default {
    async getRestaurantIdFromTable(table_id: number) {
        const repo = getRepository(Table);
        try {

            const { restaurant_id } = await repo.findOneOrFail({
                where: {
                    table_id: table_id
                }
            })
            return restaurant_id;

        }
        catch (e) {
            console.log('ERROR : ' + e.message);
        }
    },
    async getRestaurantIdFromUser(user_id: number) {
        try {
            const repo = getRepository(Restaurant);
            const { restaurant_id } = await repo.findOne({ user_id: user_id })
            return restaurant_id;
        }
        catch (e) {
            console.log('ERROR : ' + e.message);
        }
    },
    async getRestaurantCountFromUser(user_id: number) {
        try {
            const repo = getRepository(Restaurant);
            const contagem = await repo.count({ user_id: user_id })
            return contagem;
        }
        catch (e) {
            console.log('ERROR : ' + e.message);
        }
    }
}