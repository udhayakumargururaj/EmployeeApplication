
export const processResponse = (response) => {
    let employeeData = null;
    const employeeList = response.map( (employee, index) => {
                            employeeData = []
                            employeeData.empName = employee.employee_name;
                            employeeData.empAge = employee.employee_age;
                            employeeData.salary = employee.employee_salary;
                            employeeData.empId = employee.id;
                            return employeeData;    
                        });
    return employeeList;
}