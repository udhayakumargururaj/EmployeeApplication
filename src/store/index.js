import  Employee  from '../reducer/Employee';
import {createStore, combineReducers, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
const reducer = {
	Employee
}
const combReducer = combineReducers(reducer);
const rootReducer = createStore(combReducer,applyMiddleware(thunk));

export default rootReducer;