    
import {Entity,Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('restaurants')
export default class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;   

    @Column()
    mesa: string;

    @Column()
    cozinha: string;

    @Column()
    garcon: string;

    @Column()
    comandas:string;

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
