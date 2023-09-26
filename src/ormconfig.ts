// module.exports = {
//     type: "postgres",
//       host: "localhost",
//       port: 5432,
//       username: "postgres",
//       password: "priya@123",
//       database: "postgres",
//       entities:['../src/entities'],
//       synchronize:true
// }

import {DataSourceOptions} from "typeorm"
import { Customer } from "./entities/customerdetails"
import {Orders} from "./entities/orderdetails"
import { Drinks } from "./entities/drinklist"
import { Employees } from "./entities/employeedetails"
console.log(__dirname);

export const ormConfig:DataSourceOptions = {
  type: "postgres",
  database: "postgres",
  username: "postgres",
  password: "priya@123",
  port: 5432,
  host: "localhost",
  //entities: [__dirname, "./entities/*.ts"],
  entities: [__dirname+"/entities/*.ts"],
  synchronize: false,
  logging:false,
  //migrations: [__dirname, "./migrations/*.ts"]
  migrations:[__dirname+"/migration/*.ts"],
  subscribers:[],
}
