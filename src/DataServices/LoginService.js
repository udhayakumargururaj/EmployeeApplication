import promise from 'bluebird';
import request from 'superagent';

export function loginService(username, password){ debugger;
	console.log(username,password + 'in service');
	let url = 'http://localhost:8090/login?username='+username+'&password='+password;
	return promise.promisifyAll(
				request.get(url)
				)
}