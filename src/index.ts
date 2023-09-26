import "reflect-metadata"
import { DataSource } from "typeorm";
import { Customer } from "./entities/customerdetails";
import {customers}from "./routes/customerroute"
import {Drinks  } from "./entities/drinklist";
import {drinks} from "./routes/drinkslistroute";
import { Employees } from "./entities/employeedetails";
import {employees} from "./routes/employeeroute"
import { Orders } from "./entities/orderdetails";
import {orders} from "./routes/orderroute";
import {ormConfig} from "./ormconfig"

const fastify = require('fastify')({
  logger: true
})

  const main = async () => {
    try{ 
    const dataSource:DataSource = new DataSource(ormConfig)
    await dataSource.initialize();
  
    const customerRepo = dataSource.getRepository(Customer);
    fastify.decorate("customerRepo", customerRepo);
    const employeeRepo = dataSource.getRepository(Employees);
    fastify.decorate("employeeRepo",employeeRepo);
    const drinksRepo = dataSource.getRepository(Drinks);
    fastify.decorate("drinksRepo",drinksRepo);
    const orderRepo = dataSource.getRepository(Orders);
    fastify.decorate("orderRepo",orderRepo);
    

    fastify.register(customers)
    fastify.register(employees)
    fastify.register(drinks)
    fastify.register(orders)
    

  fastify.listen({ port: 8080,host: '127.0.0.1' }, function (err:any, address:any) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`SERVE ON ${address}`)
    // Server is listening
    console.log('server is listening on the port',8080)
  })
    }catch(error:any){
    console.error("here",error.message)
    throw new Error("database not connected")
  }  
}
  
main()



// const cafeRepository = dataSource.getRepository(cafe)
    // const tokennum = 10;
    // const cafes = await cafeRepository.findOneBy({tokennum: 12})
    // console.log(cafes);
    
  
    /*fastify.register(createcustomerdetails,{
      dataSource
    } )*/