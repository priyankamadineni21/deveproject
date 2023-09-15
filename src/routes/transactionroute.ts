import  {   FastifyInstance } from "fastify";
import { cafe } from "../entities/cafe";
import { transaction , transactiontypes} from "../entities/transaction"

const cafeRouter = async (app: FastifyInstance, opts:any) => {
    
    const {dataSource} = opts;
    const cafeRepository = dataSource.getRepository(cafe)
    const transactionRepository = dataSource.getRepository(transaction);
    app.post('/api/cafe/:tokennum/transaction', async (req : any,res : any)=>{
        
        const {tokennum} = req.params;
        //console.log(req.body)
        const {type, amount} =req.body;

         const cafeRec =await cafeRepository.findOneBy({tokennum});
         
         if(!cafeRec){
            res.send("not found");
         }
        //res.send(response);
        const transac = await transactionRepository.create({
            amount,
            type,
            cafeRec,
        });
        await transac.save();

        if(type === transactiontypes.DEPOSITEDTHROUGH){
            cafeRec.ispaid = cafeRec.ispaid + amount;
            cafeRec.transac = [transac];
        }
        // res.send("notpaid");
        //await cafe.save();
        res.send({cafeRec, transac});
    });
}

export {
    cafeRouter as createtransactionRouter
};

/*
{
"type":"phonepe",
"amount":"119"
}
*/