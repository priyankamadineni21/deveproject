import { Entity , BaseEntity ,Column,PrimaryGeneratedColumn} from "typeorm";

@Entity('cafe')

export class cafe extends BaseEntity{
@PrimaryGeneratedColumn()
   tokennum:number;
@Column()
   category:string;

@Column("text")
   drinkopted: string

@Column()
   name: string

@Column()
   price: number

@Column({
    default:true
})
   isGiven: boolean
 
}