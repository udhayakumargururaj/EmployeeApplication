import  {EmployeeEntity} from '../shapes/EmployeeEntity';

export function getAllEmployees(state, payload){
    return {
        ...state,
        employees : payload
    }
}

const Employee = function (state = new EmployeeEntity(), action){
    switch(action.type){
        case 'GET_ALL':
            return getAllEmployees(
                state,
                action.payload
            )
        default:
            return state;
    }
}

export default Employee;