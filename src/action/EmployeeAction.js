import { getAll } from '../DataServices/EmployeeDataService';

export function getAllRecords(){
		return async dispatch =>{
            let records = await getAll();
            dispatch({
                type: 'GET_ALL',
                payload: records
            })
        }
}
