import { getAllEmployees } from './Employee.Api';
import {processResponse} from '../DataMapper/EmployeeDataMapper';

export async function getAll(){
	let url = '/employees';
    let employeeList = await getAllEmployees(url);
    const processedData = processResponse(JSON.parse(employeeList.text));
    return processedData;
}