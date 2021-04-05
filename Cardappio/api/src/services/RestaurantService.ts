import { getRepository } from "typeorm";
import Restaurant from "../models/Restaurant";


export default {

    async getRestaurantIdFromUser(user_id: number) {
        try {
            const repo = getRepository(Restaurant);
            const { restaurant_id } = await repo.findOne({ user_id: user_id })
            return restaurant_id;
        }
        catch(e){
            console.log('ERROR : '+e.message);
        }
    },
    async getRestaurantCountFromUser(user_id:number){
        try {
            const repo = getRepository(Restaurant);
            const contagem  = await repo.count({ user_id: user_id })
            return contagem;
        }
        catch(e){
            console.log('ERROR : '+e.message);
        }
    }
}