    
import {Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from "typeorm";
import Restaurant from "./Restaurant";

@Entity('tb_users')
export default class User {

    @PrimaryGeneratedColumn('increment')
    user_id: number;

    @Column()
    user_email: string;
    
    @Column()
    user_pass: string;

    @Column()
    user_name: string;

    @Column()
    user_dt_nasc: Date;

}
