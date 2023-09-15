import { Entity,Column,BaseEntity, PrimaryGeneratedColumn, ManyToOne,JoinColumn } from "typeorm";
import { cafe } from "./cafe";

export enum transactiontypes{
    DEPOSITEDTHROUGH = ('phonepe')

}

@Entity('transaction')

export class transaction extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:Number

    @Column({
        type:"enum",
        enum:transactiontypes
    })
    type:string

    @Column({
        type :"numeric"
    })
    amount :Number
   
    @ManyToOne(
        () => cafe,
        (cafe) => cafe.transactions,
        {
            onDelete: 'CASCADE',
        }
    )
    @JoinColumn({
		name: 'tokennum',
	})
	cafe: cafe;

}
