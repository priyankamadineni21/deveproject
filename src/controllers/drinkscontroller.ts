
import { deletedrinkData, drinkservice } from "../services/drinksservices";

export const handleData = async (req:any, res:any) => {
    const drinks = await drinkservice(req.server.drinksRepo, req.body)
    res.send(drinks);
}

export const handleDeleteData = async (req:any,res:any) =>{
    const deletedrink = await deletedrinkData(req.server.drinksRepo,req)
    res.send(deletedrink);
}


export default {
	handleData,
    handleDeleteData
}