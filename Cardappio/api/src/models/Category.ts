import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, ManyToOne} from "typeorm";
import Item from "./Item";
import Restaurant from "./Restaurant";

@Entity('tb_categories')
export default class Category {

    @PrimaryGeneratedColumn('increment')
    category_id: number;

    @Column()
    category_name: string;

    @ManyToOne(()=> Restaurant, restaurant => restaurant.restaurant_mesas)
    @JoinColumn({name: 'restaurant_id'})
    restaurant_id: number;

    @OneToMany(()=> Item,item=>item.category_id,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'category_id'})
    items:Item[];
}