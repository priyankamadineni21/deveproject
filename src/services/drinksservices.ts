const getData = async (drinksRepo: any, reqBody: any) => {
    const { 
        drinkname,
        drinkprice
    } = reqBody;
    const drinks = await drinksRepo.save({
        
        drinkname,
        drinkprice
    });
    return drinks
};

const deletedrinkData = async (drinkRepo:any,req:any) => {
    const id = req.params;
    const response = await drinkRepo.delete(
        id
     );
     return response
    
};

export {
 getData as drinkservice,
 deletedrinkData
}