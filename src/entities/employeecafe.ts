import { Entity  , Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn, ManyToMany, JoinTable} from "typeorm";
import { cafeperson } from "./inheritance-utils/cafeperson";
import { cafe } from "./cafe";

@Entity('employeecafe')

export class employeecafe extends cafeperson{


@PrimaryGeneratedColumn()
   emid:number

@Column()
   emname: string

@Column({
    unique:true,
    length:5
})
   salary: string
@ManyToMany((type) =>cafe, {
		cascade: true,
	})
   @JoinTable({
		name: 'cafe_employeecafe',
      joinColumn:{
         name:'employeecafe',
         referencedColumnName:'salary',
      },
		inverseJoinColumn: {
			name: 'cafe',
			referencedColumnName: 'tokennum',
		},
	})
cafe:cafe[]
@CreateDateColumn()
   created_at:Date
   
@UpdateDateColumn()
   updated_at:Date
}