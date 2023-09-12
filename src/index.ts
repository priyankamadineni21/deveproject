import "reflect-metadata"
import { DataSource } from "typeorm";
import { cafe } from "./entities/cafe";
import { createCafeRouter } from "./routes/cafe-route";
import { deleteCafeRouter } from "./routes/deleteroutecafe";
import {queryCafeRouter} from "./routes/querycafe";

// CommonJs
const fastify = require('fastify')({
  logger: true
})

//fastify.register(userRouter)

// Declare a route
//async function main(){

  const main = async () => {
    try{ 
      const dataSource = new DataSource({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "priya@123",
      database: "postgres",
      entities:[cafe],
      synchronize:true
    })

    await dataSource.initialize()
    fastify.register(createCafeRouter)
    fastify.register(deleteCafeRouter)
    fastify.register(queryCafeRouter)
  fastify.listen({ port: 8080,host: '127.0.0.1' }, function (err:any, address:any) {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    fastify.log.info(`SERVE ON ${address}`)
    // Server is now listening on ${address}
    console.log('server is listening on the port',8080)
  })
    }catch(error:any){
    console.error("here",error.message)
    throw new Error("database not connected")
  }  
}
  
main()