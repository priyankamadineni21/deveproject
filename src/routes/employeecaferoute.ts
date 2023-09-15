import { employeecafe } from "../entities/employeecafe";
import  {   FastifyInstance } from "fastify";


const cafeRouter = async (app: FastifyInstance) => {
    app.post('/api/employeecafe', (req : any,res : any) => {
        
        console.log(req.body)
        const {
            tokennum,
            category,
            drinkopted,
            name,
            totaldrinks,
            price,
            isGiven,
            emid,
            emname,
            salary
        } = req.body;
        const ecafee = employeecafe.save({
            tokennum,
            category,
            drinkopted,
            name,
            totaldrinks,
            price,
            isGiven,
            emid,
            emname,
            salary 
        });
        res.send({body: req.body});
    });
}

export {
    cafeRouter as employeeCafeRouter
}

/*
{
"tokennum":"357",
"category":"tea",
"drinkopted":"green tea",
"name":"harshi",
"totaldrinks":"1",
"price":"119",
"isGiven":"yes",
"emid":"2",
"emname":"ayush",
"salary":"7500"
}
*/