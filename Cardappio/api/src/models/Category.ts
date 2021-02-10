import {Entity,Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from "typeorm";
import Item from "./Item";

@Entity('categories')
export default class Category {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @OneToMany(()=> Item,item=>item.category,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'category_id'})
    items:Item[];
}