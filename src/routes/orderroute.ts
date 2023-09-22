import  {   FastifyInstance } from "fastify";

import ordercontroller from "../controllers/ordercontroller";

const orderRoute = async (app:FastifyInstance)=>{
    app.post(
        "/orders",
        ordercontroller.handleData
    );
    
    
    app.delete(
        "/orders/:tokennum",
         ordercontroller.handleDeleteData
        
    );
    
};

export { 
    orderRoute as orders
}









/*import { Drinks } from "../entities/drinklist";
import  {   FastifyInstance } from "fastify";
import { Customer } from "../entities/customerdetails";
import { Orders } from "../entities/orderdetails";



const detailsRoute:any  = async (app: FastifyInstance,opt:any) => {
    const {dataSource} = opt;
    const orderrepository = dataSource.getRepository(Orders)

    app.post('/api/ordersplaced', async(req: any,res : any)=>{
        const {customername, drinkname} = req.body;
        const customerRepo = dataSource.getRepository(Customer);
        const drinkRepo = dataSource.getRepository(Drinks);
        const orderRepo = dataSource.getRepository(Orders);

        const customerRec = await customerRepo.findOneBy({customername});
        const drinkRec = await drinkRepo.findOneBy({drinkname})
        console.log(customerRec, drinkRec);
        const customerId = customerRec.id;
        const drinkId = drinkRec.id;

        const orderObj = new Orders();
        orderObj.customer = customerId;
        orderObj.drinks = drinkId;
        const order = await orderRepo.save(orderObj);

        res.send({ordersplaced:order})
    });

    app.delete('/api/orderdetails/:tokennum', async (req : any,res : any)=>{
        
        const {tokennum} = req.params;
        //console.log(req.body)
         const response = await orderrepository.delete(
            tokennum
         );
        res.send(response);
    });

    app.get('/api/customerorder/:tokennum', async(req : any,res : any) => {
        const {tokennum} = req.params;

        const readcustomerid = await orderrepository.findOneBy({tokennum});
        res.send({readcustomerid})
    });
    
}

export {
    detailsRoute as orderplacedbycustomer
}
*/
