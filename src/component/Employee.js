import React, { Component } from 'react';
import EmployeeItem from './EmployeeItem';
import { NavBar } from './layout/NavBar';
import { Grid, Row, Col } from 'react-bootstrap';
import style from './Employee.css'
import autoBind from 'auto-bind';
class Employee extends Component {
    constructor(props){
        super(props);
        this.componentWillMount = props.componentWillMount.bind(this);
        autoBind(this);
    }
    
    editHandler() {
        console.log('Edit Event Triggered');
    }

    deleteHandler() {
        console.log('Delete Event Triggered');
    }
    render(){
        const { list : { employees } } = this.props;
        return(
            <Grid className='employee-container'>
            <Row className='Nav-Bar'>
                <Col md={12}>
                    <NavBar />
                </Col>
            </Row>
            <Row className='show-col-header'>
                <Col mdOffset={2} md={1}> ID </Col>
                <Col md={1}> Name </Col>
                <Col md={1}> Age  </Col>
                <Col md={1}> Salary  </Col>
            </Row>
                {
                    employees.map((employee, index) => {
                    return <EmployeeItem
                                employee={employee}
                                index={index}
                                edit={this.editHandler}
                                delete={this.deleteHandler}
                           />
                    })
                }
            
            </Grid>
        )
    }
}

export default Employee;