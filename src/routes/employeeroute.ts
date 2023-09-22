import  {   FastifyInstance } from "fastify";

import employeecontroller from "../controllers/employeecontroller";

const detailsRoute = async (app:FastifyInstance)=>{
    app.post(
        "/employees",
        employeecontroller.handleData
    );

    app.delete(
        "/employees/:id",
        employeecontroller.handleDeleteData
    );
};

export { 
    detailsRoute as employees
}
