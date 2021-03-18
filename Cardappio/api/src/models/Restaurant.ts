    
import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('restaurants')
export default class User {

    @PrimaryGeneratedColumn('increment')
    restaurant_id: number;

    @Column()
    restaurant_name: string;   

    // @Column()
    // restaurant_mesa: string;

    // @Column()
    // restaurant_cozinha: string;

    // @Column()
    // restaurant_garcon: string;

    // @Column()
    // restaurant_comandas:string;

    @Column()
    user_id:number;

    /*
    @OneToMany(()=> Item,item=>item.category,{
        cascade: ['insert','update','remove']
    })
    
    @JoinColumn({name:'mesa_id'})
    items:Item[];
    */

}
