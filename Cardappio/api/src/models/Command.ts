    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import ItemCommand from "./ItemCommand";
import Restaurant from "./Restaurant";
import Table from "./Table";

@Entity('tb_commands')
export default class Command {

    @PrimaryGeneratedColumn()
    command_id: number;

    @Column()
    command_checkin:Date;

    @Column({
        nullable:true
    })
    command_checkout:Date;

    @Column()
    command_total_price:number;

    @ManyToOne(()=> Table, table => table.table_commands)
    @JoinColumn({name: 'table_id'})
    table_id: number;
    
    @Column()
    table_number: number;

    @ManyToOne(()=> Restaurant, restaurant => restaurant.commands)
    @JoinColumn({name: 'restaurant_id'})
    restaurant_id: number;

    @OneToMany(()=> ItemCommand,itemCommand=>itemCommand.command_id,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'command_id'})
    itemsCommand:ItemCommand[];




}
