
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany, PrimaryColumn, Generated } from "typeorm";
import Command from "./Command";
import Restaurant from "./Restaurant";

@Entity('tb_tables')
export default class Table {

    @PrimaryColumn()
    table_id: number;

    @Column()
    @Generated("uuid")
    table_qrcode: string;

    @Column()
    table_number:number;

    
    @Column({ name: 'restaurant_id' })
    restaurant_id: number;

    @OneToMany(() => Command, command => command.command_id, {
        cascade: ['insert', 'update', 'remove']
    })
    @JoinColumn({ name: 'command_id' })
    table_commands: Command[];


}
