import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('customer')

export class Customer {
    static save(arg0: {  customername: any; customerid:any}) {
        throw new Error("Method not implemented.");
    }
@PrimaryColumn()
id:Number

@Column()
customername: string

@Column()
age: number
}

