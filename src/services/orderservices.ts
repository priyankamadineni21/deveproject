import { Orders } from "../entities/orderdetails";

const getData = async (orderRepo: any, reqBody: any,customerRepo: any,drinkRepo: any,employeeRepo:any) => {
        const {
            customername, 
            drinkname,
            emname
        } = reqBody;
        const customerRec = await customerRepo.findOneBy({customername});
        const drinkRec = await drinkRepo.findOneBy({drinkname});
        const employeeRec = await employeeRepo.findOneBy({emname});

        console.log(customerRec, drinkRec,employeeRec);
        const customerId = customerRec.id;
        const drinkId = drinkRec.id;
        const employeeId = employeeRec.id;

        const orderObj = new Orders();
        orderObj.customer = customerId;
        orderObj.drinks = drinkId;
        orderObj.employees = employeeId;
        const order = await orderRepo.save(orderObj);
        return order
        
    };

const deleteData = async (orderRepo:any,req:any) => {
    const tokennum = req.params;
    const response = await orderRepo.delete(
        tokennum
     );
     return response
    
};
    
export {
 getData,
 deleteData as orderservice
}
