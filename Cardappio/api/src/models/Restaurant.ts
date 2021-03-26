    
import {Entity,Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany} from "typeorm";
import Table from "./Table";

@Entity('tb_restaurants')
export default class User {

    @PrimaryGeneratedColumn('increment')
    restaurant_id: number;

    @Column()
    restaurant_name: string;   

    @OneToMany(()=> Table,table=>table.restaurant_id,{
        cascade: ['insert','update','remove']
    })
    @JoinColumn({name:'restaurant_id'})
    restaurant_mesas:Table[];

    // @Column()
    // restaurant_cozinha: string;

    // @Column()
    // restaurant_garcon: string;

    // @Column()
    // restaurant_comandas:string;


    @OneToOne(()=> User, user => user.user_id)
    @JoinColumn({name: 'user_id'})
    user_id: User;

    /*
    @OneToMany(()=> Item,item=>item.category,{
        cascade: ['insert','update','remove']
    })
    
    @JoinColumn({name:'mesa_id'})
    items:Item[];
    */

}
