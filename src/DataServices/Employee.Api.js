import promise from 'bluebird';
import request from 'superagent';

const baseURL = 'http://dev01.q2apple.com/nodejs-slim-api/slim-api/public/api/v1';
export async function getAllEmployees(){
	let url = `${baseURL}/employees`;
    let employeeList = await request.get(url);
    return employeeList;
}