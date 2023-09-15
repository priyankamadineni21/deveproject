import  {   FastifyInstance } from "fastify";
import { cafe} from "../entities/cafe";
import { employeecafe } from "../entities/employeecafe";

const cafeRouter = async (app: FastifyInstance, opts:any) => {
    const {dataSource} = opts;
    const cafeidRepository = dataSource.getRepository(cafe)
    const employeecafeidRepository = dataSource.getRepository(employeecafe)
    //const connectionRepository = dataSource.getRepository(connectionrespo);

    app.put('/api/employeecafe/:emid/cafe/:tokennum', async (req : any,res : any) => {
             const {emid , tokennum} = req.params;

             const caffe = await cafeidRepository.findOneBy({tokennum});

             const emcafe = await employeecafeidRepository.findOneBy({emid})

             if(employeecafe && cafe){
                emcafe.cafe = [caffe];
                //await emcafe.save();
                res.send("banker connected to client");
             }else{
                res.send("banker not connected");
             }
             

    })}

    export {
        cafeRouter as connectemployeecafetocafe
    };