import React from 'react';
import { Button } from 'react-bootstrap';
const BootButton = (props) => {
    return (
        <div className={props.btnName}>
            <Button 
                bsStyle={props.btnStyle}
                bsSize="xsmall"
                onClick={props.eventClick}>
                {props.name}
            </Button>
     </div>
    );
}

export default BootButton;