import React from 'react'
import {connect} from 'react-redux'
import  { getAllRecords } from '../action/EmployeeAction';
import Employee from '../component/Employee';
const mapStateToProps = (state) => { debugger;
	return {
		list : state.Employee
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		componentWillMount(){
			dispatch(getAllRecords());
		}
		
	}
}


const EmployeeContainer = connect(
	mapStateToProps, mapDispatchToProps
		)(Employee)

export default EmployeeContainer;