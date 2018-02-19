import React from 'react';
import { Row, Col } from 'react-bootstrap';
import BootButton from '../common/BootButton';
const EmployeeItem = (props) => {
    const { employee, index } = props;
    return (
        <Row key={index} className="show-grid">
                <Col mdOffset={2} md={1}> {employee.empId}  </Col>
                <Col md={1}> {employee.empName} </Col>
                <Col md={1}> {employee.empAge}  </Col>
                <Col md={1}> {employee.salary}  </Col>
                <Col md={1}> 
                    <BootButton
                        name='Edit'
                        btnName='edit-btn'
                        btnStyle='primary'
                        eventClick={props.edit}
                    />
                </Col>
                <Col md={1}> 
                    <BootButton
                        name='Delete'
                        btnName='delete-btn'
                        btnStyle='danger'
                        eventClick={props.delete}
                    /> 
                </Col>

            </Row>
    )
}

export default EmployeeItem;