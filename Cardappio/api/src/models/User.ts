    
import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    email: string;
    
    @Column()
    password: string;

    @Column()
    secondPassword: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;

}
