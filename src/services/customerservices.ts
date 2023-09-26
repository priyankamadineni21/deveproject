
const getData = async (customerRepo: any, reqBody: any) => {
        //const customerrepository = customerRepo.getRepository(Customer)
        const { 
            id,
            customername,
            age
        } = reqBody;
        const customers = await customerRepo.save({
            id,
            customername,
            age
        });
        return customers
    }
    const deletecustomerData = async (customerRepo:any,req:any) => {
        const id = req.params;
        const response = await customerRepo.delete(
            id
         );
         return response
        
    };

    const getCustomerData = async (customerRepo:any,req:any) => {
        const res = await customerRepo.get();
        return res
    }
export {
     getData as customerservice,
     deletecustomerData,
     getCustomerData
}