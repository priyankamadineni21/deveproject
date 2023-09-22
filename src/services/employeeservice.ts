const getData = async (employeeRepo: any, reqBody: any) => {
    const { 
        emname,
        emsalary
    } = reqBody;
    const employees = await employeeRepo.save({
        
        emname,
        emsalary
    });
    return employees
}
const deleteemployeeData = async (employeeRepo:any,req:any) => {
    const id = req.params;
    const response = await employeeRepo.delete(
        id
     );
     return response
    
};

export {
 getData as employeeservice,
 deleteemployeeData
}