    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import Item from "./Item";
import Table from "./Table";
import Status from '../Enums/Status'
import Command from "./Command";

@Entity('tb_item_commands')
export default class ItemCommand {

    @PrimaryGeneratedColumn()
    item_command_id: number;

    @Column()
    item_command_qtd:number;

    
    @Column({name: 'item_id'})
    item_id: number;

    @OneToOne(()=> Item, item => item.item_id)
    @JoinColumn({name: 'item_id'})
    item: Item;

    @Column()
    item_time_confirmed:number

    @Column()
    item_command_status:Status;


    @ManyToOne(()=> Command, command => command.command_id)
    @JoinColumn({name: 'command_id'})
    command_id: number;

}
