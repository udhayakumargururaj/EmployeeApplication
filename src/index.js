import React from 'react';
import ReactDOM from 'react-dom';
import EmployeeContainer from './container/EmployeeContainer';
import { Provider } from 'react-redux'
import store from './store/index';

ReactDOM.render(
    <Provider store={store}>
        <EmployeeContainer/>
    </Provider>, 
    document.getElementById('app')
);
