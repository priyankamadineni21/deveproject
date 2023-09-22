import  {   FastifyInstance } from "fastify";

import drinkscontroller from "../controllers/drinkscontroller";

const detailsRoute = async (app:FastifyInstance)=>{
    app.post(
        "/drinks",
        drinkscontroller.handleData
    );
    
    app.delete(
        "/drinks/:id",
         drinkscontroller.handleDeleteData
        
    );
    
};

export { 
    detailsRoute as drinks
}













/*import { FastifyInstance } from "fastify";
import { Drinks } from "../entities/drinklist";

const detailsRoute:any  = async (app: FastifyInstance,opt:any) => {
        const dataSource = opt.dataSource;
        const drinkrepository = dataSource.getRepository(Drinks)

        
    app.post('/api/drinks', (req : any,res : any) => {
        
        console.log(req.body)
        const {
            drinkid,
            drinkname,
            drinkprice
        } = req.body;
        const cafee = drinkrepository.save({
            drinkid,
            drinkname,
            drinkprice,
            
        });
        res.send({cafee});
    });


    app.delete('/api/drinks/:drinkid', async (req : any,res : any)=>{
        console.log(req.params);
        
         const {drinkid} = req.params;
         //console.log(req.body)
          const response = await drinkrepository.delete({
             id:drinkid
          }
          );
         res.send(response);
     });
}

export {
    detailsRoute as listofdrinks
}
*/