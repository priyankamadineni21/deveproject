
const getData = async (customerRepo: any, reqBody: any) => {
        //const customerrepository = customerRepo.getRepository(Customer)
        const { 
            id,
            customername
        } = reqBody;
        const customers = await customerRepo.save({
            id,
            customername
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
export {
     getData as customerservice,
     deletecustomerData
}