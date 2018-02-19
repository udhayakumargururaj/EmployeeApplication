import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import style from './NavBarStyle.css';
export const NavBar = () => {
        return (
          <Nav className='nav-conatiner' bsStyle="tabs" activeKey="1">
            <NavItem className='nav-item' eventKey="1">
             Employee 
            </NavItem>
          </Nav>
        );
}