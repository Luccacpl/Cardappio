import Table from '../models/Table'; //Montando um TableView para trazer o restaurante e a mesa junto
import Restaurant from '../models/Restaurant';

export default {

    render(table: Table){
        return{
            id: table.table_id,
            qr: table.table_qrcode,
            rest: table.restaurant_id,
            comm: table.table_commands

        };
    },
    renderMany(table : Table[]) {
        return table.map(table => this.render(table));
    }

}