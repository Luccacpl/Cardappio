    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import Item from "./Item";
import Table from "./Table";
import Status from '../Enums/Status'

@Entity('tb_item_commands')
export default class ItemCommand {

    @PrimaryGeneratedColumn()
    item_command_id: number;

    @Column()
    item_command_qtd:number;

    @OneToOne(()=> Item, item => item.item_id)
    @JoinColumn({name: 'item_id'})
    item_id: Item;

    @Column()
    item_command_price:number

    @Column()
    item_command_status:Status;


    @ManyToOne(()=> Table, table => table.table_commands)
    @JoinColumn({name: 'table_id'})
    table_id: Table;

}
