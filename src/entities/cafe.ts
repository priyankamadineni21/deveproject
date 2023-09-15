import { Entity,CreateDateColumn,UpdateDateColumn, ManyToMany, Transaction, OneToMany } from "typeorm";
import { cafeperson } from "./inheritance-utils/cafeperson";
import { employeecafe } from "./employeecafe";
import { transaction } from "./transaction";

@Entity('cafe')

export class cafe extends cafeperson{
@CreateDateColumn()
   created_at:Date
   
@UpdateDateColumn()
   updated_at:Date
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
}