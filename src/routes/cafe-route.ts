import  {   FastifyInstance } from "fastify";
import { cafe } from "../entities/cafe";

//-----------------------creating and updating a router----------------------------

const cafeRouter = async (app: FastifyInstance) => {
    app.post('/api/cafe', (req : any,res : any) => {
        
        console.log(req.body)
        const {
            tokennum,
            category,
            drinkopted,
            name,
            totaldrinks,
            price,
            isGiven
        } = req.body;
        const cafee = cafe.save({
            tokennum,
            category,
            drinkopted,
            name,
            totaldrinks,
            price,
            isGiven  
            
        });
        res.send({body: req.body});
    });
}

export {
    cafeRouter as createCafeRouter
}
/*
{
"tokennum":"357",
"category":"tea",
"drinkopted":"green tea",
"name":"harshi",
"totaldrinks":"1",
"price":"119",
"isGiven":"yes"
}
*/