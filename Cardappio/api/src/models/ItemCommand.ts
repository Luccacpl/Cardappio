    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import Item from "./Item";
import Table from "./Table";

@Entity('tb_itemcomamnds')
export default class ItemCommand {

    @PrimaryGeneratedColumn()
    item_command_id: number;

    @Column()
    item_command_qtd:number;

    @OneToOne(()=> Item, item => item.item_id)
    @JoinColumn({name: 'user_id'})
    item_id: Item;

    @Column()
    item_command_total:number

    @Column()
    item_command_status:string

    @Column()
    command_checkout:Date;

    @ManyToOne(()=> Table, table => table.table_commands)
    @JoinColumn({name: 'table_id'})
    table_id: Table;

}
