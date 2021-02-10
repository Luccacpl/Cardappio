import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import Category from "./Category";

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

    @ManyToOne(()=> Category, category => category.items)
    @JoinColumn({name: 'category_id'})
    category: Category;
}