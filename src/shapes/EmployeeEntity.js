import { Record, List } from 'immutable';
import { Employee }  from './Employee';


export const EmployeeEntity = Record({
  employees : new List([new Employee()])
});
