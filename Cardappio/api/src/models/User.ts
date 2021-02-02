import { table } from "console";
import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
