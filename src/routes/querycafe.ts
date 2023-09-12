import  {   FastifyInstance } from "fastify";
import { cafe } from "../entities/cafe";

const cafeRouter = async (app: FastifyInstance) => {
    app.get('/api/cafe', async (req : any,res : any)=>{
       const rec =  await cafe.createQueryBuilder('c').select('c.drinkopted').getOne()
       console.log("printing here",rec);
        res.send(rec);
    });    
    
}

export {
    cafeRouter as queryCafeRouter
};
