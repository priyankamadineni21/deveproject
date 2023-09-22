import { Entity  , Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('employees')

export class Employees {
static save(arg0: { emname: any; emsalary:any; }) {
    throw new Error("Method not implemented.");
}


@PrimaryGeneratedColumn()
   id:number

@Column()
   emname: string 
@Column()
  emsalary:Number
}