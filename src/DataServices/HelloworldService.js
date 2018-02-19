import promise from 'bluebird';
import request from 'superagent';

export function getHelloWorldService(){
<<<<<<< HEAD
	let url = 'http://localhost:8090/message';
=======
<<<<<<< HEAD
	let url = 'http://localhost:8090/message?user="udhay";
=======
	let url = 'http://localhost:8090/message?username=udhay';
>>>>>>> 468eb7e240575d550043ef3e352d19178fbfb006
>>>>>>> 99e1e0e5aa60b04bae7ed64f4fbed08065c6fed8
	return promise.promisifyAll(
				request.get(url)
				)
}