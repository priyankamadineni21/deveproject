import { Entity , BaseEntity , Column, PrimaryGeneratedColumn} from "typeorm";

@Entity()

export class cafeperson extends BaseEntity{
@PrimaryGeneratedColumn()
   tokennum:number

@Column()
   category:string;

@Column("text")
   drinkopted: string

@Column()
   name: string

@Column()
   totaldrinks:number

@Column()
   price: number

@Column({
    default:true
})
   isGiven: boolean

}