import  {   FastifyInstance } from "fastify";

import customercontroller from "../controllers/customercontroller"

const detailsRoute = async (app:FastifyInstance)=>{
    app.post(
        "/customers",
        customercontroller.handleGetData
    );

    app.delete(
        "/customers/:id",
        customercontroller.handleDeleteData
    );
    app.get(
        "/getcustomers",
        customercontroller.handleGetData
    )
};

export { 
    detailsRoute as customers
}
//-----------------------creates----------------------------
/*
const detailsRoute  = async (app: FastifyInstance,opt:any) => {
    app.post('/api/customers', (req : any,res : any) => {
        
        console.log(req.body)

        const dataSource = opt.dataSource;
        const customerrepository = dataSource.getRepository(Customer)
        const { 
            
            id,
            customername
        } = req.body;
        const customers = customerrepository.save({
            id,
            customername
        });
        res.send({customers});
    });
}

export {
    detailsRoute as createcustomerdetails
}
*/