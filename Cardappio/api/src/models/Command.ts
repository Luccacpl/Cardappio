    
import {Entity,Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from "typeorm";
import Table from "./Table";

@Entity('tb_comamnds')
export default class Command {

    @PrimaryGeneratedColumn()
    command_id: number;

    @Column()
    command_checkin:Date;

    @Column()
    command_checkout:Date;

    @ManyToOne(()=> Table, table => table.table_commands)
    @JoinColumn({name: 'table_id'})
    table_id: Table;


}
