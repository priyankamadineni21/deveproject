import { deletecustomerData,customerservice } from "../services/customerservices";

export const handleGetData = async (req:any, res:any) => {
    const customers = await customerservice(req.server.customerRepo, req.body)
    res.send(customers);
}
export const handleDeleteData = async (req:any,res:any) =>{
    const deletecustomer = await deletecustomerData(req.server.customerRepo,req)
    res.send(deletecustomer);
}
export default {
	handleGetData,
    handleDeleteData
}