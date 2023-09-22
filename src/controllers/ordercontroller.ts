
import { orderservice, getData } from "../services/orderservices";

export const handleData = async (req:any, res:any) => {
    const orders = await getData(req.server.orderRepo, req.body,req.server.customerRepo,req.server.drinksRepo,req.server.employeeRepo)
    res.send(orders);
}

export const handleDeleteData = async (req:any,res:any) =>{
    const deleteOrder = await orderservice(req.server.orderRepo,req)
    res.send(deleteOrder);
}

export default {
    handleData,
    handleDeleteData
}
	
