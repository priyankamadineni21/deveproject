import { Entity,CreateDateColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./customerdetails";
import { Drinks } from "./drinklist";
import { Employees } from "./employeedetails";

@Entity('orderdetails')
export class Orders {
static delete(tokennum: any) {
    throw new Error("Method not implemented.");
}
@PrimaryGeneratedColumn()
    tokennum:Number
    
//---------many to one----
@ManyToOne(() => Customer,(customer) => customer.id, {

onDelete:"CASCADE"
})
customer:Customer

@ManyToOne(() => Drinks,(drinks) => drinks.id,{

    onDelete:"CASCADE"
    })
drinks:Drinks

@ManyToOne(() => Employees,(employees) => employees.id,{

    onDelete:"CASCADE"
    })
employees:Employees

@CreateDateColumn()
   created_at:Date


}