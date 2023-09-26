import { Entity,PrimaryGeneratedColumn,ManyToMany, Transaction, OneToMany, Column } from "typeorm";


@Entity('drinks')

export class Drinks {
        static delete(id: any) {
            throw new Error("Method not implemented.");
        }
        static save(arg0: { drinkid: any; category: any; drinkname: any; drinkprice: any; }) {
            throw new Error("Method not implemented.");
        }
        static createQueryBuilder(arg0: string) {
            throw new Error("Method not implemented.");
        }
 
		@PrimaryGeneratedColumn()
		id: number
	    
		@Column()
		drinkname: string
	
		@Column()
		drinkprice: number
        
		
	
}






/*
   @ManyToMany((type) => employeecafe, {
		cascade: true,
	})
	employeecafe: employeecafe[];

	@OneToMany(
		() => transaction,
		(transaction) => transaction.cafe
	)
	transactions: Transaction[];
    static ispaid: any;
    static transac: transaction[];
	*/