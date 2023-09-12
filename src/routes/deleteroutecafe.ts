import  {   FastifyInstance } from "fastify";
import { cafe } from "../entities/cafe";

const cafeRouter = async (app: FastifyInstance) => {
    app.delete('/api/cafe/:tokennum', async (req : any,res : any)=>{
        
        const {tokennum} = req.params;
        //console.log(req.body)
         const response = await cafe.delete(
            tokennum
         );
        res.send(response);
    });
}

export {
    cafeRouter as deleteCafeRouter
};
