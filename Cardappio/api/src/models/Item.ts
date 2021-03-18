import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import Category from "./Category";

@Entity('items')
export default class Item {

    @PrimaryGeneratedColumn('increment')
    item_id: number;

    @Column()
    item_name: string;

    @Column()
    item_desc: string;

    @Column()
    item_imageurl: string;

    @Column()
    item_available: boolean;

    @Column()
    item_price: number;

    @ManyToOne(()=> Category, category => category.items)
    @JoinColumn({name: 'category_id'})
    category_id: Category;
}