import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import Item from "./Item";

@Entity('categories')
export default class Category {

    @PrimaryGeneratedColumn('increment')
    category_id: number;

    @Column()
    category_name: string;

    @OneToMany(()=> Item,item=>item.category_id,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'category_id'})
    items:Item[];
}