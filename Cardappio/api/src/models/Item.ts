import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('items')
export default class Item {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    desc: string;

    @Column()
    imageurl: string;

    @Column()
    available: boolean;

    @Column()
    price: number;
}