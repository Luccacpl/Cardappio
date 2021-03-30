    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import Command from "./Command";
import Restaurant from "./Restaurant";

@Entity('tb_tables')
export default class Table {

    @PrimaryGeneratedColumn()
    table_id: number;

    @Column()
    table_qrcode:string;

    @ManyToOne(()=> Restaurant, restaurant => restaurant.restaurant_mesas)
    @JoinColumn({name: 'restaurant_id'})
    restaurant_id: number;

    @OneToMany(()=> Command,command=>command.command_id,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'command_id'})
    table_commands:Command[];


}
