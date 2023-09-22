import { deleteemployeeData,employeeservice } from "../services/employeeservice";

export const handleData = async (req:any, res:any) => {
    const employees = await employeeservice(req.server.employeeRepo, req.body)
    res.send(employees);
}
export const handleDeleteData = async (req:any,res:any) =>{
    const deletecemployee = await deleteemployeeData(req.server.employeeRepo,req)
    res.send(deletecemployee);
}

export default {
	handleData,
    handleDeleteData
}