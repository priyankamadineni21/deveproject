import  {   FastifyInstance } from "fastify";
//import {  FastifyReply, FastifyRequest } from 'fastify';
import { cafe } from "../entities/cafe";
//import { RouteOptions } from "fastify";

//-----------------------creating a router----------------------------
const cafeRouter = async (app: FastifyInstance) => {
    app.post('/api/cafe', (req : any,res : any)=>{
        
        console.log(req.body)
        const {
            tokennum,
            category,
            drinkopted,
            name,
            price,
            isGiven
        } = req.body;
        const cafee = cafe.save({
            tokennum,
            category,
            drinkopted,
            name,
            price,
            isGiven  
            
        });
        res.send({body: req.body});
    });
}

export {
    cafeRouter as createCafeRouter
}

